import EditDocClient from './EditDocClient';
import { getAllDocs } from '@/lib/mdx';

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    category: doc.filePath.split('/docs/')[1].split('/')[0],
    slug: doc.slug,
  }));
}

interface PageParams {
  category: string;
  slug: string;
}

export default async function EditDocPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  return <EditDocClient category={resolvedParams.category} slug={resolvedParams.slug} />;
} 