"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Save, File } from "lucide-react";
import Link from "next/link";

// Loading fallback component
function LoadingFallback() {
  return <div className="container py-8 max-w-screen-lg mx-auto">Loading...</div>;
}

// Main content component that uses searchParams
function NewDocContent() {
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

      <div className="space-y-6 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label htmlFor="slug" className="block text-sm font-medium text-gray-400 mb-1">
              Slug *
            </label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="document-slug"
              className="w-full bg-black border-gray-800 focus:border-blue-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-400 mb-1">
            Content
          </label>
          <div className="relative">
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="# Markdown content
              
Add your content here... If left empty, a basic template will be created."
              className="w-full h-[50vh] bg-black border border-gray-800 rounded-md p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              spellCheck={false}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Leave blank to use default template based on title and description.
          </p>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-md p-4">
        <div className="flex items-center mb-2">
          <File className="mr-2 h-4 w-4 text-gray-400" />
          <h3 className="text-sm font-medium">Document Preview</h3>
        </div>
        <div className="text-xs text-gray-400">
          <p>
            <span className="text-gray-500">Title:</span> {title || "Untitled"}
          </p>
          <p>
            <span className="text-gray-500">Description:</span> {description || "No description"}
          </p>
          <p>
            <span className="text-gray-500">Path:</span> /docs/{category || "[category]"}/{slug || "[slug]"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NewDocPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <NewDocContent />
    </Suspense>
  );
} 