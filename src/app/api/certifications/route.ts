import { NextResponse } from "next/server";
import { certifications } from "@/data/mockData";

export async function GET() {
  return NextResponse.json({
    data: certifications,
    meta: { total: certifications.length },
  });
}
