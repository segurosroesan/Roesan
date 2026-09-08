"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

/**
 * Turnstile.tsx — Captcha invisible de Cloudflare.
 *
 * El visitante normal no ve nada ni hace nada: Cloudflare resuelve un reto en
 * segundo plano y entrega un token. Ese token viaja con el formulario y el
 * servidor lo valida en `lib/antiSpam.ts`. Un bot no puede fabricarlo.
 *
 * Si `NEXT_PUBLIC_TURNSTILE_SITE_KEY` no está configurada, el componente no
 * pinta nada y avisa con token vacío. El servidor, sin su clave secreta,
 * tampoco exige captcha: el formulario sigue funcionando igual que antes. Así
 * este código se puede desplegar antes de tener las claves sin perder leads.
 */

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render: (
    contenedor: HTMLElement,
    opciones: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
      appearance?: "always" | "execute" | "interaction-only";
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

/** Carga el script una sola vez, aunque haya dos formularios en la misma página. */
function cargarScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();

  const existente = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existente) {
    return new Promise((resolve) => {
      existente.addEventListener("load", () => resolve(), { once: true });
      existente.addEventListener("error", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    // Si Cloudflare no carga (bloqueador, red caída) seguimos adelante sin
    // captcha: no vamos a dejar a un cliente real sin poder pedir su seguro.
    script.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(script);
  });
}

export interface TurnstileProps {
  /** Recibe el token cuando Cloudflare lo emite, o "" si caduca o falla. */
  onToken: (token: string) => void;
  className?: string;
}

export function Turnstile({ onToken, className }: TurnstileProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const contenedorRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  // El callback vive en una ref para que renderizar el widget no dependa de la
  // identidad de la función: si no, cada render del formulario lo recrearía.
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    if (!siteKey) return;

    let cancelado = false;

    cargarScript().then(() => {
      if (cancelado || !contenedorRef.current || !window.turnstile) return;
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(contenedorRef.current, {
        sitekey: siteKey,
        callback: (token) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
        theme: "auto",
      });
    });

    return () => {
      cancelado = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  if (!siteKey) return null;

  return <div ref={contenedorRef} className={className} />;
}

/**
 * Estado listo para conectar a un formulario: el token, el campo trampa y el
 * momento en que se abrió el formulario.
 *
 * Devuelve `camposAntiSpam()` para mandar tal cual en el envío al CRM, de modo
 * que cada formulario solo tenga que añadir esa línea.
 */
export function useAntiSpam() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const abiertoEnRef = useRef<number>(Date.now());
  const honeypotId = useId();

  const camposAntiSpam = useCallback(
    () => ({
      captchaToken,
      empresaWeb: honeypot,
      formularioAbiertoEn: abiertoEnRef.current,
    }),
    [captchaToken, honeypot],
  );

  return {
    captchaToken,
    setCaptchaToken,
    honeypot,
    setHoneypot,
    honeypotId,
    camposAntiSpam,
  };
}

/**
 * Campo trampa. Es invisible y está fuera del recorrido del teclado, así que
 * una persona no puede llenarlo ni por accidente; un bot que rellena todo lo
 * que encuentra en el DOM sí lo hace, y con eso queda identificado.
 *
 * Se oculta con posicionamiento fuera de pantalla y no con `display:none`
 * porque los bots más cuidadosos ignoran los campos ocultos de esa forma.
 */
export function CampoTrampa({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (valor: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor={id}>Sitio web de la empresa (no llenar)</label>
      <input
        id={id}
        name="empresa_web"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
