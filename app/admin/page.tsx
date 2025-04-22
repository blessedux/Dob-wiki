import Link from "next/link";
import { Heading } from "@/components/heading";
import { getAllDocs, getAllCategories } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Edit, File, Plus } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | DOB Protocol Wiki",
  description: "Manage and edit documentation for DOB Protocol Wiki",
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
        {Object.entries(docsByCategory).map(([category, categoryDocs]) => (
          <div key={category} className="space-y-4">
            <div className="flex justify-between items-center">
              <Heading level={2} className="capitalize">{category}</Heading>
              <Button variant="outline" asChild>
                <Link href={`/admin/new?category=${category}`}>
                  <Plus className="mr-2 h-4 w-4" />
                  New {category} Doc
                </Link>
              </Button>
            </div>
            
            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-800">
                {categoryDocs.map((doc) => (
                  <li key={doc.slug} className="p-4 flex justify-between items-center hover:bg-gray-900/50">
                    <div>
                      <Link 
                        href={`/docs/${category}/${doc.slug}`}
                        className="text-lg font-medium hover:underline flex items-center"
                        target="_blank"
                      >
                        <File className="mr-2 h-4 w-4" />
                        {doc.frontMatter.title}
                      </Link>
                      <p className="text-sm text-gray-400 mt-1">{doc.frontMatter.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Slug: {doc.slug}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/edit/${category}/${doc.slug}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {Object.keys(docsByCategory).length === 0 && (
        <div className="p-8 text-center bg-black border border-gray-800 rounded-lg">
          <p className="text-gray-400 mb-4">No documentation found. Create your first document to get started.</p>
          <Button asChild>
            <Link href="/admin/new">
              <Plus className="mr-2 h-4 w-4" />
              New Document
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
} 