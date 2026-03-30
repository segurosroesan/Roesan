'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car, HeartPulse, Building2, FileCheck,
  ArrowRight, ArrowLeft, CheckCircle2, Loader2,
  Lock, Clock, MessageCircle, Star, Shield,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { tx, id } from '@instantdb/react';
import { db } from '@/lib/instant';

// ─── Zod Schemas ──────────────────────────────────────────────────────────────
const Step1Schema = z.object({
  type: z.enum(['auto', 'salud', 'empresarial', 'cumplimiento']),
});

const Step2AutoSchema = z.object({
  city: z.string().min(2, 'La ciudad es requerida'),
  vehiclePlate: z.string().min(6, 'Placa no válida').max(6),
  vehicleYear: z.string().min(4, 'Año no válido').max(4),
});

const Step2SaludSchema = z.object({
  city: z.string().min(2, 'La ciudad es requerida'),
  patientAge: z.string().min(1, 'Edad requerida'),
  healthCoverage: z.enum(['individual', 'familiar']),
});

const Step2EmpresaSchema = z.object({
  city: z.string().min(2, 'La ciudad es requerida'),
  companySector: z.string().min(3, 'Sector es requerido'),
  companyEmployees: z.string().min(1, 'Número de empleados requerido'),
});

const Step2CumplimientoSchema = z.object({
  city: z.string().min(2, 'La ciudad es requerida'),
  contractType: z.string().min(3, 'Tipo de contrato requerido'),
  contractValue: z.string().min(4, 'Valor estimado requerido'),
});

const Step3ContactSchema = z.object({
  name: z.string().min(3, 'El nombre completo es requerido'),
  phone: z.string().min(10, 'El celular debe tener 10 dígitos'),
  email: z.string().email('Correo electrónico inválido'),
});

type FormData = z.infer<typeof Step1Schema> &
  Partial<z.infer<typeof Step2AutoSchema>> &
  Partial<z.infer<typeof Step2SaludSchema>> &
  Partial<z.infer<typeof Step2EmpresaSchema>> &
  Partial<z.infer<typeof Step2CumplimientoSchema>> &
  Partial<z.infer<typeof Step3ContactSchema>>;

