import { NextRequest, NextResponse } from "next/server";

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

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    // Random dummy plant name
    const plant = plantNames[Math.floor(Math.random() * plantNames.length)];

    return NextResponse.json({
      success: true,
      plantName: plant,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
