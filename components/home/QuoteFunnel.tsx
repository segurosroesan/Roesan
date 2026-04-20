"use client";

import { useState } from "react";
import type { ComponentType, FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Car,
  Check,
  FileCheck,
  HeartPulse,
  House,
  Laptop,
  Loader2,
  Package,
  PawPrint,
  Send,
  Shield,
  UserRound,
  Users,
} from "lucide-react";
import { id, tx } from "@instantdb/react";
import { db } from "@/lib/instant";
import { enviarLeadAlCRM } from "@/lib/crmIntegration";

type LegacyType = "auto" | "salud" | "empresarial" | "cumplimiento" | "vida";
type CustomerType = "persona" | "empresa";
export type ProductId =
  | "seguro-vida"
  | "salud-medicina-prepagada"
  | "todo-riesgo-autos"
  | "seguro-hogar"
  | "seguro-mascotas"
  | "seguro-vida-deudor"
  | "otros-persona"
  | "cumplimiento"
  | "transporte"
  | "pyme"
  | "responsabilidad-civil"
  | "salud-colectivo"
  | "arl"
  | "copropiedades"
  | "otros-empresa";

interface QuoteFunnelProps {
  initialType?: LegacyType;
  initialProductId?: ProductId;
  variant?: "default" | "compact";
  onClose?: () => void;
}

