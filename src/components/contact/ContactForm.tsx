"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/lib/contactService";
import type { ContactFormData } from "@/types";
import {
  validateContactForm,
  hasValidationErrors,
  type FieldErrors,
} from "@/lib/validation";

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FieldErrors];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const clientErrors = validateContactForm(form);
    if (hasValidationErrors(clientErrors)) {
      setErrors(clientErrors);
      return;
    }

    setLoading(true);
    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus({ type: "success", message: result.message });
        setForm(initialForm);
        setErrors({});
      } else {
        setStatus({ type: "error", message: result.message });
        if (result.fieldErrors) {
          setErrors(result.fieldErrors as FieldErrors);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot ?? ""}
          onChange={(e) => updateField("honeypot", e.target.value)}
        />
      </div>

      <FormField
        id="fullName"
        label="Nama Lengkap"
        value={form.fullName}
        error={errors.fullName}
        onChange={(v) => updateField("fullName", v)}
        required
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        value={form.email}
        error={errors.email}
        onChange={(v) => updateField("email", v)}
        required
      />
      <FormField
        id="subject"
        label="Subjek"
        value={form.subject}
        error={errors.subject}
        onChange={(v) => updateField("subject", v)}
        required
      />
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.message ? "border-red-400" : "border-primary/15"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className={`rounded-xl px-4 py-3 text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Lagi dikirim...
          </>
        ) : (
          "Kirim pesan"
        )}
      </button>
    </form>
  );
}

function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-primary mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
          error ? "border-red-400" : "border-primary/15"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
