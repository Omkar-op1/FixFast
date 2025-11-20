import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

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

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Vercel Blob
    const blob = await put(`plants/${Date.now()}-${file.name}`, buffer, {
      access: "public",
    });

    const plant = plantNames[Math.floor(Math.random() * plantNames.length)];

    return NextResponse.json({
      success: true,
      plantName: plant,
      fileUrl: blob.url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
