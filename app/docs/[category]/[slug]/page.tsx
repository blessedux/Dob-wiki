/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { Heading } from "@/components/heading";
import { Breadcrumb } from "@/components/breadcrumb";
import { getDocBySlug, renderMDX, getAllDocs } from "@/lib/mdx";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    category: doc.filePath.split('/docs/')[1].split('/')[0],
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const { frontMatter } = await getDocBySlug(params.category, params.slug);
    return {
      title: frontMatter.seo?.title || `${frontMatter.title} | DOB Protocol Wiki`,
      description: frontMatter.seo?.description || frontMatter.description,
      keywords: frontMatter.seo?.keywords,
      openGraph: {
        title: frontMatter.seo?.title || frontMatter.title,
        description: frontMatter.seo?.description || frontMatter.description,
        images: frontMatter.seo?.ogImage ? [frontMatter.seo.ogImage] : undefined,
      },
      alternates: {
        canonical: frontMatter.seo?.canonicalUrl || `https://dobprotocol.com/docs/${params.category}/${params.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Document Not Found | DOB Protocol Wiki",
      description: "The requested document could not be found.",
    };
  }
}

export default async function DocPage({ params }: any) {
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