interface FormState {
  customerType: CustomerType | null;
  selectedProducts: ProductId[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  vehiclePlate: string;
  companyName: string;
  companyNit: string;
  companyVerificationDigit: string;
  companyEmail: string;
  responsibleName: string;
  responsiblePhone: string;
  message: string;
}

const PERSON_OPTIONS = [
  { id: "seguro-vida", label: "Seguro de Vida", icon: HeartPulse },
  { id: "salud-medicina-prepagada", label: "Póliza de Salud y Medicina Prepagada", icon: Shield },
  { id: "todo-riesgo-autos", label: "Seguro Todo Riesgo para Autos", icon: Car },
  { id: "seguro-hogar", label: "Seguro de Hogar", icon: House },
  { id: "seguro-mascotas", label: "Seguro para Mascotas", icon: PawPrint },
  { id: "seguro-vida-deudor", label: "Seguro Vida Deudor", icon: House },
  { id: "otros-persona", label: "Otro", icon: Package },
] satisfies Array<{ id: ProductId; label: string; icon: ComponentType<{ className?: string }> }>;

const COMPANY_OPTIONS = [
  { id: "pyme", label: "Pyme (Todo Riesgo: Daños Materiales)", icon: Building2 },
  { id: "transporte", label: "Seguro de Transporte", icon: Car },
  { id: "cumplimiento", label: "Cumplimiento", icon: FileCheck },
  { id: "responsabilidad-civil", label: "Responsabilidad Civil", icon: Shield },
  { id: "salud-colectivo", label: "Seguros Colectivos", icon: Users },
  { id: "arl", label: "ARL / Vida Grupo", icon: Shield },
  { id: "copropiedades", label: "Seguro de Copropiedades", icon: Laptop },
  { id: "otros-empresa", label: "Otros", icon: Package },
] satisfies Array<{ id: ProductId; label: string; icon: ComponentType<{ className?: string }> }>;

const PERSON_LABELS: Record<ProductId, string> = {
  "seguro-vida": "Seguro de Vida",
  "salud-medicina-prepagada": "Póliza de Salud y Medicina Prepagada",
  "todo-riesgo-autos": "Seguro Todo Riesgo para Autos",
  "seguro-hogar": "Seguro de Hogar",
  "seguro-mascotas": "Seguro para Mascotas",
  "seguro-vida-deudor": "Seguro Vida Deudor",
  "otros-persona": "Otros",
  cumplimiento: "Cumplimiento",
  transporte: "Seguro de Transporte",
  pyme: "Pyme (Todo Riesgo: Daños Materiales)",
  "responsabilidad-civil": "Responsabilidad Civil",
  "salud-colectivo": "Seguros Colectivos",
  arl: "ARL / Vida Grupo",
  copropiedades: "Seguro de Copropiedades",
  "otros-empresa": "Otros",
};

function getPresetValues(initialType: LegacyType | undefined): Pick<FormState, "customerType" | "selectedProducts"> {
  switch (initialType) {
    case "auto":
      return { customerType: "persona", selectedProducts: ["todo-riesgo-autos"] };
    case "salud":
      return { customerType: "persona", selectedProducts: ["salud-medicina-prepagada"] };
    case "vida":
      return { customerType: "persona", selectedProducts: ["seguro-vida"] };
    case "cumplimiento":
      return { customerType: "empresa", selectedProducts: ["cumplimiento"] };
    case "empresarial":
      return { customerType: "empresa", selectedProducts: ["pyme"] };
    default:
      return { customerType: null, selectedProducts: [] };
  }
}

function getLeadType(customerType: CustomerType, selectedProducts: ProductId[]) {
  if (customerType === "empresa") return "empresarial";
  if (selectedProducts.includes("todo-riesgo-autos")) return "auto";
  if (selectedProducts.includes("salud-medicina-prepagada")) return "salud";
  if (selectedProducts.includes("seguro-vida")) return "vida";
  return "persona";
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

function formatNit(value: string) {
  const digits = value.replace(/[^\d-]/g, "");
  return digits.slice(0, 16);
}

function getProgressLabel(step: number) {
  return `Paso ${step} de 3`;
}

export default function QuoteFunnel({ initialType, initialProductId, variant = "default", onClose }: QuoteFunnelProps) {
  const preset = getPresetValues(initialType);
  const compact = variant === "compact";
  const initialSelectedProducts = initialProductId ? [initialProductId] : preset.selectedProducts;
  const initialCustomerType = initialProductId
    ? COMPANY_OPTIONS.some((option) => option.id === initialProductId)
      ? "empresa"
      : "persona"
    : preset.customerType;
  const [step, setStep] = useState(initialCustomerType ? 2 : 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    customerType: initialCustomerType,
    selectedProducts: initialSelectedProducts,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    vehiclePlate: "",
    companyName: "",
    companyNit: "",
    companyVerificationDigit: "",
    companyEmail: "",
    responsibleName: "",
    responsiblePhone: "",
    message: "",
  });

  const options = form.customerType === "empresa" ? COMPANY_OPTIONS : PERSON_OPTIONS;

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const toggleProduct = (productId: ProductId) => {
    setForm((current) => {
      const exists = current.selectedProducts.includes(productId);
      return {
        ...current,
        selectedProducts: exists
          ? current.selectedProducts.filter((item) => item !== productId)
          : [...current.selectedProducts, productId],
      };
    });
    setErrors((current) => {
      if (!current.selectedProducts) return current;
      const nextErrors = { ...current };
      delete nextErrors.selectedProducts;
      return nextErrors;
    });
  };

  const validateCurrentStep = () => {
    const nextErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.customerType) nextErrors.customerType = "Selecciona el tipo de cliente.";
    }

    if (step === 2) {
      if (!form.selectedProducts.length) nextErrors.selectedProducts = "Selecciona al menos una opción.";
    }

