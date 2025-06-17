import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1">
        <div className="flex flex-col md:flex-row md:gap-8 py-8">
          <aside className="md:w-72 shrink-0 md:sticky top-14 md:h-[calc(100vh-theme(spacing.14))] md:overflow-y-auto py-4">
            <DocsSidebar />
          </aside>
          <main className="flex-1 pt-8 md:pt-8 bg-black text-white p-8 rounded-lg shadow-sm">
            {children}
          </main>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
} 