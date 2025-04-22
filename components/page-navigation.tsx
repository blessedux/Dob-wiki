"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageNavigationProps {
  prevPage?: {
    title: string
    href: string
  }
  nextPage?: {
    title: string
    href: string
  }
}

export function PageNavigation({ prevPage, nextPage }: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
      {prevPage ? (
        <Link 
          href={prevPage.href}
          className="flex items-center gap-2 text-gray-300 hover:text-[#587CE9] transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <div>
            <p className="text-xs text-gray-500">Previous</p>
            <p className="font-medium">{prevPage.title}</p>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      
      {nextPage ? (
        <Link 
          href={nextPage.href}
          className="flex items-center gap-2 text-gray-300 hover:text-[#587CE9] transition-colors group ml-auto"
        >
          <div className="text-right">
            <p className="text-xs text-gray-500">Next</p>
            <p className="font-medium">{nextPage.title}</p>
          </div>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  )
} 