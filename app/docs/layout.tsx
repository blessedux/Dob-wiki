import { DocsSidebar } from "@/components/docs-sidebar"
import { getSidebarData } from "@/components/docs-sidebar-server"

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sections = await getSidebarData()

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-800 p-4">
        <DocsSidebar sections={sections} />
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
} 