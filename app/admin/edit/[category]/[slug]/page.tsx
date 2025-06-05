import EditDocClient from './EditDocClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EditDocPage({ params }: any) {
  return <EditDocClient category={params.category} slug={params.slug} />;
} 