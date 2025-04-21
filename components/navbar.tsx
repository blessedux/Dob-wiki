import Link from "next/link"
import Image from "next/image"
import { Search, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b border-border/5 bg-black">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/dob-logo.svg" 
              alt="DOB Protocol Logo" 
              width={32} 
              height={32} 
              className="rounded-full"
            />
            <span className="text-xl font-bold">DOB Protocol</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
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
            </Button>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
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
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
