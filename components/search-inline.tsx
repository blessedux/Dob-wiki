"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'

// This would typically come from an API or a generated search index
const searchablePages = [
  { title: "DOB Protocol Overview", path: "/docs/dob/overview" },
  { title: "DOB Tokenomics", path: "/docs/dob/tokenomics" },
  { title: "DOB Presale", path: "/docs/dob/presale" },
  { title: "DOB Roadmap", path: "/docs/dob/roadmap" },
  { title: "DOBI Overview", path: "/docs/dobi/overview" },
  { title: "DOBI AI Agent", path: "/docs/dobi/ai-agent" },
  { title: "DOBI Vault", path: "/docs/dobi/vault" },
  { title: "DOBI eHive", path: "/docs/dobi/ehive" },
  { title: "Platform", path: "/docs/platform" },
  { title: "Technology Architecture", path: "/docs/technology/architecture" },
  { title: "FAQ", path: "/docs/faq" },
];

type SearchResult = {
  title: string;
  path: string;
  highlighted?: string;
}

export function SearchInline() {
  const [expanded, setExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  // Handle click outside to collapse search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node) && expanded) {
        setExpanded(false)
        setShowResults(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [expanded])
  
  // Focus input when expanded
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [expanded])

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const lowerQuery = searchQuery.toLowerCase()
    const results = searchablePages
      .filter(page => 
        page.title.toLowerCase().includes(lowerQuery)
      )
      .map(page => {
        const titleLower = page.title.toLowerCase()
        const index = titleLower.indexOf(lowerQuery)
        let highlighted = page.title
        
        if (index !== -1) {
          highlighted = 
            page.title.substring(0, index) + 
            '<span class="bg-[#587CE9]/20 text-[#587CE9]">' + 
            page.title.substring(index, index + lowerQuery.length) + 
            '</span>' + 
            page.title.substring(index + lowerQuery.length)
        }
        
        return {
          ...page,
          highlighted
        }
      })
      .slice(0, 5) // Limit to 5 results

    setSearchResults(results)
    setShowResults(results.length > 0)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (searchQuery.trim() === '') {
      setExpanded(false)
      setShowResults(false)
      return
    }
    
    // If only one result, navigate to that page
    if (searchResults.length === 1) {
      window.location.href = searchResults[0].path
      setExpanded(false)
      setShowResults(false)
    }
  }

  const handleResultClick = () => {
    setExpanded(false)
    setShowResults(false)
    setSearchQuery("")
  }

  return (
    <div className="relative flex items-center">
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.form
            ref={formRef}
            key="search-form"
            initial={{ width: 40, opacity: 0 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center"
            onSubmit={handleSearch}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-8 py-2 w-full bg-gray-900 border-gray-700 focus:border-[#587CE9] focus:ring-[#587CE9]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-full mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50"
                  >
                    <div className="py-1 max-h-[60vh] overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.path}
                          className="flex items-center px-4 py-2 hover:bg-gray-800 transition-colors"
                          onClick={handleResultClick}
                        >
                          <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                          <span 
                            className="text-sm"
                            dangerouslySetInnerHTML={{ __html: result.highlighted || result.title }}
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="search-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setExpanded(true)}
              className="hover:bg-gray-800"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 