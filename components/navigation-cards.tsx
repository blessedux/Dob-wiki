import Link from "next/link"
import { ArrowUpRight, Database, Code, FileCode, Users } from "lucide-react"

export function NavigationCards() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/dob/overview" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Database className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">DOB</h2>
              <p className="text-muted-foreground">Core concepts and implementation details of the DOB system.</p>
            </div>
          </Link>
          <Link href="/docs/dobi/overview" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Code className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">DOBI</h2>
              <p className="text-muted-foreground">Interface specifications and integration guidelines for DOBI.</p>
            </div>
          </Link>
          <Link href="/docs/platform" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <FileCode className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Protocol</h2>
              <p className="text-muted-foreground">Technical specifications and standards of the DOB Protocol.</p>
            </div>
          </Link>
          <Link href="/docs/technology/architecture" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Users className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Agents</h2>
              <p className="text-muted-foreground">
                Information about agents, their roles, and interactions within the ecosystem.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
