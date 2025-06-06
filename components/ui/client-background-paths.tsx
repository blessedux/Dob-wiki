'use client'

import { BackgroundPaths } from './background-paths'
import { useEffect } from 'react'

export function ClientBackgroundPaths({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  useEffect(() => {
    console.log('ClientBackgroundPaths mounted')
  }, [])

  return (
    <div className="relative w-full h-full">
      <BackgroundPaths className={className}>
        {children}
      </BackgroundPaths>
    </div>
  )
} 