// ─── Static Data ──────────────────────────────────────────────────────────────
const insuranceTypes = [
  { id: 'auto', label: 'Vehículos', icon: Car, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'salud', label: 'Salud / Vida', icon: HeartPulse, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 'empresarial', label: 'Empresas', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'cumplimiento', label: 'Cumplimiento', icon: FileCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
];

const step2Titles: Record<string, { title: string; sub: string }> = {
  auto: { title: 'Datos de tu vehículo', sub: 'Usamos la placa para encontrar las mejores tarifas exactas para tu modelo' },
  salud: { title: 'Tu perfil de salud', sub: 'Con esto encontramos el plan que mejor cubre tu situación familiar' },
  empresarial: { title: 'Tu empresa', sub: 'En 2 minutos tenemos un perfil de riesgo preciso para tu operación' },
  cumplimiento: { title: 'Tu contrato', sub: 'Con esto identificamos la aseguradora con mejores cupos de cumplimiento' },
};

const socialProofMessages = [
  'Carlos M., Bogotá — recibió su cotización de auto en 38 min. ⭐⭐⭐⭐⭐',
  'María L., Medellín — 3 opciones de salud comparadas en 1 hora. ⭐⭐⭐⭐⭐',
  'Inversiones GH Ltda. — póliza empresarial activa en el mismo día. ⭐⭐⭐⭐⭐',
  'Andrés P., Cali — póliza de cumplimiento aprobada en horas. ⭐⭐⭐⭐⭐',
];

interface QuoteFunnelProps {
  initialType?: 'auto' | 'salud' | 'empresarial' | 'cumplimiento';
}

export default function QuoteFunnel({ initialType = 'auto' }: QuoteFunnelProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedDataTerms, setAcceptedDataTerms] = useState(false);
  const [socialProofIdx] = useState(() => Math.floor(Math.random() * socialProofMessages.length));

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { type: initialType },
  });

  const selectedType = watch('type');

  const handleNext = async () => {
    let isStepValid = false;

    if (step === 1) {
      isStepValid = await trigger(['type']);
    } else if (step === 2) {
      if (selectedType === 'auto') isStepValid = await trigger(['city', 'vehiclePlate', 'vehicleYear']);
      if (selectedType === 'salud') isStepValid = await trigger(['city', 'patientAge', 'healthCoverage']);
      if (selectedType === 'empresarial') isStepValid = await trigger(['city', 'companySector', 'companyEmployees']);
      if (selectedType === 'cumplimiento') isStepValid = await trigger(['city', 'contractType', 'contractValue']);
    }

    if (isStepValid) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: FormData) => {
    const isFinalValid = await trigger(['name', 'phone', 'email']);
    if (!isFinalValid) return;

    setIsSubmitting(true);
    try {
      const leadId = id();
      const createdAt = Date.now();

      await db.transact(
        tx.insurance_leads[leadId].update({ ...data, status: 'nuevo', createdAt })
      );

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

  const getWhatsAppMessage = () => {
    const vals = getValues();
    const typeLabels: Record<string, string> = {
      auto: 'seguro de auto',
      salud: 'seguro de salud',
      empresarial: 'seguro empresarial',
      cumplimiento: 'póliza de cumplimiento',
    };
    const ramo = typeLabels[vals.type] || 'seguro';
    return encodeURIComponent(`Hola, acabo de solicitar una cotización de ${ramo} en su página web. Mi nombre es ${vals.name || ''}. ¿Me pueden ayudar?`);
  };

  // ─── Success State ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
        <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[420px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¡Tu solicitud está en manos de un experto!
          </h3>
          <p className="text-gray-500 text-base mb-2 leading-relaxed max-w-sm">
            Revisaremos tu perfil y te enviaremos las mejores opciones del mercado.
          </p>
          <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium bg-emerald-50 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4" />
            Tiempo de respuesta promedio: <strong>menos de 2 horas</strong>
          </div>

          <a
            href={`https://wa.me/576016294040?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-6 rounded-xl transition-colors mb-3"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero respuesta inmediata por WhatsApp
          </a>

          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Cotizar otro seguro
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ─── Step Titles ────────────────────────────────────────────────────────────
  const stepLabels = ['Tipo', 'Detalles', 'Contacto'];

  // ─── Main Form ──────────────────────────────────────────────────────────────
  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-md">
      {/* Progress Header */}
      <div className="px-6 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const isCompleted = step > num;
            const isActive = step === num;
            return (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : isActive
                      ? 'bg-primary text-white ring-4 ring-primary/20'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? '✓' : num}
                </div>
                <span className={`hidden sm:block text-xs font-medium ${isActive ? 'text-primary' : isCompleted ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {label}
                </span>
                {i < stepLabels.length - 1 && (
                  <div className={`flex-1 h-0.5 w-10 sm:w-16 mx-2 rounded transition-all ${step > num ? 'bg-emerald-400' : 'bg-gray-100'}`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full bg-gray-100 h-1 rounded-full">
          <div
            className="bg-primary h-full rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="min-h-[340px] flex flex-col justify-between">
          <AnimatePresence mode="wait">

            {/* ── STEP 1: SELECT TYPE ─────────────────────────────────────── */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">¿Qué quieres proteger?</h3>
                  <p className="text-sm text-gray-500">Obtén 3 opciones comparadas en <strong>menos de 2 horas</strong></p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {insuranceTypes.map((t) => {
                    const isSelected = selectedType === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setValue('type', t.id as 'auto' | 'salud' | 'empresarial' | 'cumplimiento')}
                        className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-2.5 transition-all select-none ${
                          isSelected
                            ? 'border-primary bg-primary/5 shadow-md scale-[1.02]'
                            : 'border-gray-100 hover:border-primary/30 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`p-2.5 rounded-full ${isSelected ? 'bg-primary text-white' : t.bg + ' ' + t.color}`}>
                          <t.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-sm font-semibold ${isSelected ? 'text-primary' : 'text-gray-700'}`}>
                          {t.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
                  <Lock className="w-3 h-3" />
                  <span>Sin spam · Sin compromiso · 100% gratis</span>
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: SPECIFIC DETAILS ────────────────────────────────── */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {step2Titles[selectedType]?.title ?? 'Detalles'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {step2Titles[selectedType]?.sub ?? 'Solo un par de datos para ser precisos'}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Ciudad — always visible */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Ciudad de residencia / operación *</label>
                    <Input
                      {...register('city')}
                      placeholder="Ej. Bogotá, Medellín, Cali..."
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                  </div>

                  {/* ── Auto ── */}
                  {selectedType === 'auto' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Placa *</label>
                        <Input
                          {...register('vehiclePlate')}
                          placeholder="AAA123"
                          maxLength={6}
                          className={`uppercase ${errors.vehiclePlate ? 'border-red-500' : ''}`}
                        />
                        {errors.vehiclePlate && <span className="text-red-500 text-xs">{errors.vehiclePlate.message}</span>}
                        <p className="text-xs text-gray-400">Identificamos el modelo exacto</p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Año *</label>
                        <Input
                          type="number"
                          {...register('vehicleYear')}
                          placeholder="2021"
                          maxLength={4}
                          className={errors.vehicleYear ? 'border-red-500' : ''}
                        />
                        {errors.vehicleYear && <span className="text-red-500 text-xs">{errors.vehicleYear.message}</span>}
                      </div>
                    </div>
                  )}

                  {/* ── Salud ── */}
                  {selectedType === 'salud' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Edad Mínima *</label>
                        <Input
                          type="number"
                          {...register('patientAge')}
                          placeholder="Ej. 35"
                          className={errors.patientAge ? 'border-red-500' : ''}
                        />
                        {errors.patientAge && <span className="text-red-500 text-xs">{errors.patientAge.message}</span>}
                      </div>
                      <div className="space-y-1.5">
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

                  {/* ── Empresarial (NIT REMOVED) ── */}
                  {selectedType === 'empresarial' && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-sm font-medium text-gray-700">Sector Económico *</label>
                          <Input
                            {...register('companySector')}
                            placeholder="Ej. Construcción, Tecnología, Comercio..."
                            className={errors.companySector ? 'border-red-500' : ''}
                          />
                          {errors.companySector && <span className="text-red-500 text-xs">{errors.companySector.message}</span>}
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-gray-700">N.° Empleados *</label>
                          <Input
                            type="number"
                            {...register('companyEmployees')}
                            placeholder="Ej. 15"
                            className={errors.companyEmployees ? 'border-red-500' : ''}
                          />
                          {errors.companyEmployees && <span className="text-red-500 text-xs">{errors.companyEmployees.message}</span>}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── Cumplimiento ── */}
                  {selectedType === 'cumplimiento' && (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Tipo de Contrato *</label>
                        <Input
                          {...register('contractType')}
                          placeholder="Ej. Obra civil, Suministro, Prestación de servicios..."
                          className={errors.contractType ? 'border-red-500' : ''}
                        />
                        {errors.contractType && <span className="text-red-500 text-xs">{errors.contractType.message}</span>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Valor Estimado (COP) *</label>
                        <Input
                          type="number"
                          {...register('contractValue')}
                          placeholder="Sin puntos ni comas (Ej. 50000000)"
                          className={errors.contractValue ? 'border-red-500' : ''}
                        />
                        {errors.contractValue && <span className="text-red-500 text-xs">{errors.contractValue.message}</span>}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── STEP 3: CONTACT DETAILS ─────────────────────────────────── */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Casi listo</h3>
                  <p className="text-sm text-gray-500">¿A dónde enviamos tu comparativa personalizada?</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Nombre Completo *</label>
                    <Input
                      {...register('name')}
                      placeholder="Juan Pérez"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">
                      Celular WhatsApp *
                      <span className="ml-1 text-xs text-emerald-600 font-normal">Te enviamos las propuestas aquí</span>
                    </label>
                    <Input
                      type="tel"
                      {...register('phone')}
                      placeholder="300 000 0000"
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Correo Electrónico *</label>
                    <Input
                      type="email"
                      {...register('email')}
                      placeholder="tu@correo.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                </div>

                {/* Social proof inline */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-100">
                  <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700">{socialProofMessages[socialProofIdx]}</p>
                </div>

                {/* Habeas Data */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100">
                  <input
                    type="checkbox"
                    id="acceptedDataTerms"
                    checked={acceptedDataTerms}
                    onChange={(e) => setAcceptedDataTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-purple-700 shrink-0 cursor-pointer"
                    required
                  />
                  <label htmlFor="acceptedDataTerms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                    Acepto el{' '}
                    <a href="/privacidad" target="_blank" className="text-purple-700 underline font-medium hover:text-purple-900">
                      tratamiento de mis datos personales
                    </a>{' '}
                    conforme a la Ley 1581 de 2012 (Habeas Data) para recibir asesoría en seguros.
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Controls ──────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            {step > 1 ? (
              <Button type="button" variant="ghost" onClick={handleBack} disabled={isSubmitting} className="text-gray-500 text-sm">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Atrás
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 text-white min-w-[140px] font-semibold"
              >
                {step === 1 ? 'Ver opciones' : 'Continuar'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <div className="flex flex-col items-end gap-1.5 w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting || !acceptedDataTerms}
                  className="bg-primary hover:bg-primary/90 text-white w-full font-bold text-base py-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Quiero mis 3 Propuestas Gratis
                    </>
                  )}
                </Button>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 justify-center w-full">
                  <Clock className="w-3 h-3" />
                  Respuesta promedio: menos de 2 horas
                </div>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
