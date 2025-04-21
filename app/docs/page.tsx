import { Heading } from "@/components/heading"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <Heading level={1}>DOB Protocol Documentation</Heading>
      
      <p className="text-lg text-gray-300">
        Welcome to the DOB Protocol documentation. Here you&apos;ll find comprehensive guides and documentation to help you understand and interact with the DOB ecosystem.
      </p>
      
      <div className="grid gap-6 mt-8">
        <div className="space-y-2">
          <Heading level={2}>Getting Started</Heading>
          <p className="text-gray-300">Explore the DOB Protocol, understand our vision, and learn how to participate in the ecosystem.</p>
        </div>
        
        <div className="space-y-2">
          <Heading level={2}>Core Concepts</Heading>
          <p className="text-gray-300">Understand the key components and technologies that power the DOB Protocol.</p>
        </div>
        
        <div className="space-y-2">
          <Heading level={2}>Token Information</Heading>
          <p className="text-gray-300">Learn about DOB and DOBI tokens, their utilities, and tokenomics.</p>
        </div>
        
        <div className="space-y-2">
          <Heading level={2}>Platform Guide</Heading>
          <p className="text-gray-300">Discover the features and capabilities of the DOB Platform.</p>
        </div>
      </div>
    </div>
  )
} 