"use client"

import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface DocItem {
  title: string;
  href: string;
}

interface SidebarSection {
  title: string;
  items: DocItem[];
  defaultOpen: boolean;
}

interface DocsSidebarProps {
  sections: SidebarSection[];
}

export function DocsSidebar({ sections }: DocsSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sections.reduce((acc, section) => {
      acc[section.title] = section.defaultOpen
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
      {sections.map((section) => (
        <div key={section.title} className="space-y-1">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <h4 className="font-medium text-sm">{section.title}</h4>
            </div>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform", 
                openSections[section.title] ? "transform rotate-180" : ""
              )} 
            />
          </button>

          {openSections[section.title] && (
            <div className="flex flex-col space-y-1 pl-10 py-1">
              {section.items.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="flex items-center space-x-3 py-2 px-3 text-gray-300 hover:text-white text-sm transition-colors rounded hover:bg-gray-800"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
