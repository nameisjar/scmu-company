"use client";

import React, { FormEvent, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company } from "@/data/company";
import { createWhatsAppUrl, type QuoteData } from "@/lib/whatsapp";
import { localeFromPathname } from "@/i18n/config";

const initialData: QuoteData = {
  name: "",
  message: "",
};

type RequiredField = keyof QuoteData;
type FormErrors = Partial<Record<RequiredField | "config", string>>;

const requiredFields: RequiredField[] = ["name", "message"];

export function QuotationForm() {
  const locale = localeFromPathname(usePathname());
  const english = locale === "en";
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  function update(field: keyof QuoteData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!(field in current)) return current;
      const next = { ...current };
      delete next[field as RequiredField];
      return next;
    });
  }

  function validate(fields: RequiredField[]) {
    const nextErrors: FormErrors = {};
    fields.forEach((field) => {
      if (!data[field].trim()) nextErrors[field] = english ? "This field is required." : "Bagian ini wajib diisi.";
    });
    return nextErrors;
  }

  function focusFirstError(nextErrors: FormErrors, fields: RequiredField[]) {
    const firstInvalidField = fields.find((field) => nextErrors[field]);
    if (!firstInvalidField) return;
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(requiredFields);
    if (!company.whatsapp) {
      nextErrors.config = english ? "PT. SCMU's official WhatsApp number has not been configured." : "Nomor WhatsApp resmi PT. SCMU belum dikonfigurasi oleh pengelola website.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors, requiredFields);
      return;
    }

    window.open(createWhatsAppUrl(company.whatsapp, data, locale), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form" aria-label={english ? "Request a quotation" : "Minta penawaran"} onSubmit={handleSubmit} noValidate ref={formRef}>
      <div className="form-grid">
        <Field label={english ? "Name" : "Nama"} required error={errors.name}>
          <input name="name" value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
        </Field>
        <Field label={english ? "Shipment Details" : "Detail Pengiriman"} required error={errors.message}>
          <textarea
            name="message"
            value={data.message}
            onChange={(event) => update("message", event.target.value)}
            rows={4}
            placeholder={english ? "Cargo type, quantity, origin, and destination." : "Jenis barang, jumlah, asal, dan tujuan."}
          />
        </Field>
      </div>

      {errors.config && <p className="form-config-error" role="alert">{errors.config}</p>}
      <div className="form-submit-row">
        <div className="form-submit-row__actions">
          <button className="button button--whatsapp" type="submit">
            <WhatsAppIcon />
            <span>{english ? "Continue to WhatsApp" : "Lanjut ke WhatsApp"}</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({ label, required, error, className = "", children }: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactElement<{ required?: boolean; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <label className={`form-field ${className}`}>
      <span>{label}{required && <em> *</em>}</span>
      {React.cloneElement(children, {
        required: Boolean(required),
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? `${id}-error` : undefined,
      })}
      {error && <small id={`${id}-error`}>{error}</small>}
    </label>
  );
}
