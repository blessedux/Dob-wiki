import { notFound } from "next/navigation";
import { Heading } from "@/components/heading";
import { Breadcrumb } from "@/components/breadcrumb";
import { getDocBySlug, renderMDX } from "@/lib/mdx";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { frontMatter } = await getDocBySlug(params.category, params.slug);
    return {
      title: `${frontMatter.title} | DOB Protocol Wiki`,
      description: frontMatter.description,
    };
  } catch (error) {
    return {
      title: "Document Not Found | DOB Protocol Wiki",
      description: "The requested document could not be found.",
    };
  }
}

export default async function DocPage({ params }: PageProps) {
  try {
    const { category, slug } = params;
    const doc = await getDocBySlug(category, slug);
    const content = await renderMDX(doc.content);

    return (
      <div className="space-y-6">
        <Breadcrumb 
          items={[
            { title: "Docs", href: "/docs" },
            { title: category.charAt(0).toUpperCase() + category.slice(1), href: `/docs/${category}` },
            { title: doc.frontMatter.title, href: `/docs/${category}/${slug}` }
          ]} 
        />
        
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
} 