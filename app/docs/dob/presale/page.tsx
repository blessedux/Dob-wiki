import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function DobPresalePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "DOB", href: "/docs/dob" },
        { title: "Presale", href: "/docs/dob/presale" }
      ]} />
      
      <Heading level={1}>DOB Token Presale</Heading>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-300">
          We&apos;re excited to announce the early access sale of DOB, your key to investing in tokenized businesses shaping the future.
        </p>

        <Heading level={2}>Why DOB?</Heading>
        
        <p>
          Invest in tokenized ventures like <strong>Ehive</strong>, a groundbreaking project managing over <strong>100 electric vehicle charging stations</strong>. 
          Own shares in a charging station and receive <strong>monthly returns</strong>, directly deposited in DOB.
        </p>

        <p>
          This is your chance to unlock the potential of Real World Assets (RWA) and join the Web3 revolution.
        </p>

        <div className="my-8 p-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700">
          <h3 className="text-xl font-bold mb-4">Limited Time Opportunity</h3>
          <p className="mb-4">Be among the first to acquire DOB tokens and participate in the future of decentralized business ownership.</p>
          <div className="flex justify-center">
            <Link 
              href="https://presale.dobprotocol.com/buy-token" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Get your DOB tokens
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <Heading level={2}>Key Benefits</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Real World Asset Exposure</h3>
            <p>Access to tokenized real-world assets like EV charging infrastructure with proven revenue models.</p>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Monthly Returns</h3>
            <p>Receive regular passive income directly in DOB tokens from operational assets.</p>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Early Adopter Advantage</h3>
            <p>Privileged access to future investment opportunities within the DOB ecosystem.</p>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Web3 Innovation</h3>
            <p>Participate in the cutting edge of blockchain technology applied to physical asset management.</p>
          </div>
        </div>

        <Heading level={2}>How It Works</Heading>
        
        <ol className="list-decimal space-y-2 pl-5">
          <li>Visit our secure presale platform at <Link href="https://presale.dobprotocol.com/buy-token" target="_blank" className="text-blue-400 hover:text-blue-300">presale.dobprotocol.com</Link></li>
          <li>Connect your wallet (supports MetaMask, WalletConnect, and more)</li>
          <li>Select the amount of DOB tokens you wish to purchase</li>
          <li>Complete the transaction</li>
          <li>Receive your DOB tokens directly to your wallet</li>
        </ol>

        <div className="p-4 bg-yellow-900/30 border border-yellow-800 rounded-lg my-6">
          <p className="text-yellow-300 font-semibold">
            Don&apos;t miss this opportunity to be part of the DOB ecosystem from the beginning. The presale supply is limited and available on a first-come, first-served basis.
          </p>
        </div>

        <p className="text-lg font-semibold mt-6">
          <Link 
            href="https://presale.dobprotocol.com/buy-token" 
            target="_blank"
            className="text-blue-400 hover:text-blue-300 inline-flex items-center"
          >
            Join the presale now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </p>
      </div>
    </div>
  )
} 