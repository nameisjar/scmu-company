"use client";

import React, { FormEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { company } from "@/data/company";
import { createWhatsAppUrl, type QuoteData } from "@/lib/whatsapp";

const initialData: QuoteData = {
  name: "",
  whatsapp: "",
  item: "",
  quantity: "",
  origin: "",
  destination: "",
  mode: "",
  notes: "",
};

type RequiredField = "name" | "whatsapp" | "item" | "origin" | "destination" | "mode";
type FormErrors = Partial<Record<RequiredField | "config", string>>;

const firstStepFields: RequiredField[] = ["name", "whatsapp", "item"];
const secondStepFields: RequiredField[] = ["origin", "destination", "mode"];

export function QuotationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
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
    if (fields.includes("whatsapp") && data.whatsapp && !/^[+\d][\d\s-]{7,}$/.test(data.whatsapp)) {
      nextErrors.whatsapp = "Masukkan nomor WhatsApp yang valid.";
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

  function continueToRoute() {
    const nextErrors = validate(firstStepFields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors, firstStepFields);
      return;
    }
    setStep(2);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      continueToRoute();
      return;
    }

    const nextErrors = validate(secondStepFields);
    if (!company.whatsapp) {
      nextErrors.config = "Nomor WhatsApp resmi PT. SCMU belum dikonfigurasi oleh pengelola website.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors, secondStepFields);
      return;
    }

    window.open(createWhatsAppUrl(company.whatsapp, data), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate ref={formRef} data-section-scroll-native="true">
      <div className="quote-form__header">
        <div>
          <p className="quote-form__step" aria-live="polite">Langkah {step} dari 2</p>
          <h3>{step === 1 ? "Data pengirim dan barang" : "Rute dan kebutuhan pengiriman"}</h3>
        </div>
        <p>{step === 1 ? "Isi kontak, jenis barang, dan perkiraan jumlahnya." : "Tentukan asal, tujuan, dan moda yang ingin dibahas."}</p>
      </div>

      {step === 1 ? (
        <div className="form-grid">
          <Field label="Nama" required error={errors.name}>
            <input name="name" value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
          </Field>
          <Field label="Nomor WhatsApp" required error={errors.whatsapp}>
            <input name="whatsapp" value={data.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} inputMode="tel" autoComplete="tel" placeholder="Contoh: 0812 3456 7890" />
          </Field>
          <Field label="Jenis barang" required error={errors.item}>
            <input name="item" value={data.item} onChange={(event) => update("item", event.target.value)} placeholder="Contoh: bahan bangunan" />
          </Field>
          <Field label="Jumlah / berat">
            <input name="quantity" value={data.quantity} onChange={(event) => update("quantity", event.target.value)} placeholder="Contoh: 10 koli / 250 kg" />
          </Field>
        </div>
      ) : (
        <div className="form-grid">
          <Field label="Lokasi asal" required error={errors.origin}>
            <input name="origin" value={data.origin} onChange={(event) => update("origin", event.target.value)} />
          </Field>
          <Field label="Lokasi tujuan" required error={errors.destination}>
            <input name="destination" value={data.destination} onChange={(event) => update("destination", event.target.value)} />
          </Field>
          <Field label="Moda transportasi" required error={errors.mode} className="form-field--full">
            <select name="mode" value={data.mode} onChange={(event) => update("mode", event.target.value)}>
              <option value="">Pilih moda transportasi</option>
              <option>Belum tahu — perlu konsultasi</option>
              <option>Pengiriman Darat</option>
              <option>Pengiriman Udara</option>
              <option>Pengiriman Laut</option>
              <option>Pengiriman Sungai</option>
              <option>Pengiriman Kereta</option>
            </select>
          </Field>
          <Field label="Catatan" className="form-field--full">
            <textarea name="notes" value={data.notes} onChange={(event) => update("notes", event.target.value)} rows={3} placeholder="Penanganan khusus, prioritas waktu, atau informasi lain mengenai barang." />
          </Field>
        </div>
      )}

      {errors.config && <p className="form-config-error" role="alert">{errors.config}</p>}
      <div className="form-submit-row">
        <div className="form-submit-row__actions">
          {step === 2 && (
            <button className="button button--outline" type="button" onClick={() => { setErrors({}); setStep(1); }}>
              <ArrowLeft aria-hidden="true" /> Kembali
            </button>
          )}
          <button className="button button--primary" type="submit">
            {step === 1 ? <>Lanjut ke Rute <ArrowRight aria-hidden="true" /></> : <>Lanjutkan ke WhatsApp <ArrowUpRight aria-hidden="true" /></>}
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
