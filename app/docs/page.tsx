import { Heading } from "@/components/heading"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <Heading level={1}>DOB Protocol Documentation</Heading>
      
      <p className="text-lg text-gray-300">
        Welcome to the DOB Protocol documentation. Here you&apos;ll find comprehensive guides and documentation to help you understand and interact with the DOB ecosystem.
      </p>
      
      <div className="my-8 p-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700">
        <h2 className="text-2xl font-bold mb-3">🚀 DOB Token Presale Now Live!</h2>
        <p className="mb-4">Invest in tokenized businesses like Ehive with over 100 EV charging stations. Earn monthly returns directly in DOB tokens.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/docs/dob/presale" className="inline-flex items-center px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="https://presale.dobprotocol.com/buy-token" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
            Buy DOB Tokens
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div className="grid gap-6 mt-8">
        <div className="space-y-4">
          <Heading level={2}>Getting Started</Heading>
          <p className="text-gray-300">Explore the DOB Protocol, understand our vision, and learn how to participate in the ecosystem.</p>
          <div className="flex flex-col space-y-2">
            <Link href="/docs/dob/overview" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOB Overview</span>
            </Link>
            <Link href="/docs/roadmap" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>Project Roadmap</span>
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          <Heading level={2}>Token Information</Heading>
          <p className="text-gray-300">Learn about DOB and DOBI tokens, their utilities, and tokenomics.</p>
          <div className="flex flex-col space-y-2">
            <Link href="/docs/dob" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOB Token</span>
            </Link>
            <Link href="/docs/dob/presale" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOB Presale</span>
            </Link>
            <Link href="/docs/dobi" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOBI Token</span>
            </Link>
            <Link href="/docs/dobi/vault" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOBI Vault (Staking)</span>
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          <Heading level={2}>AI & Automation</Heading>
          <p className="text-gray-300">Discover how AI powers the DOB Protocol ecosystem and enables automation.</p>
          <div className="flex flex-col space-y-2">
            <Link href="/docs/dobi/ai-agent" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>DOBI AI Agent</span>
            </Link>
            <Link href="/docs/dobi/ehive" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>Ehive Integration</span>
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          <Heading level={2}>Platform Guide</Heading>
          <p className="text-gray-300">Discover the features and capabilities of the DOB Platform.</p>
          <div className="flex flex-col space-y-2">
            <Link href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>Platform Overview</span>
            </Link>
            <Link href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              <span>Developer API</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 