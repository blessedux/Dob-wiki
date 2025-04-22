"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function EditDocPage({ params }: PageProps) {
  const router = useRouter();
  const { category, slug } = params;
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDoc() {
      try {
        const response = await fetch(`/api/docs/${category}/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch document");
        }
        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        setError("Error loading document. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDoc();
  }, [category, slug]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(`/api/docs/${category}/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to save document");
      }

      router.push("/admin");
    } catch (err) {
      setError("Error saving document. Please try again.");
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
        <Heading level={1}>Edit Document</Heading>
        <Button onClick={handleSave} disabled={isSaving}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400">
          Category: <span className="font-medium text-white">{category}</span>
        </p>
        <p className="text-sm text-gray-400">
          Slug: <span className="font-medium text-white">{slug}</span>
        </p>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-800 text-red-200 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="animate-pulse bg-gray-800 h-96 rounded-md"></div>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[70vh] bg-black border border-gray-800 rounded-md p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          spellCheck={false}
        />
      )}
    </div>
  );
} 