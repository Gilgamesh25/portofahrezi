import { NextRequest, NextResponse } from "next/server";
import { submitContactForm } from "@/lib/contactService";
import type { ContactFormData } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;
    const result = await submitContactForm(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Ada gangguan di server. Coba lagi sebentar." },
      { status: 500 }
    );
  }
}
