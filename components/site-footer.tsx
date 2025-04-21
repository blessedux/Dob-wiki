import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/5 bg-black py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          DOB Protocol Wiki | Developed with{" "}
          <Link
            href="https://ui.shadcn.com/docs"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn-docs
          </Link>
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://discord.com"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7.5a2.5 2.5 0 0 0 2.5 2.5H8l2 2 2-2h2.5a2.5 2.5 0 0 0 2.5-2.5V9Z" />
              <path d="M8 14v-4" />
              <path d="M16 14v-4" />
              <path d="M8 10h.01" />
              <path d="M16 10h.01" />
            </svg>
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
