import type { ContactFormData } from "@/types";
import { hasValidationErrors, validateContactForm } from "@/lib/validation";

export type ContactSubmitResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: Record<string, string> };

/**
 * Mock integration for Web3Forms / EmailJS.
 * Replace endpoint with real API key in production.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmitResult> {
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Makasih—pesannya sudah masuk.",
    };
  }

  const fieldErrors = validateContactForm(data);
  if (hasValidationErrors(fieldErrors)) {
    return {
      success: false,
      message: "Ada yang perlu dibenerin di formnya.",
      fieldErrors: fieldErrors as Record<string, string>,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const shouldFail = data.email.toLowerCase().includes("fail@test");
  if (shouldFail) {
    return {
      success: false,
      message:
        "Gagal kirim. Coba lagi nanti, atau chat lewat WhatsApp aja.",
    };
  }

  return {
    success: true,
    message:
      "Pesan sudah terkirim. Saya biasanya balas lewat email dalam 1–2 hari kerja.",
  };
}
