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
    <div className={`border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-[0_18px_80px_rgba(15,23,42,0.4)] ${compact ? "rounded-[1.6rem] p-4 sm:p-5" : "rounded-[2rem] p-5 sm:p-8"}`}>
      {isSuccess ? (
        <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Check className="h-10 w-10" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Solicitud enviada
          </p>
          <h3 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">
            Gracias. Un asesor te contactará muy pronto.
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Recibimos tu solicitud correctamente y la enviaremos al equipo comercial para darte una asesoría clara, rápida y personalizada.
          </p>
          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
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
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/15 px-6 text-base font-semibold text-white transition-colors hover:bg-white/5"
            >
              Hacer otra cotización
            </button>
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#e2e7c8] px-6 text-base font-semibold text-slate-900 transition-colors hover:bg-[#edf2d7]"
              >
                Cerrar
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={compact ? "space-y-6" : "space-y-8"}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#dfe6bf]">
              Cotiza sin compromiso
            </p>
            <h2 className={`mt-3 font-serif leading-[1.02] text-white ${compact ? "text-[1.95rem] sm:text-[2.7rem]" : "text-[2.35rem] sm:text-6xl"}`}>
              Listo para asegurar tu futuro en 3 sencillos pasos
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl leading-7 text-slate-300 ${compact ? "text-[0.98rem] sm:text-lg" : "text-base sm:text-xl"}`}>
              {step === 1
                ? "Cuéntanos qué tipo de cliente eres para ayudarte mejor"
                : step === 2
                  ? form.customerType === "empresa"
                    ? "Selecciona uno o varios seguros y avanzamos a tus datos corporativos."
                    : "Selecciona uno o varios seguros y avanzamos a tus datos de contacto."
                  : "Completa tu información para que un asesor te contacte con opciones reales."}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{getProgressLabel(step)}</span>
              <span>{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className={`grid grid-cols-3 gap-2 text-sm ${compact ? "sm:gap-3" : "sm:gap-5"}`}>
              {[
                { index: 1, label: "Tipo" },
                { index: 2, label: "Seguros" },
                { index: 3, label: "Contacto" },
              ].map((item) => {
                const isDone = step > item.index;
                const isActive = step === item.index;

                return (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors ${compact ? "h-10 w-10" : "h-12 w-12"} ${
                        isDone || isActive
                          ? "border-[#e2e7c8] bg-[#e2e7c8] text-slate-900"
                          : "border-white/10 bg-white/6 text-slate-400"
                      }`}
                    >
                      {isDone ? <Check className="h-5 w-5" /> : item.index}
                    </div>
                    <div className="hidden min-w-0 flex-1 items-center gap-3 sm:flex">
                      <span className={`${isDone || isActive ? "text-[#edf2d7]" : "text-slate-500"}`}>
                        {item.label}
                      </span>
                      {item.index < 3 ? <div className="h-px flex-1 bg-white/10" /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {step === 1 ? (
            <div className={compact ? "space-y-4" : "space-y-6"}>
              <div className="text-center">
                <h3 className={`font-serif text-white ${compact ? "text-[1.8rem] sm:text-[2.3rem]" : "text-3xl sm:text-4xl"}`}>
                  Cuéntanos qué tipo de cliente eres para ayudarte mejor
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setField("customerType", "persona");
                    setField("selectedProducts", []);
                  }}
                  className={`rounded-[1.6rem] border text-left transition-all ${compact ? "p-5" : "p-6"} ${
                    form.customerType === "persona"
                      ? "border-[#e2e7c8] bg-white/10 shadow-[0_0_0_1px_rgba(226,231,200,0.45)]"
                      : "border-white/12 bg-white/[0.04] hover:bg-white/[0.07]"
                  }`}
                >
                  <div className={`mb-5 flex items-center justify-center rounded-2xl bg-white/8 text-cyan-300 ${compact ? "h-12 w-12" : "h-14 w-14"}`}>
                    <UserRound className="h-7 w-7" />
                  </div>
                  <p className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-white`}>Persona natural</p>
                  <p className={`mt-2 text-slate-300 ${compact ? "text-sm" : "text-base"}`}>Seguros para ti y tu familia</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setField("customerType", "empresa");
                    setField("selectedProducts", []);
                  }}
                  className={`rounded-[1.6rem] border text-left transition-all ${compact ? "p-5" : "p-6"} ${
                    form.customerType === "empresa"
                      ? "border-[#e2e7c8] bg-white/10 shadow-[0_0_0_1px_rgba(226,231,200,0.45)]"
                      : "border-white/12 bg-white/[0.04] hover:bg-white/[0.07]"
                  }`}
                >
                  <div className={`mb-5 flex items-center justify-center rounded-2xl bg-white/8 text-cyan-300 ${compact ? "h-12 w-12" : "h-14 w-14"}`}>
                    <Building2 className="h-7 w-7" />
                  </div>
                  <p className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-white`}>Empresa</p>
                  <p className={`mt-2 text-slate-300 ${compact ? "text-sm" : "text-base"}`}>Protección para tu negocio</p>
                </button>
              </div>

              {errors.customerType ? (
                <p className="text-sm text-rose-300">{errors.customerType}</p>
              ) : null}
            </div>
          ) : null}

          {step === 2 && form.customerType ? (
            <div className={compact ? "space-y-4" : "space-y-6"}>
              <div className="text-center">
                <h3 className={`font-serif text-white ${compact ? "text-[1.8rem] sm:text-[2.3rem]" : "text-3xl sm:text-4xl"}`}>
                  {form.customerType === "empresa"
                    ? "¿Qué seguro necesita tu empresa?"
                    : "¿Qué tipo de seguro te interesa?"}
                </h3>
              </div>

              <div className={`grid grid-cols-2 gap-3 ${compact ? "md:grid-cols-2 xl:grid-cols-2" : "md:grid-cols-3 xl:grid-cols-4"}`}>
                {options.map((option) => {
                  const selected = form.selectedProducts.includes(option.id);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleProduct(option.id)}
                      className={`rounded-[1.45rem] border px-4 text-center transition-all ${compact ? "py-5" : "py-6"} ${
                        selected
                          ? "border-[#e2e7c8] bg-white/10 shadow-[0_0_0_1px_rgba(226,231,200,0.4)]"
                          : "border-white/12 bg-white/[0.04] hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className={`mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white/8 text-cyan-300 ${compact ? "h-10 w-10" : "h-12 w-12"}`}>
                        <option.icon className="h-6 w-6" />
                      </div>
                      <p className={`font-semibold leading-6 text-white ${compact ? "text-sm" : "text-sm sm:text-base"}`}>
                        {option.label}
                      </p>
                    </button>
                  );
                })}
              </div>

              {errors.selectedProducts ? (
                <p className="text-sm text-rose-300">{errors.selectedProducts}</p>
              ) : null}
            </div>
          ) : null}

          {step === 3 && form.customerType === "persona" ? (
            <div className={compact ? "space-y-4" : "space-y-5"}>
              <div className="text-center">
                <h3 className={`font-serif text-white ${compact ? "text-[1.8rem] sm:text-[2.3rem]" : "text-3xl sm:text-4xl"}`}>
                  Tus datos de contacto
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Nombre *</label>
                  <input
                    value={form.firstName}
                    onChange={(event) => setField("firstName", event.target.value)}
                    placeholder="Tu nombre"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.firstName ? <p className="text-sm text-rose-300">{errors.firstName}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Apellido *</label>
                  <input
                    value={form.lastName}
                    onChange={(event) => setField("lastName", event.target.value)}
                    placeholder="Tu apellido"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.lastName ? <p className="text-sm text-rose-300">{errors.lastName}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Celular / WhatsApp *</label>
                  <input
                    value={form.phone}
                    onChange={(event) => setField("phone", formatPhone(event.target.value))}
                    placeholder="+57 300 123 4567"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.phone ? <p className="text-sm text-rose-300">{errors.phone}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Correo electrónico *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setField("email", event.target.value)}
                    placeholder="tu@email.com"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.email ? <p className="text-sm text-rose-300">{errors.email}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Fecha de nacimiento</label>
                  <input
                    type="date"
                    value={form.birthDate}
                    onChange={(event) => setField("birthDate", event.target.value)}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors focus:border-cyan-300"
                  />
                </div>
                {form.selectedProducts.includes("todo-riesgo-autos") ? (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Placa del vehículo</label>
                    <input
                      value={form.vehiclePlate}
                      onChange={(event) => setField("vehiclePlate", event.target.value.toUpperCase().slice(0, 6))}
                      placeholder="ABC123"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base uppercase text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                    />
                  </div>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Mensaje adicional</label>
                <textarea
                  value={form.message}
                  onChange={(event) => setField("message", event.target.value)}
                  placeholder="Cuéntanos más sobre lo que necesitas"
                  rows={4}
                  className="w-full rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                />
              </div>
            </div>
          ) : null}

          {step === 3 && form.customerType === "empresa" ? (
            <div className={compact ? "space-y-4" : "space-y-5"}>
              <div className="text-center">
                <h3 className={`font-serif text-white ${compact ? "text-[1.8rem] sm:text-[2.3rem]" : "text-3xl sm:text-4xl"}`}>
                  Datos de tu empresa
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-slate-200">Nombre de la empresa *</label>
                  <input
                    value={form.companyName}
                    onChange={(event) => setField("companyName", event.target.value)}
                    placeholder="Nombre legal de la empresa"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.companyName ? <p className="text-sm text-rose-300">{errors.companyName}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">NIT de la empresa *</label>
                  <input
                    value={form.companyNit}
                    onChange={(event) => setField("companyNit", formatNit(event.target.value))}
                    placeholder="900123456"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.companyNit ? <p className="text-sm text-rose-300">{errors.companyNit}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Número de verificación</label>
                  <input
                    value={form.companyVerificationDigit}
                    onChange={(event) => setField("companyVerificationDigit", event.target.value.replace(/\D/g, "").slice(0, 1))}
                    placeholder="7"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Correo electrónico *</label>
                  <input
                    type="email"
                    value={form.companyEmail}
                    onChange={(event) => setField("companyEmail", event.target.value)}
                    placeholder="empresa@email.com"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.companyEmail ? <p className="text-sm text-rose-300">{errors.companyEmail}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Nombre de la persona responsable *</label>
                  <input
                    value={form.responsibleName}
                    onChange={(event) => setField("responsibleName", event.target.value)}
                    placeholder="Nombre y apellido"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.responsibleName ? <p className="text-sm text-rose-300">{errors.responsibleName}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Celular / WhatsApp del responsable *</label>
                  <input
                    value={form.responsiblePhone}
                    onChange={(event) => setField("responsiblePhone", formatPhone(event.target.value))}
                    placeholder="+57 300 123 4567"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                  />
                  {errors.responsiblePhone ? <p className="text-sm text-rose-300">{errors.responsiblePhone}</p> : null}
                </div>
                {form.selectedProducts.includes("todo-riesgo-autos") ? (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-200">Placa del vehículo</label>
                    <input
                      value={form.vehiclePlate}
                      onChange={(event) => setField("vehiclePlate", event.target.value.toUpperCase().slice(0, 6))}
                      placeholder="ABC123"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base uppercase text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                    />
                  </div>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Mensaje adicional</label>
                <textarea
                  value={form.message}
                  onChange={(event) => setField("message", event.target.value)}
                  placeholder="Cuéntanos más sobre lo que necesita tu empresa"
                  rows={4}
                  className="w-full rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
                />
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-3 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
              <label className="flex cursor-pointer items-start gap-3">
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
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-cyan-300"
                />
                <span className="text-sm leading-6 text-slate-300">
                  Acepto el{" "}
                  <a href="/privacidad" target="_blank" className="font-medium text-cyan-300 underline underline-offset-2">
                    tratamiento de mis datos personales
                  </a>{" "}
                  para recibir asesoría y cotización.
                </span>
              </label>
              {errors.acceptedTerms ? <p className="text-sm text-rose-300">{errors.acceptedTerms}</p> : null}
              {errors.submit ? <p className="text-sm text-rose-300">{errors.submit}</p> : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/14 px-5 text-base font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#e2e7c8] px-6 text-base font-semibold text-slate-900 transition-colors hover:bg-[#edf2d7]"
              >
                {step === 1 ? "Continuar" : "Continuar"}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#e2e7c8] px-6 text-base font-semibold text-slate-900 transition-colors hover:bg-[#edf2d7] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar cotización
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
