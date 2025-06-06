import { getAllDocs, getAllCategories } from "@/lib/mdx"

export async function getSidebarData() {
  try {
    const allDocs = await getAllDocs()
    const categories = getAllCategories()
    
    // Group docs by category
    const docsByCategory: Record<string, any[]> = {}
    allDocs.forEach(doc => {
      const category = doc.filePath.split('/docs/')[1].split('/')[0]
      if (!docsByCategory[category]) {
        docsByCategory[category] = []
      }
      docsByCategory[category].push({
        title: doc.frontMatter.title,
        href: `/docs/${category}/${doc.slug}`,
      })
    })

    // Create sections
    return categories.map(category => ({
      title: category.charAt(0).toUpperCase() + category.slice(1),
      items: docsByCategory[category] || [],
      defaultOpen: true
    }))
  } catch (error) {
    console.error('Error loading docs:', error)
    return []
  }
} 