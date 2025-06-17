"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ 
  title, 
  children, 
  isOpen = false, 
  onToggle 
}: AccordionItemProps) {
  const [open, setOpen] = React.useState(isOpen)
  
  React.useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  
  const handleToggle = () => {
    const newState = !open
    setOpen(newState)
    if (onToggle) onToggle()
  }
  
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-black/30 hover:bg-black/50 transition-colors">
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between px-5 py-4 text-left transition-all",
          open ? "bg-[#587CE9]/10 text-[#587CE9]" : "hover:bg-gray-800/20"
        )}
        aria-expanded="true"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex items-center justify-center h-6 w-6 rounded-full bg-gray-800/60 transition-colors",
            open ? "bg-[#587CE9]/20 text-[#587CE9]" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 py-4 text-gray-300 border-t border-gray-800/40">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[]
  defaultOpen?: number
  allowMultiple?: boolean
}

export function Accordion({ 
  items, 
  defaultOpen = -1, 
  allowMultiple = false 
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>(
    defaultOpen >= 0 ? [defaultOpen] : []
  )
  
  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      )
    }
  }
  
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
} 