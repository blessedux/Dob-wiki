import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/mdx';

// Generate static paths for all documents
export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => {
    // Ensure we have a valid filePath
    if (!doc.filePath) {
      console.error('Document missing filePath:', doc);
      return null;
    }
    
    // Split the path and get the category
    const pathParts = doc.filePath.split('/');
    const category = pathParts[1] || 'general'; // Default to 'general' if no category found
    
    return {
      category,
      slug: doc.slug,
    };
  }).filter(Boolean); // Remove any null entries
}

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function AdminEditPage(props: PageProps) {
  const params = await props.params;
  const { category, slug } = params;

  try {
    const doc = await getDocBySlug(category, slug);
    
    if (!doc) {
      return notFound();
    }

    return (
      <div className="container py-8 max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Document</h1>
        <div className="bg-black border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{doc.frontMatter.title}</h2>
          <p className="text-gray-400 mb-4">{doc.frontMatter.description}</p>
          <div className="prose prose-invert max-w-none">
            {/* Add your edit form here */}
            <p>Edit form coming soon...</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading document:', error);
    return notFound();
  }
} 