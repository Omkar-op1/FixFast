import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

const plantNames = [
  "Aloe Vera",
  "Money Plant",
  "Neem",
  "Tulsi",
  "Snake Plant",
  "Rose",
  "Jasmine",
  "Cactus",
];

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const blob = await put(`plants/${Date.now()}-${file.name}`, buffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const plant = plantNames[Math.floor(Math.random() * plantNames.length)];

    return NextResponse.json({
      success: true,
      plantName: plant,
      fileUrl: blob.url,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json({ error: error.message || "Upload failed" });
  }
}
