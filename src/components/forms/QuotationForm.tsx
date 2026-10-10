"use client";

import React, { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { company } from "@/data/company";
import { createWhatsAppUrl, type QuoteData } from "@/lib/whatsapp";

const initialData: QuoteData = {
  name: "",
  email: "",
  message: "",
};

type RequiredField = keyof QuoteData;
type FormErrors = Partial<Record<RequiredField | "config", string>>;

const requiredFields: RequiredField[] = ["name", "email", "message"];

export function QuotationForm() {
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
      if (!data[field].trim()) nextErrors[field] = "Bagian ini wajib diisi.";
    });
    if (fields.includes("email") && data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Masukkan alamat email yang valid.";
    }
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
      nextErrors.config = "Nomor WhatsApp resmi PT. SCMU belum dikonfigurasi oleh pengelola website.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors, requiredFields);
      return;
    }

    window.open(createWhatsAppUrl(company.whatsapp, data), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate ref={formRef}>
      <div className="quote-form__header">
        <div>
          <h3>Kirim pesan</h3>
        </div>
        <p>Ceritakan kebutuhan pengiriman Anda. Tim PT. SCMU akan melanjutkan pembahasan melalui WhatsApp.</p>
      </div>

      <div className="form-grid">
        <Field label="Nama" required error={errors.name}>
          <input name="name" value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input name="email" type="email" value={data.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" placeholder="Contoh: nama@email.com" />
        </Field>
        <Field label="Pesan" required error={errors.message} className="form-field--full">
          <textarea
            name="message"
            value={data.message}
            onChange={(event) => update("message", event.target.value)}
            rows={6}
            placeholder="Contoh: Saya ingin mengirim bahan bangunan dari Merauke ke Mappi. Mohon informasi layanan yang tersedia."
          />
        </Field>
      </div>

      {errors.config && <p className="form-config-error" role="alert">{errors.config}</p>}
      <div className="form-submit-row">
        <div className="form-submit-row__actions">
          <button className="button button--primary" type="submit">
            Kirim melalui WhatsApp <ArrowUpRight aria-hidden="true" />
          </button>
        </div>
        <p><LockKeyhole aria-hidden="true" /> Data tidak disimpan di website.</p>
      </div>
    </form>
  );
}

function Field({ label, required, error, className = "", children }: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <label className={`form-field ${className}`}>
      <span>{label}{required && <em> *</em>}</span>
      {React.cloneElement(children, {
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? `${id}-error` : undefined,
      })}
      {error && <small id={`${id}-error`}>{error}</small>}
    </label>
  );
}
