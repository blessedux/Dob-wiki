import Link from "next/link"
import { Users } from "lucide-react"

export function TableOfContents() {
  return (
    <div className="space-y-6 px-4">
      <div>
        <h4 className="mb-2 text-sm font-medium">On This Page</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#overview" className="text-muted-foreground hover:text-foreground">
              Overview
            </Link>
          </li>
          <li>
            <Link href="#key-components" className="text-muted-foreground hover:text-foreground">
              Key Components
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#market-opportunity" className="text-muted-foreground hover:text-foreground">
              Market Opportunity
            </Link>
          </li>
          <li>
            <Link href="#getting-started" className="text-muted-foreground hover:text-foreground">
              Getting Started
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-t border-border pt-6">
        <Link
          href="/community"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm hover:bg-accent"
        >
          <Users className="h-4 w-4" />
          <span>Join Our Community</span>
        </Link>
      </div>
    </div>
  )
}