    if (step === 3) {
      if (form.customerType === "persona") {
        if (!form.firstName.trim()) nextErrors.firstName = "El nombre es obligatorio.";
        if (!form.lastName.trim()) nextErrors.lastName = "El apellido es obligatorio.";
        if (form.phone.replace(/\D/g, "").length !== 10) nextErrors.phone = "Ingresa un celular válido de 10 dígitos.";
        if (!form.email.trim()) nextErrors.email = "El correo es obligatorio.";
      }

      if (form.customerType === "empresa") {
        if (!form.companyName.trim()) nextErrors.companyName = "El nombre de la empresa es obligatorio.";
        if (!form.companyNit.trim()) nextErrors.companyNit = "El NIT es obligatorio.";
        if (!form.companyEmail.trim()) nextErrors.companyEmail = "El correo es obligatorio.";
        if (!form.responsibleName.trim()) nextErrors.responsibleName = "El nombre del responsable es obligatorio.";
        if (form.responsiblePhone.replace(/\D/g, "").length !== 10) {
          nextErrors.responsiblePhone = "Ingresa un celular válido de 10 dígitos.";
        }
      }

      if (!acceptedTerms) nextErrors.acceptedTerms = "Debes aceptar el tratamiento de datos.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStep((current) => Math.min(current + 1, 3));
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateCurrentStep() || !form.customerType) return;

    setIsSubmitting(true);

    const leadId = id();
    const createdAt = Date.now();
    const customerTypeLabel = form.customerType === "persona" ? "Persona natural" : "Empresa";
    const selectedProductLabels = form.selectedProducts.map((item) => PERSON_LABELS[item]).join(", ");
    const leadType = getLeadType(form.customerType, form.selectedProducts);
    const leadName =
      form.customerType === "persona"
        ? `${form.firstName.trim()} ${form.lastName.trim()}`.trim()
        : form.responsibleName.trim();
    const leadPhone = form.customerType === "persona" ? form.phone : form.responsiblePhone;
    const leadEmail = form.customerType === "persona" ? form.email : form.companyEmail;
    const cleanMessage = form.message.trim();

