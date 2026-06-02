import { NextResponse } from "next/server";
import { projects } from "@/data/mockData";

export async function GET() {
  return NextResponse.json({
    data: projects,
    meta: { total: projects.length },
  });
}
