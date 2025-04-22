import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "@/components/search-dialog"
import { ExternalLink } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-16 items-center px-8 md:px-10 lg:px-16 max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image 
              src="/dob-logo.svg" 
              alt="DOB Protocol Logo" 
              width={32} 
              height={32} 
            />
          </div>
          <span className="font-bold">DOB Protocol</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <SearchDialog />
          <Button variant="outline" className="border-[#587CE9] text-[#587CE9] hover:bg-[#587CE9]/10" asChild>
            <Link href="https://home.dobprotocol.com" target="_blank" rel="noopener noreferrer">
              App <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
