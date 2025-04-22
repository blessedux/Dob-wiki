import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { Accordion } from "@/components/ui/accordion"
import { PageNavigation } from "@/components/page-navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about DOB Protocol and its features"
}

export default function FaqPage() {
  const generalQuestions = [
    {
      title: "What is DOB Protocol?",
      content: (
        <div>
          <p className="mb-3">
            DOB Protocol is a Layer-2 blockchain solution built on Ethereum that enables secure, transparent, and efficient digital asset management and trading.
          </p>
          <p>
            Our protocol provides a comprehensive framework for decentralized finance (DeFi) operations, combining the security benefits of blockchain with user-friendly interfaces and efficient transaction processing.
          </p>
        </div>
      ),
    },
    {
      title: "How does DOB Protocol differ from other blockchain solutions?",
      content: (
        <div>
          <p className="mb-3">
            DOB Protocol differentiates itself through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enhanced security features that prioritize asset protection</li>
            <li>Optimized Layer-2 architecture that reduces gas fees while maintaining Ethereum's security benefits</li>
            <li>Intuitive user interfaces designed for both crypto novices and experts</li>
            <li>Comprehensive documentation and support resources</li>
            <li>Seamless integration capabilities with existing blockchain infrastructure</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Is DOB Protocol open-source?",
      content: (
        <p>
          Yes, DOB Protocol is fully open-source. Our codebase is available for review and contribution on GitHub, fostering a transparent development environment and allowing the community to participate in our growth and security verification.
        </p>
      ),
    },
  ]

  const featureQuestions = [
    {
      title: "What features does the DOB Platform offer?",
      content: (
        <div>
          <p className="mb-3">
            The DOB Platform provides a comprehensive suite of features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure asset management with multi-layer protection</li>
            <li>Efficient trading mechanisms with minimal slippage</li>
            <li>Cross-chain compatibility for diverse asset integration</li>
            <li>Advanced analytics and portfolio tracking</li>
            <li>Yield optimization strategies</li>
            <li>Governance participation opportunities</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Can I stake tokens on DOB Protocol?",
      content: (
        <p>
          Yes, DOB Protocol supports staking for various tokens. Our staking mechanism allows users to earn rewards while contributing to network security and governance. Detailed staking guides are available in our documentation to help you maximize your staking benefits.
        </p>
      ),
    },
    {
      title: "How do transaction fees work on DOB Protocol?",
      content: (
        <div>
          <p className="mb-3">
            DOB Protocol utilizes a optimized fee structure that balances network sustainability with user affordability:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Layer-2 optimization significantly reduces gas costs compared to Ethereum mainnet</li>
            <li>Fee calculations are transparent and predictable</li>
            <li>Volume-based discounts are available for frequent users</li>
            <li>A portion of fees is allocated to protocol development and ecosystem growth</li>
          </ul>
        </div>
      ),
    },
  ]

  const gettingStartedQuestions = [
    {
      title: "How do I get started with DOB Protocol?",
      content: (
        <div>
          <p className="mb-3">
            Getting started with DOB Protocol is straightforward:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Connect your Ethereum wallet (MetaMask, WalletConnect, etc.) to our platform</li>
            <li>Transfer assets to the DOB Layer-2 network using our bridge</li>
            <li>Explore available features and services through our intuitive interface</li>
            <li>Join our community channels for support and updates</li>
          </ol>
          <p className="mt-3">
            Detailed guides and tutorials are available in our documentation section to help you navigate each step.
          </p>
        </div>
      ),
    },
    {
      title: "What wallets are compatible with DOB Protocol?",
      content: (
        <div>
          <p className="mb-3">
            DOB Protocol is compatible with most Ethereum-based wallets, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>MetaMask</li>
            <li>WalletConnect</li>
            <li>Coinbase Wallet</li>
            <li>Trust Wallet</li>
            <li>Ledger and Trezor hardware wallets</li>
          </ul>
          <p className="mt-3">
            We recommend using MetaMask for the most seamless experience.
          </p>
        </div>
      ),
    },
    {
      title: "Where can I get help if I encounter issues?",
      content: (
        <div>
          <p className="mb-3">
            Support is available through multiple channels:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>This documentation hub contains comprehensive guides and FAQs</li>
            <li>Our Discord community offers peer support and direct access to team members</li>
            <li>The DOB Protocol forum provides in-depth discussions and solutions</li>
            <li>For security concerns or technical issues, you can contact support@dobprotocol.com</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className="container px-4 pb-12">
      <Breadcrumb
        items={[
          { title: "Home", href: "/docs" },
          { title: "FAQ", href: "/docs/faq" },
        ]}
      />
      
      <div className="grid gap-10 mt-6">
        <Heading level={1}>Frequently Asked Questions</Heading>
        <p className="text-lg text-gray-400 mb-8">Find answers to the most common questions about DOB Protocol.</p>
        
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">General Questions</h2>
            <Accordion items={generalQuestions} allowMultiple={false} />
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Platform Features</h2>
            <Accordion items={featureQuestions} allowMultiple={false} />
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Getting Started</h2>
            <Accordion items={gettingStartedQuestions} allowMultiple={false} />
          </section>
        </div>

        <PageNavigation 
          prevPage={{ title: "DOB Protocol Platform", href: "/docs/platform" }}
          nextPage={{ title: "DOB Protocol Roadmap", href: "/docs/roadmap" }}
        />
      </div>
    </div>
  )
}
