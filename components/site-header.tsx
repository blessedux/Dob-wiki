import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 9h6v6H9z" />
            </svg>
          </div>
          <span className="font-bold">DOB Protocol</span>
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/dobprotocol" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
