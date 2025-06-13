/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Breadcrumb } from "@/components/breadcrumb";
import { getDocsByCategory, getDocBySlug, renderMDX, getAllCategories } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    // Try to get the index page for this category
    const doc = await getDocBySlug(params.category, 'index');
    return {
      title: `${doc.frontMatter.title} | DOB Protocol Wiki`,
      description: doc.frontMatter.description,
    };
  } catch (error) {
    // Fallback if index page doesn't exist
    return {
      title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} | DOB Protocol Wiki`,
      description: `Documentation for ${params.category} in the DOB Protocol ecosystem.`,
    };
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }: any) {
  try {
    const { category } = params;
    const docs = await getDocsByCategory(category);
    
    // If no docs found, return 404
    if (docs.length === 0) {
      return notFound();
    }
    
    // Check if this category has an index.md file
    let indexContent = null;
    let categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    let indexDoc = null;
    
    try {
      indexDoc = await getDocBySlug(category, 'index');
      if (indexDoc) {
        indexContent = await renderMDX(indexDoc.content);
        categoryTitle = indexDoc.frontMatter.title;
      }
    } catch (error) {
      // No index.md file, just show list of docs
    }
    
    // Filter out the index file from the docs listing
    const nonIndexDocs = docs.filter(doc => doc.slug !== 'index');
    
    return (
      <div className="space-y-6">
        <Breadcrumb 
          items={[
            { title: "Docs", href: "/docs" },
            { title: categoryTitle, href: `/docs/${category}` }
          ]} 
        />
        
        {indexContent ? (
          <div className="prose prose-invert max-w-none mb-8">
            {indexContent}
          </div>
        ) : (
          <Heading level={1}>{categoryTitle}</Heading>
        )}
        
        {nonIndexDocs.length > 0 && (
          <div className="mt-8">
            <Heading level={2}>Documentation</Heading>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {nonIndexDocs.map((doc) => (
                <Link 
                  key={doc.slug} 
                  href={`/docs/${category}/${doc.slug}`}
                  className="group rounded-lg border border-gray-800 bg-black p-6 hover:border-gray-700 hover:bg-gray-900/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{doc.frontMatter.title}</h3>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-gray-400">{doc.frontMatter.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error rendering category page:', error);
    return notFound();
  }
} 