import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// Define the content directory path
const contentDirectory = path.join(process.cwd(), 'content');

export interface FrontMatter {
  title: string;
  description: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
  [key: string]: string | { [key: string]: string | undefined } | undefined;
}

export interface DocPage {
  frontMatter: FrontMatter;
  content: string;
  slug: string;
  filePath: string;
}

// Get all docs by category
export async function getDocsByCategory(category: string): Promise<DocPage[]> {
  const categoryPath = path.join(contentDirectory, 'docs', category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  const dirEntries = fs.readdirSync(categoryPath);
  const docs: DocPage[] = [];
  
  for (const entry of dirEntries) {
    const filePath = path.join(categoryPath, entry);
    const isDirectory = fs.statSync(filePath).isDirectory();
    
    if (isDirectory) {
      const indexPath = path.join(filePath, 'index.md');
      if (fs.existsSync(indexPath)) {
        const docPage = await getDocBySlug(category, `${entry}/index`);
        docs.push(docPage);
      }
    } else if (entry.endsWith('.md')) {
      const slug = entry.replace(/\.md$/, '');
      const docPage = await getDocBySlug(category, slug);
      docs.push(docPage);
    }
  }
  
  return docs;
}

// Get a specific doc by its slug
export async function getDocBySlug(category: string, slug: string): Promise<DocPage> {
  let filePath: string;
  
  if (slug === 'index') {
    filePath = path.join(contentDirectory, 'docs', category, 'index.md');
  } else if (slug.endsWith('/index')) {
    const folderPath = slug.replace(/\/index$/, '');
    filePath = path.join(contentDirectory, 'docs', category, `${folderPath}/index.md`);
  } else {
    filePath = path.join(contentDirectory, 'docs', category, `${slug}.md`);
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: data as FrontMatter,
    content,
    slug,
    filePath
  };
}

// Render MDX content with components
export async function renderMDX(content: string) {
  const result = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug
        ],
        remarkPlugins: [
          remarkGfm
        ],
      },
    },
  });

  return result.content;
}

// Get all available categories
export function getAllCategories(): string[] {
  const docsPath = path.join(contentDirectory, 'docs');
  return fs.readdirSync(docsPath).filter(dir => {
    return fs.statSync(path.join(docsPath, dir)).isDirectory();
  });
}

// List all docs
export async function getAllDocs(): Promise<DocPage[]> {
  const categories = getAllCategories();
  let allDocs: DocPage[] = [];
  
  for (const category of categories) {
    const categoryDocs = await getDocsByCategory(category);
    allDocs = [...allDocs, ...categoryDocs];
  }
  
  return allDocs;
}

// Save or update a doc
export async function saveDoc(category: string, slug: string, content: string): Promise<boolean> {
  try {
    let filePath: string;
    
    if (slug === 'index') {
      filePath = path.join(contentDirectory, 'docs', category, 'index.md');
    } else if (slug.endsWith('/index')) {
      const folderPath = slug.replace(/\/index$/, '');
      const dirPath = path.join(contentDirectory, 'docs', category, folderPath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      filePath = path.join(dirPath, 'index.md');
    } else {
      filePath = path.join(contentDirectory, 'docs', category, `${slug}.md`);
    }
    
    // Ensure directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving document:', error);
    return false;
  }
} 