import type { ContactFormData } from "@/types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export interface FieldErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  const name = data.fullName.trim();
  if (!name) {
    errors.fullName = "Namanya belum diisi.";
  } else if (name.length < 3) {
    errors.fullName = "Nama terlalu pendek—minimal 3 huruf.";
  } else if (name.length > 100) {
    errors.fullName = "Nama kepanjangan (maks. 100 karakter).";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Emailnya belum diisi.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Format emailnya kurang pas, cek lagi ya.";
  }

  const subject = data.subject.trim();
  if (!subject) {
    errors.subject = "Subjeknya kosong.";
  } else if (subject.length < 5) {
    errors.subject = "Subjeknya terlalu singkat.";
  } else if (subject.length > 150) {
    errors.subject = "Subjeknya kepanjangan (maks. 150 karakter).";
  }

  const message = data.message.trim();
  if (!message) {
    errors.message = "Pesannya belum ditulis.";
  } else if (message.length < 20) {
    errors.message = "Ceritanya terlalu pendek—minimal 20 karakter biar jelas.";
  } else if (message.length > 2000) {
    errors.message = "Pesan kepanjangan (maks. 2000 karakter).";
  }

  return errors;
}

export function hasValidationErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
