import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllDocs, getAllCategories } from "@/lib/mdx";
import { CategorySection } from "@/components/admin-category-section";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Admin | DOB Protocol Wiki",
};

export default async function AdminPage() {
  const docs = await getAllDocs();
  const categories = getAllCategories();

  // Group docs by category
  const docsByCategory: Record<string, typeof docs> = {};
  for (const doc of docs) {
    const categoryFromPath = doc.filePath.split('/docs/')[1].split('/')[0];
    if (!docsByCategory[categoryFromPath]) {
      docsByCategory[categoryFromPath] = [];
    }
    docsByCategory[categoryFromPath].push(doc);
  }

  // Sort docs in each category alphabetically by title
  for (const category in docsByCategory) {
    docsByCategory[category].sort((a, b) => a.frontMatter.title.localeCompare(b.frontMatter.title));
  }

  return (
    <div className="container py-8 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Heading level={1}>Documentation Admin</Heading>
        <Button asChild>
          <Link href="/admin/new">
            <Plus className="mr-2 h-4 w-4" />
            New Document
          </Link>
        </Button>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            docs={docsByCategory[category] || []}
          />
        ))}
      </div>
    </div>
  );
} 