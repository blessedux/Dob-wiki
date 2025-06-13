"use client";
import React from "react";
import { useState } from "react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Plus, ChevronDown } from "lucide-react";
import { docsStructure } from "@/lib/docs-structure";

interface Doc {
  slug: string;
  frontMatter: {
    title: string;
    description: string;
  };
}

export function CategorySection({ category, docs }: { category: string; docs: Doc[] }) {
  const [open, setOpen] = useState(true);
  // Find the structure for this category
  const section = docsStructure.find((s) => s.category === category || (s.category === null && s.items.some(i => i.slug === category)));
  // Map slugs to doc objects for quick lookup
  const docsBySlug = Object.fromEntries(docs.map((doc: Doc) => [doc.slug, doc]));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen((v) => !v)}>
        <div className="flex items-center space-x-2">
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
          <Heading level={2} className="capitalize">{section ? section.label : category}</Heading>
        </div>
        <Button variant="outline" asChild>
          <Link href={`/admin/new?category=${category}`}>
            <Plus className="mr-2 h-4 w-4" />
            New {section ? section.label : category} Doc
          </Link>
        </Button>
      </div>
      {open && (
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-800">
            {section
              ? section.items.map((item) => {
                  const doc = docsBySlug[item.slug];
                  if (!doc) return null;
                  const docHref = section.category ? `/docs/${section.category}/${item.slug}` : `/docs/${item.slug}`;
                  const editHref = section.category ? `/admin/edit/${section.category}/${item.slug}` : `/admin/edit/${item.slug}`;
                  return (
                    <li key={item.slug} className="p-4 flex justify-between items-center hover:bg-gray-900/50">
                      <div>
                        <Link
                          href={docHref}
                          className="text-lg font-medium hover:underline flex items-center"
                          target="_blank"
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">{doc.frontMatter.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Slug: {doc.slug}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={editHref}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>
                    </li>
                  );
                })
              : docs.map((doc) => (
                  <li key={doc.slug} className="p-4 flex justify-between items-center hover:bg-gray-900/50">
                    <div>
                      <Link
                        href={`/docs/${doc.slug}`}
                        className="text-lg font-medium hover:underline flex items-center"
                        target="_blank"
                      >
                        {doc.frontMatter.title}
                      </Link>
                      <p className="text-sm text-gray-400 mt-1">{doc.frontMatter.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Slug: {doc.slug}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/edit/${doc.slug}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
} 