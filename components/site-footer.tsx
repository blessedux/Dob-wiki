import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/5 bg-black py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-8 md:px-10 lg:px-16 max-w-screen-xl mx-auto md:flex-row">
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
          {/* X (Twitter) Icon */}
          <Link
            href="https://twitter.com/dobprotocol"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </Link>
          
          {/* Planet (dobprotocol.com) Icon */}
          <Link
            href="https://dobprotocol.com"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span className="sr-only">DOB Protocol Website</span>
          </Link>
          
          {/* LinkedIn Icon */}
          <Link
            href="https://linkedin.com/company/dobprotocol"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          
          {/* Telegram Icon */}
          <Link
            href="https://t.me/dobprotocol_official"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" 
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M21.5 3.5L2.5 10.5C2.1 10.7 2.1 11.3 2.5 11.4L5.5 12.5L17.5 7.5C17.7 7.4 17.9 7.7 17.7 7.8L8.5 16.5L8 20.5C8 21 8.5 21.2 8.8 20.9L11 18.8L15.5 21.8C16.2 22.2 16.9 21.8 17 21L21.5 4C21.7 3.3 21.2 2.8 20.5 3.5Z" />
            </svg>
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
