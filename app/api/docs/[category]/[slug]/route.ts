/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getDocBySlug, saveDoc, getAllCategories } from "@/lib/mdx";

export const dynamic = 'force-static';
export const revalidate = false;

// Generate static params for all possible category/slug combinations
export async function generateStaticParams() {
  const categories = getAllCategories();
  const params = [];

  for (const category of categories) {
    // For static export, we'll generate params for a few common slugs
    const commonSlugs = ['introduction', 'getting-started', 'overview'];
    for (const slug of commonSlugs) {
      params.push({
        category,
        slug,
      });
    }
  }

  return params;
}

// GET a specific document
export async function GET(
  request: NextRequest,
  { params }: any
) {
  try {
    const { category, slug } = params;
    const doc = await getDocBySlug(category, slug);

    return NextResponse.json({
      content: doc.content,
      frontMatter: doc.frontMatter,
      slug: doc.slug,
    });
  } catch (error) {
    console.error("Error getting document:", error);
    return NextResponse.json(
      { error: "Document not found" },
      { status: 404 }
    );
  }
}

// PUT to update a document
export async function PUT(
  request: NextRequest,
  { params }: any
) {
  try {
    const { category, slug } = params;
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const success = await saveDoc(category, slug, content);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to save document" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { error: "Failed to update document" },
      { status: 500 }
    );
  }
}

// POST to create a new document
export async function POST(
  request: NextRequest,
  { params }: any
) {
  try {
    const { category, slug } = params;
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const success = await saveDoc(category, slug, content);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to create document" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating document:", error);
    return NextResponse.json(
      { error: "Failed to create document" },
      { status: 500 }
    );
  }
} 