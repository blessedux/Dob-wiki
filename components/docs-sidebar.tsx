"use client"

import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { docsStructure } from "@/lib/docs-structure"

export function DocsSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    docsStructure.reduce((acc, section) => {
      acc[section.label] = true
      return acc
    }, {} as Record<string, boolean>)
  )

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="flex flex-col space-y-2 bg-black text-white rounded-lg p-4">
      {docsStructure.map((section) => (
        <div key={section.label} className="space-y-1">
          <button
            onClick={() => toggleSection(section.label)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {section.icon}
              <h4 className="font-medium text-sm">{section.label}</h4>
            </div>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform", 
                openSections[section.label] ? "transform rotate-180" : ""
              )} 
            />
          </button>

          {openSections[section.label] && (
            <div className="flex flex-col space-y-1 pl-10 py-1">
              {section.items.map((item) => (
                <Link 
                  key={item.slug} 
                  href={section.category ? `/docs/${section.category}/${item.slug}` : `/docs/${item.slug}`}
                  className="flex items-center space-x-3 py-2 px-3 text-gray-300 hover:text-white text-sm transition-colors rounded hover:bg-gray-800"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
