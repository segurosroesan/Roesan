'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, HeartPulse, Building2, FileCheck, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { tx, id } from '@instantdb/react';
import { db } from '@/lib/instant';

// Zod Schemas for each step
const Step1Schema = z.object({
  type: z.enum(['auto', 'salud', 'empresarial', 'cumplimiento']),
});

const Step2AutoSchema = z.object({
  city: z.string().min(2, "La ciudad es requerida"),
  vehiclePlate: z.string().min(6, "Placa no válida").max(6),
  vehicleYear: z.string().min(4, "Año no válido").max(4),
});

const Step2SaludSchema = z.object({
  city: z.string().min(2, "La ciudad es requerida"),
  patientAge: z.string().min(1, "Edad requerida"),
  healthCoverage: z.enum(['individual', 'familiar']),
});

const Step2EmpresaSchema = z.object({
  city: z.string().min(2, "La ciudad es requerida"),
  companyNit: z.string().min(8, "NIT no válido"),
  companySector: z.string().min(3, "Sector es requerido"),
  companyEmployees: z.string().min(1, "Número de empleados requerido"),
});

const Step2CumplimientoSchema = z.object({
  city: z.string().min(2, "La ciudad es requerida"),
  contractType: z.string().min(3, "Tipo de contrato requerido"),
  contractValue: z.string().min(4, "Valor estimado requerido"),
});

const Step3ContactSchema = z.object({
  name: z.string().min(3, "El nombre completo es requerido"),
  phone: z.string().min(10, "El celular debe tener 10 dígitos"),
  email: z.string().email("Correo electrónico inválido"),
});

type FormData = z.infer<typeof Step1Schema> &
  Partial<z.infer<typeof Step2AutoSchema>> &
  Partial<z.infer<typeof Step2SaludSchema>> &
  Partial<z.infer<typeof Step2EmpresaSchema>> &
  Partial<z.infer<typeof Step2CumplimientoSchema>> &
  Partial<z.infer<typeof Step3ContactSchema>>;

