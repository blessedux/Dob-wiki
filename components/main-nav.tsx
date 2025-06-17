import Link from "next/link"
import { cn } from "@/lib/utils"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-foreground/80">
        Home
      </Link>
      <Link href="/docs" className="text-sm font-medium transition-colors hover:text-foreground/80">
        Docs
      </Link>
      <Link
        href="https://github.com/dobprotocol"
        className="text-sm font-medium transition-colors hover:text-foreground/80"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
    </nav>
  )
}
