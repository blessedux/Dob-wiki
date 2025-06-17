import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"
import { ArrowUpRight, Zap, HelpCircle, Coins, BarChart3, MapPin } from "lucide-react"

export default function DOBPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "DOB Token", href: "/docs/dob" }
      ]} />
      
      <Heading level={1}>DOB Token</Heading>
      
      <p className="text-lg text-gray-300">
        The DOB token is the primary governance and utility token of the DOB Protocol ecosystem.
      </p>

      <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700 my-6">
        <h3 className="text-xl font-bold mb-2">🚀 Token Presale Now Live!</h3>
        <p className="mb-4">Early access sale is now open - invest in tokenized businesses like Ehive with over 100 EV charging stations.</p>
        <Link href="/docs/dob/presale" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
          Learn more about the presale
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <section className="my-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/docs/dob/overview" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <HelpCircle className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Overview</h2>
              <p className="text-gray-400">Learn about DOB token&apos;s fundamentals and vision.</p>
            </div>
          </Link>
          <Link href="/docs/dob/tokenomics" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <BarChart3 className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Tokenomics</h2>
              <p className="text-gray-400">Explore DOB token distribution, staking, and utility.</p>
            </div>
          </Link>
          <Link href="/docs/dob/roadmap" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <MapPin className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Roadmap</h2>
              <p className="text-gray-400">View the project&apos;s development timeline and future plans.</p>
            </div>
          </Link>
        </div>
      </section>
      
      <section className="my-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/dob/presale" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Zap className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Presale</h2>
              <p className="text-gray-400">Get early access to DOB tokens and investment opportunities.</p>
            </div>
          </Link>
          <a href="https://presale.dobprotocol.com/buy-token" target="_blank" rel="noopener noreferrer" className="group">
            <div className="flex h-full flex-col rounded-lg border border-blue-800 bg-blue-900/20 p-6 transition-all hover:border-blue-700 hover:bg-blue-900/30">
              <div className="mb-4 flex items-center justify-between">
                <Coins className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Buy Now</h2>
              <p className="text-gray-400">Purchase DOB tokens through our secure presale platform.</p>
            </div>
          </a>
        </div>
      </section>
      
      <div className="space-y-6 mt-8">
        <div className="space-y-3">
          <Heading level={2}>Token Utility</Heading>
          <p>
            DOB tokens serve multiple purposes within the ecosystem, including governance 
            rights, staking rewards, and access to premium features.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Governance</Heading>
          <p>
            As a DOB token holder, you have voting rights on important protocol decisions, 
            including feature proposals and parameter adjustments.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Staking</Heading>
          <p>
            By staking DOB tokens, you can earn passive rewards while contributing to 
            the security and stability of the network.
          </p>
        </div>

        <div className="space-y-3">
          <Heading level={2}>Real World Asset Exposure</Heading>
          <p>
            DOB token gives you exposure to tokenized real-world assets like EV charging stations 
            through projects like Ehive. Earn monthly returns directly in DOB tokens.
          </p>
        </div>
      </div>
    </div>
  )
} 