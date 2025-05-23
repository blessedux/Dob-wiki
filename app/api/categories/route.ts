import { NextRequest, NextResponse } from "next/server";
import { getAllCategories } from "@/lib/mdx";

export async function GET() {
  try {
    const categories = getAllCategories();
    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error getting categories:", error);
    return NextResponse.json(
      { error: "Failed to get categories" },
      { status: 500 }
    );
  }
} 