const insuranceTypes = [
  { id: 'auto', label: 'Vehículos', icon: Car, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'salud', label: 'Salud / Vida', icon: HeartPulse, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 'empresarial', label: 'Empresas', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'cumplimiento', label: 'Cumplimiento', icon: FileCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
];

interface QuoteFunnelProps {
  initialType?: 'auto' | 'salud' | 'empresarial' | 'cumplimiento';
}

export default function QuoteFunnel({ initialType = 'auto' }: QuoteFunnelProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      type: initialType,
    },
  });

  const selectedType = watch('type');

  const handleNext = async () => {
    let isStepValid = false;

    if (step === 1) {
      isStepValid = await trigger(['type']);
    } else if (step === 2) {
      if (selectedType === 'auto') isStepValid = await trigger(['city', 'vehiclePlate', 'vehicleYear']);
      if (selectedType === 'salud') isStepValid = await trigger(['city', 'patientAge', 'healthCoverage']);
      if (selectedType === 'empresarial') isStepValid = await trigger(['city', 'companyNit', 'companySector', 'companyEmployees']);
      if (selectedType === 'cumplimiento') isStepValid = await trigger(['city', 'contractType', 'contractValue']);
    }

    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormData) => {
    // Validate final step before submit
    const isFinalValid = await trigger(['name', 'phone', 'email']);
    if (!isFinalValid) return;

    setIsSubmitting(true);

    try {
      const leadId = id();
      const createdAt = Date.now();

      // 1. Save to InstantDB
      await db.transact(
        tx.insurance_leads[leadId].update({
          ...data,
          status: 'nuevo',
          createdAt,
        })
      );

      // 2. Send to n8n Webhook for Google Sheets integration
      // Note: We swallow errors here so the UI still shows success even if webhook fails,
      // because we already have the data safe in InstantDB.
      if (process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL) {
          fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, leadId, origin: 'QuoteFunnel', createdAt }),
          }).catch(console.error);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Hubo un error al enviar tu solicitud. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSuccessMessage = () => {
    switch (selectedType) {
      case 'auto': return "Validando la placa de tu vehículo... Un asesor te enviará las 3 mejores opciones en minutos.";
      case 'salud': return "Analizando tu perfil. Pronto te contactaremos con las opciones de medicina prepagada o póliza ideales.";
      case 'empresarial': return "Buscando la mejor protección para tu operación comercial. Un especialista B2B te llamará enseguida.";
      case 'cumplimiento': return "Acelerando tu trámite de cumplimiento. Te contactaremos con la aseguradora más idónea en breve.";
      default: return "Gracias. Un asesor de ROESAN te enviará opciones en el menor tiempo posible.";
    }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
        <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud recibida exitosamente!</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {getSuccessMessage()}
          </p>
          <Button onClick={() => window.location.reload()} variant="outline" className="min-w-[200px]">
            Cotizar otro seguro
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-md">
      {/* ProgressBar */}
      <div className="w-full bg-gray-100 h-2">
        <div 
          className="bg-primary h-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="min-h-[350px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* STEP 1: SELECT TYPE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Qué deseas asegurar hoy?</h3>
                  <p className="text-gray-500">Selecciona el tipo de póliza para continuar</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {insuranceTypes.map((t) => {
                    const isSelected = selectedType === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setValue('type', t.id as any)}
                        className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${
                          isSelected ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' : 'border-gray-100 hover:border-primary/30 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`p-3 rounded-full ${isSelected ? 'bg-primary text-white' : t.bg + ' ' + t.color}`}>
                          <t.icon className="w-6 h-6" />
                        </div>
                        <span className={`font-semibold ${isSelected ? 'text-primary' : 'text-gray-700'}`}>{t.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: SPECIFIC DETAILS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Detalles del riesgo</h3>
                  <p className="text-gray-500">Solo necesitamos un par de datos para ser precisos</p>
                </div>

                <div className="space-y-4">
                  {/* General for step 2 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ciudad de residencia / operación *</label>
                    <Input {...register('city')} placeholder="Ej. Bogotá, Medellín..." className={errors.city ? 'border-red-500' : ''} />
                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                  </div>

                  {/* Auto Fields */}
                  {selectedType === 'auto' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Placa *</label>
                        <Input {...register('vehiclePlate')} placeholder="AAA123" maxLength={6} className={errors.vehiclePlate ? 'border-red-500 uppercase' : 'uppercase'} />
                        {errors.vehiclePlate && <span className="text-red-500 text-xs">{errors.vehiclePlate.message}</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Año *</label>
                        <Input type="number" {...register('vehicleYear')} placeholder="Ej. 2021" maxLength={4} className={errors.vehicleYear ? 'border-red-500' : ''} />
                        {errors.vehicleYear && <span className="text-red-500 text-xs">{errors.vehicleYear.message}</span>}
                      </div>
                    </div>
                  )}

                  {/* Salud Fields */}
                  {selectedType === 'salud' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Edad Mínima *</label>
                        <Input type="number" {...register('patientAge')} placeholder="Ej. 35" className={errors.patientAge ? 'border-red-500' : ''} />
                        {errors.patientAge && <span className="text-red-500 text-xs">{errors.patientAge.message}</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Cobertura *</label>
                        <select 
                          {...register('healthCoverage')} 
                          className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.healthCoverage ? 'border-red-500' : ''}`}
                        >
                          <option value="">Selecciona...</option>
                          <option value="individual">Individual</option>
                          <option value="familiar">Familiar</option>
                        </select>
                        {errors.healthCoverage && <span className="text-red-500 text-xs">{errors.healthCoverage.message}</span>}
                      </div>
                    </div>
                  )}

                  {/* Empresarial Fields */}
                  {selectedType === 'empresarial' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">NIT o Documento *</label>
                          <Input {...register('companyNit')} placeholder="Sin guiones" className={errors.companyNit ? 'border-red-500' : ''} />
                          {errors.companyNit && <span className="text-red-500 text-xs">{errors.companyNit.message}</span>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Empleados *</label>
                          <Input type="number" {...register('companyEmployees')} placeholder="Ej. 15" className={errors.companyEmployees ? 'border-red-500' : ''} />
                          {errors.companyEmployees && <span className="text-red-500 text-xs">{errors.companyEmployees.message}</span>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Sector Económico *</label>
                        <Input {...register('companySector')} placeholder="Ej. Construcción, Tecnología..." className={errors.companySector ? 'border-red-500' : ''} />
                        {errors.companySector && <span className="text-red-500 text-xs">{errors.companySector.message}</span>}
                      </div>
                    </>
                  )}

                  {/* Cumplimiento Fields */}
                  {selectedType === 'cumplimiento' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Tipo de Contrato *</label>
                        <Input {...register('contractType')} placeholder="Ej. Obra civil, Suministro..." className={errors.contractType ? 'border-red-500' : ''} />
                        {errors.contractType && <span className="text-red-500 text-xs">{errors.contractType.message}</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Valor Estimado (COP) *</label>
                        <Input type="number" {...register('contractValue')} placeholder="Sin puntos ni comas" className={errors.contractValue ? 'border-red-500' : ''} />
                        {errors.contractValue && <span className="text-red-500 text-xs">{errors.contractValue.message}</span>}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONTACT DETAILS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Último paso</h3>
                  <p className="text-gray-500">¿A dónde te enviamos las propuestas?</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombre Completo *</label>
                    <Input {...register('name')} placeholder="Juan Pérez" className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Celular (WhatsApp para opciones rápidas) *</label>
                    <Input type="tel" {...register('phone')} placeholder="300 000 0000" className={errors.phone ? 'border-red-500' : ''} />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Correo Electrónico *</label>
                    <Input type="email" {...register('email')} placeholder="tu@correo.com" className={errors.email ? 'border-red-500' : ''} />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Tus datos están protegidos. No hacemos spam, solo agilizamos tu cotización.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t">
            {step > 1 ? (
              <Button type="button" variant="ghost" onClick={handleBack} disabled={isSubmitting} className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Atrás
              </Button>
            ) : (
              <div /> // Placeholder to maintain flex layout
            )}

            {step < 3 ? (
              <Button type="button" onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white min-w-[120px]">
                Siguiente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 text-white min-w-[150px]">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  'Recibir Cotización'
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
