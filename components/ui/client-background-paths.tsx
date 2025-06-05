'use client'

import dynamic from 'next/dynamic'

const BackgroundPaths = dynamic(() => import('./background-paths').then(mod => mod.BackgroundPaths), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
})

export function ClientBackgroundPaths({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <BackgroundPaths className={className}>
      {children}
    </BackgroundPaths>
  )
} 