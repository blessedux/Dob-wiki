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
  const [seoTitle, setSeoTitle] = useState<string>("");
  const [seoDescription, setSeoDescription] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [ogImage, setOgImage] = useState<string>("");
  const [canonicalUrl, setCanonicalUrl] = useState<string>("");
  const [showSeoPreview, setShowSeoPreview] = useState<boolean>(false);

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

  // Auto-generate SEO title and description from main title and description
  useEffect(() => {
    if (title && !seoTitle) {
      setSeoTitle(`${title} | DOB Protocol Wiki`);
    }
    if (description && !seoDescription) {
      setSeoDescription(description);
    }
  }, [title, description, seoTitle, seoDescription]);

  const handleSave = async () => {
    if (!title || !description || !category || !slug) {
      setError("Please fill in all required fields");
      return;
    }

    const defaultContent = `---
title: ${title}
description: ${description}
seo:
  title: ${seoTitle}
  description: ${seoDescription}
  keywords: ${keywords}
  ogImage: ${ogImage}
  canonicalUrl: ${canonicalUrl}
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

        <div className="border-t border-gray-800 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">SEO Settings</h3>
            <button
              onClick={() => setShowSeoPreview(!showSeoPreview)}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              {showSeoPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-400 mb-1">
                SEO Title
              </label>
              <Input
                id="seoTitle"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder="SEO Title (defaults to: [Title] | DOB Protocol Wiki)"
                className="w-full bg-black border-gray-800 focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="seoDescription" className="block text-sm font-medium text-gray-400 mb-1">
                Meta Description
              </label>
              <Input
                id="seoDescription"
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="Meta description for search engines"
                className="w-full bg-black border-gray-800 focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-400 mb-1">
                Keywords
              </label>
              <Input
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Comma-separated keywords"
                className="w-full bg-black border-gray-800 focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="ogImage" className="block text-sm font-medium text-gray-400 mb-1">
                Open Graph Image URL
              </label>
              <Input
                id="ogImage"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                placeholder="URL for social media preview image"
                className="w-full bg-black border-gray-800 focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-400 mb-1">
                Canonical URL
              </label>
              <Input
                id="canonicalUrl"
                value={canonicalUrl}
                onChange={(e) => setCanonicalUrl(e.target.value)}
                placeholder="Canonical URL (if different from page URL)"
                className="w-full bg-black border-gray-800 focus:border-blue-600"
              />
            </div>
          </div>

          {showSeoPreview && (
            <div className="mt-6 p-4 bg-gray-900/50 border border-gray-800 rounded-md">
              <h4 className="text-sm font-medium mb-2">Search Engine Preview</h4>
              <div className="space-y-2">
                <div className="text-blue-400 text-sm truncate">
                  {canonicalUrl || `https://dobprotocol.com/docs/${category}/${slug}`}
                </div>
                <div className="text-lg text-white font-medium">
                  {seoTitle || `${title} | DOB Protocol Wiki`}
                </div>
                <div className="text-sm text-gray-400">
                  {seoDescription || description}
                </div>
              </div>
            </div>
          )}
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