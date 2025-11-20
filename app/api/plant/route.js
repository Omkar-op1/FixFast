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
    const file = formData.get("images");

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const blob = await put(`plants/${Date.now()}-${file.name}`, buffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const random = Math.floor(Math.random() * plantNames.length);
    const plant = plantNames[random];

    // 🔥 Plant.id style response
    return NextResponse.json({
      id: Date.now().toString(),
      result: {
        is_plant: {
          binary: true,
          probability: 0.95,
        },
        classification: {
          suggestions: [
            {
              id: random + 1,
              name: plant,
              probability: 0.75,
              details: {
                common_names: [plant],
                url: `https://en.wikipedia.org/wiki/${plant.replace(/ /g, "_")}`,
              },
            },
          ],
        },
      },
      fileUrl: blob.url,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