    try {
      await db.transact(
        tx.insurance_leads[leadId].update({
          type: leadType,
          name: leadName,
          phone: leadPhone,
          email: leadEmail,
          customerType: form.customerType,
          selectedProducts: selectedProductLabels,
          lastName: form.customerType === "persona" ? form.lastName.trim() : "",
          message: cleanMessage,
          driverBirthDate: form.birthDate,
          vehiclePlate: form.vehiclePlate.trim().toUpperCase(),
          companyName: form.customerType === "empresa" ? form.companyName.trim() : "",
          companyNit: form.customerType === "empresa"
            ? `${form.companyNit.trim()}${form.companyVerificationDigit ? `-${form.companyVerificationDigit.trim()}` : ""}`
            : "",
          responsibleName: form.customerType === "empresa" ? form.responsibleName.trim() : "",
          status: "nuevo",
          createdAt,
        })
      );

      await enviarLeadAlCRM({
        nombre: leadName,
        telefono: leadPhone,
        email: leadEmail,
        notas: [
          `Tipo de cliente: ${customerTypeLabel}`,
          `Intereses: ${selectedProductLabels}`,
          form.customerType === "empresa" ? `Empresa: ${form.companyName.trim()}` : "",
          form.customerType === "empresa"
            ? `NIT: ${form.companyNit.trim()}${form.companyVerificationDigit ? `-${form.companyVerificationDigit.trim()}` : ""}`
            : "",
          form.birthDate ? `Fecha de nacimiento: ${form.birthDate}` : "",
          form.vehiclePlate.trim() ? `Placa: ${form.vehiclePlate.trim().toUpperCase()}` : "",
          cleanMessage ? `Mensaje: ${cleanMessage}` : "",
        ]
          .filter(Boolean)
          .join(" | "),
      });

      fetch("/api/lead-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          createdAt,
          origin: "QuoteFunnel",
          customerType: customerTypeLabel,
          selectedProducts: form.selectedProducts,
          selectedProductLabels,
          leadType,
          leadName,
          leadPhone,
          leadEmail,
          companyName: form.companyName.trim(),
          companyNit: form.companyNit.trim(),
          companyVerificationDigit: form.companyVerificationDigit.trim(),
          birthDate: form.birthDate,
          vehiclePlate: form.vehiclePlate.trim().toUpperCase(),
          message: cleanMessage,
        }),
      }).catch(console.error);

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "No pudimos enviar la solicitud. Intenta nuevamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`border border-white/10 bg-[#1e103c] text-white shadow-2xl ${compact ? "rounded-[1.2rem] p-2 sm:p-3" : "rounded-[2rem] p-5 sm:p-8"}`}>
      {isSuccess ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <Check className="h-8 w-8" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            Solicitud enviada
          </p>
          <h3 className="mt-2 font-serif text-xl font-medium text-white sm:text-2xl">
            ¡Gracias! Un asesor te contactará muy pronto.
          </h3>
          <p className="mt-3 max-w-sm text-[0.8rem] leading-5 text-slate-300 mx-auto">
            Recibimos tu solicitud correctamente. Estamos procesando tu información para darte la mejor asesoría.
          </p>
          <div className="mt-6 flex w-full max-w-xs flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setAcceptedTerms(false);
                setErrors({});
                setForm({
                  customerType: null,
                  selectedProducts: [],
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  birthDate: "",
                  vehiclePlate: "",
                  companyName: "",
                  companyNit: "",
                  companyVerificationDigit: "",
                  companyEmail: "",
                  responsibleName: "",
                  responsiblePhone: "",
                  message: "",
                });
              }}
              className="inline-flex min-h-9 items-center justify-center rounded-xl border border-white/20 px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hacer otra cotización
            </button>
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-9 items-center justify-center rounded-xl bg-purple-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-purple-700"
              >
                Cerrar
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={compact ? "space-y-2.5" : "space-y-8"}>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400">
              Cotiza sin compromiso
            </p>
            <h2 className={`mt-0.5 font-serif leading-[1.1] text-white ${compact ? "text-[1.05rem] sm:text-[1.15rem]" : "text-[2.15rem] sm:text-5xl"}`}>
              Seguros Roesan en 3 pasos
            </h2>
            <p className={`mx-auto mt-0.5 max-w-lg leading-4 text-slate-300 ${compact ? "text-[0.68rem]" : "text-base sm:text-lg"}`}>
              {step === 1
                ? "Selecciona tu perfil de usuario"
                : step === 2
                  ? "Escoge los seguros de tu interés"
                  : "Dinos como contactarte"}
            </p>
          </div>

          <div className="space-y-1">
            <div className={`grid grid-cols-3 gap-1 text-[10px] ${compact ? "max-w-[280px] mx-auto px-2" : "max-w-md mx-auto"}`}>
              {[
                { index: 1, label: "Tipo" },
                { index: 2, label: "Seguros" },
                { index: 3, label: "Contacto" },
              ].map((item) => {
                const isDone = step > item.index;
                const isActive = step === item.index;

                return (
                  <div key={item.label} className="flex flex-col items-center gap-0.5">
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-full border font-bold transition-colors ${compact ? "h-6 w-6 text-[9px]" : "h-9 w-9 text-xs"} ${
                        isDone || isActive
                          ? "border-cyan-400 bg-cyan-400 text-[#1e103c]"
                          : "border-white/20 bg-white/5 text-slate-400"
                      }`}
                    >
                      {isDone ? <Check className={compact ? "h-3 w-3" : "h-4 w-4"} /> : item.index}
                    </div>
                    <span className={`uppercase tracking-tighter ${isDone || isActive ? "text-cyan-400 font-bold" : "text-slate-400"}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${compact ? "min-h-[220px]" : "min-h-[300px]"}`}>
          {step === 1 ? (
            <div className={compact ? "space-y-2" : "space-y-6"}>
              <div className="grid gap-2 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setField("customerType", "persona");
                    setField("selectedProducts", []);
                  }}
                  className={`rounded-[1rem] border text-left transition-all ${compact ? "p-3" : "p-5"} ${
                    form.customerType === "persona"
                      ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className={`mb-2 flex items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-400 ${compact ? "h-7 w-7" : "h-11 w-11"}`}>
                    <UserRound className={compact ? "h-4 w-4" : "h-6 w-6"} />
                  </div>
                  <p className={`${compact ? "text-sm" : "text-xl"} font-bold text-white`}>Persona natural</p>
                  <p className={`mt-0.5 text-slate-400 ${compact ? "text-[0.62rem]" : "text-sm"}`}>Seguros familiares</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setField("customerType", "empresa");
                    setField("selectedProducts", []);
                  }}
                  className={`rounded-[1rem] border text-left transition-all ${compact ? "p-3" : "p-5"} ${
                    form.customerType === "empresa"
                      ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className={`mb-2 flex items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-400 ${compact ? "h-7 w-7" : "h-11 w-11"}`}>
                    <Building2 className={compact ? "h-4 w-4" : "h-6 w-6"} />
                  </div>
                  <p className={`${compact ? "text-sm" : "text-xl"} font-bold text-white`}>Empresa</p>
                  <p className={`mt-0.5 text-slate-400 ${compact ? "text-[0.62rem]" : "text-sm"}`}>Protección negocio</p>
                </button>
              </div>

              {errors.customerType ? (
                <p className="text-[10px] text-rose-400 text-center">{errors.customerType}</p>
              ) : null}
            </div>
          ) : null}

          {step === 2 && form.customerType ? (
            <div className={compact ? "space-y-2" : "space-y-6"}>
              <div className={`grid grid-cols-2 gap-1.5 ${compact ? "md:grid-cols-2 lg:grid-cols-2" : "md:grid-cols-3 xl:grid-cols-4"}`}>
                {options.map((option) => {
                  const selected = form.selectedProducts.includes(option.id);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleProduct(option.id)}
                      className={`rounded-lg border px-2 text-center transition-all ${compact ? "py-2" : "py-4"} ${
                        selected
                          ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className={`mx-auto mb-1 flex items-center justify-center rounded-md bg-cyan-400/20 text-cyan-400 ${compact ? "h-6 w-6" : "h-9 w-9"}`}>
                        <option.icon className={compact ? "h-3.5 w-3.5" : "h-5 w-5"} />
                      </div>
                      <p className={`font-bold leading-3 text-white ${compact ? "text-[9px]" : "text-[13px]"}`}>
                        {option.label}
                      </p>
                    </button>
                  );
                })}
              </div>

              {errors.selectedProducts ? (
                <p className="text-[10px] text-rose-400 text-center">{errors.selectedProducts}</p>
              ) : null}
            </div>
          ) : null}

          {step === 3 && form.customerType === "persona" ? (
            <div className={compact ? "space-y-1.5" : "space-y-4"}>
              <div className="grid gap-1.5 sm:grid-cols-2">
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Nombre *</label>
                  <input
                    value={form.firstName}
                    onChange={(event) => setField("firstName", event.target.value)}
                    placeholder="Tu nombre"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.firstName ? <p className="text-[8px] text-rose-400">{errors.firstName}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Apellido *</label>
                  <input
                    value={form.lastName}
                    onChange={(event) => setField("lastName", event.target.value)}
                    placeholder="Tu apellido"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.lastName ? <p className="text-[8px] text-rose-400">{errors.lastName}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">WhatsApp *</label>
                  <input
                    value={form.phone}
                    onChange={(event) => setField("phone", formatPhone(event.target.value))}
                    placeholder="300 123 4567"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.phone ? <p className="text-[8px] text-rose-400">{errors.phone}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setField("email", event.target.value)}
                    placeholder="tu@email.com"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.email ? <p className="text-[8px] text-rose-400">{errors.email}</p> : null}
                </div>
              </div>

              {form.selectedProducts.includes("todo-riesgo-autos") && (
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Placa</label>
                  <input
                    value={form.vehiclePlate}
                    onChange={(event) => setField("vehiclePlate", event.target.value.toUpperCase().slice(0, 6))}
                    placeholder="ABC123"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs uppercase text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              )}

              <div className="space-y-0.5">
                <textarea
                  value={form.message}
                  onChange={(event) => setField("message", event.target.value)}
                  placeholder="Mensaje adicional..."
                  rows={2}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>
            </div>
          ) : null}

          {step === 3 && form.customerType === "empresa" ? (
            <div className={compact ? "space-y-1.5" : "space-y-4"}>
              <div className="grid gap-1.5 sm:grid-cols-2">
                <div className="space-y-0.5 sm:col-span-2">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Empresa *</label>
                  <input
                    value={form.companyName}
                    onChange={(event) => setField("companyName", event.target.value)}
                    placeholder="Nombre legal"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.companyName ? <p className="text-[8px] text-rose-400">{errors.companyName}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">NIT *</label>
                  <input
                    value={form.companyNit}
                    onChange={(event) => setField("companyNit", formatNit(event.target.value))}
                    placeholder="900123456"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.companyNit ? <p className="text-[8px] text-rose-400">{errors.companyNit}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Email *</label>
                  <input
                    type="email"
                    value={form.companyEmail}
                    onChange={(event) => setField("companyEmail", event.target.value)}
                    placeholder="empresa@email.com"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.companyEmail ? <p className="text-[8px] text-rose-400">{errors.companyEmail}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1">Responable *</label>
                  <input
                    value={form.responsibleName}
                    onChange={(event) => setField("responsibleName", event.target.value)}
                    placeholder="Nombre y cargo"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.responsibleName ? <p className="text-[8px] text-rose-400">{errors.responsibleName}</p> : null}
                </div>
                <div className="space-y-0.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase px-1"> WhatsApp Responsable *</label>
                  <input
                    value={form.responsiblePhone}
                    onChange={(event) => setField("responsiblePhone", formatPhone(event.target.value))}
                    placeholder="300 123 4567"
                    className="h-9 w-full rounded-lg border border-white/20 bg-white/5 px-3 text-xs text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10"
                  />
                  {errors.responsiblePhone ? <p className="text-[8px] text-rose-400">{errors.responsiblePhone}</p> : null}
                </div>
              </div>
            </div>
          ) : null}
          </div>

          {step === 3 ? (
            <div className="space-y-0.5 rounded-lg border border-white/10 bg-white/5 p-1.5">
              <label className="flex cursor-pointer items-start gap-2">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => {
                    setAcceptedTerms(event.target.checked);
                    setErrors((current) => {
                      if (!current.acceptedTerms) return current;
                      const nextErrors = { ...current };
                      delete nextErrors.acceptedTerms;
                      return nextErrors;
                    });
                  }}
                  className="mt-0.5 h-3 w-3 rounded border-white/30 bg-white/10 text-cyan-400 focus:ring-offset-[#1e103c]"
                />
                <span className="text-[9px] leading-3 text-slate-400">
                  Acepto el <a href="/privacidad" target="_blank" className="font-bold text-cyan-400 underline">tratamiento de datos</a> para recibir mi cotización.
                </span>
              </label>
              {errors.acceptedTerms ? <p className="text-[8px] text-rose-400">{errors.acceptedTerms}</p> : null}
              {errors.submit ? <p className="text-[8px] text-rose-400">{errors.submit}</p> : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-1.5 border-t border-white/10 pt-2.5 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex min-h-8 items-center justify-center gap-1 rounded-lg border border-white/20 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ArrowLeft className="h-3 w-3" />
                Atrás
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex min-h-8 items-center justify-center gap-1 rounded-lg bg-cyan-400 px-4 text-xs font-semibold text-[#1e103c] transition-colors hover:bg-cyan-300"
              >
                Siguiente
                <ArrowRight className="h-3 w-3" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-8 items-center justify-center gap-1 rounded-lg bg-cyan-400 px-4 text-xs font-semibold text-[#1e103c] transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Enviar Cotización
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
