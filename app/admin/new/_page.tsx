"use client";
export const dynamic = 'force-dynamic';
import { Suspense } from "react";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NewDocPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "";
  
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>(defaultCategory);
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Auto-generate slug from title
    if (title) {
      setSlug(title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
    }
  }, [title]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data.categories);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }

    fetchCategories();
  }, []);

  const handleSave = async () => {
    if (!title || !description || !category || !slug) {
      setError("Please fill in all required fields");
      return;
    }

    const defaultContent = `---
title: ${title}
description: ${description}
---

# ${title}

Add your content here...
`;

    const finalContent = content || defaultContent;

    setIsSaving(true);
    try {
      const response = await fetch(`/api/docs/${category}/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: finalContent }),
      });

      if (!response.ok) {
        throw new Error("Failed to create document");
      }

      router.push("/admin");
    } catch (err) {
      setError("Error creating document. Please try again.");
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Suspense>
      <div className="container py-8 max-w-screen-lg mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" asChild>
            <Link href="/admin">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Admin
            </Link>
          </Button>
        </div>

        <div className="flex justify-between items-center mb-8">
          <Heading level={1}>New Document</Heading>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Creating..." : "Create Document"}
          </Button>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-800 text-red-200 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
              Title *
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Document Title"
              className="w-full bg-black border-gray-800 focus:border-blue-600"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
              Description *
            </label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the document"
              className="w-full bg-black border-gray-800 focus:border-blue-600"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">
              Category *
            </label>
            <div className="relative">
              {categories.length > 0 ? (
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-md h-10 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              ) : (
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category (e.g., dob, dobi)"
                  className="w-full bg-black border-gray-800 focus:border-blue-600"
                />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-400 mb-1">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Document content in Markdown format"
              className="w-full h-64 bg-black border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
} 