import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Bot, Wallet, Zap } from "lucide-react"

export default function DobiPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "$DOBI", href: "/docs/dobi" }
      ]} />
      
      <Heading level={1}>DOBI: The AI-Powered Token Revolutionizing Decentralized Asset Management</Heading>
      
      <section className="my-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/docs/dobi/ai-agent" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Bot className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">AI Agent</h2>
              <p className="text-gray-400">Learn about DOBI's advanced AI capabilities for validating off-chain data.</p>
            </div>
          </Link>
          <Link href="/docs/dobi/vault" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Wallet className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Vault</h2>
              <p className="text-gray-400">Explore DOBI's locked staking functionality and earn rewards.</p>
            </div>
          </Link>
          <Link href="/docs/dobi/ehive" className="group">
            <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
              <div className="mb-4 flex items-center justify-between">
                <Zap className="h-6 w-6" />
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Ehive</h2>
              <p className="text-gray-400">Discover how DOBI integrates with Ehive's EV charging infrastructure.</p>
            </div>
          </Link>
        </div>
      </section>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-300">
          As the CEO of Dobprotocol, I am thrilled to share the journey and vision behind DOBI, our token that seamlessly integrates artificial intelligence (AI) and blockchain technology. DOBI is redefining decentralized asset management and setting new standards for Decentralized Autonomous Machines (DAMs) and Real World Assets (RWAs).
        </p>

        <Heading level={2}>The Vision Behind DOBI</Heading>
        <p>
          Our roadmap for DOBI includes a 2025 global tour targeting key regions such as North America, Europe, Asia, and Latin America. To navigate diverse regulatory environments, we employ:
        </p>
        
        <ul>
          <li><strong>Fiat-to-Crypto Conversion Systems</strong>: Partnering with providers like Stripe for seamless integrations.</li>
          <li><strong>Decentralized Governance</strong>: Enabling community-driven decision-making.</li>
          <li><strong>Compliance-Driven AI</strong>: Adapting validation mechanisms to align with local laws.</li>
        </ul>

        <p>
          When discussing this plan, I often emphasize how important it is to be proactive. Adapting to regulations isn&apos;t just about compliance; it&apos;s about building trust and showing our commitment to doing things the right way.
        </p>

        <Heading level={2}>Partnerships and Ecosystem Development</Heading>
        <p>
          Strategic collaborations with innovators such as Virtuals, IoTeX, and Chainlink are central to expanding DOBI&apos;s ecosystem. By integrating with multiple blockchains and participating in grant programs, we ensure that DOBI remains at the forefront of innovation.
        </p>

        <p>
          I believe partnerships are the backbone of any successful ecosystem. By working together with these pioneers, we&apos;re creating something that&apos;s not just innovative but also sustainable and impactful.
        </p>

        <Heading level={2}>Educating the Community</Heading>
        <p>
          To foster adoption, we invest in educational initiatives, including:
        </p>
        
        <ul>
          <li>Tutorials and articles on platforms like LinkedIn.</li>
          <li>AMAs with experts in AI and tokenization.</li>
          <li>Incentives like airdrops and referral programs.</li>
        </ul>

        <p>
          Education is key to what we&apos;re building. I&apos;m a big believer in making complex ideas accessible to everyone. If users understand how DOBI works and how it benefits them, adoption becomes a natural next step.
        </p>

        <Heading level={2}>Shaping the Future of Finance</Heading>
        
        <div className="my-8 flex justify-center">
          <div className="bg-gray-800 rounded-lg p-4 overflow-hidden">
            <div className="text-center text-gray-400 mb-4">2025 DOBI Roadmap</div>
            <div className="w-full h-64 md:h-96 relative bg-gray-700 rounded-md flex items-center justify-center">
              <div className="text-gray-400">Roadmap Visualization</div>
            </div>
          </div>
        </div>

        <p>
          AI and blockchain are poised to revolutionize finance by automating processes, enhancing transparency, and democratizing access. DOBI exemplifies this transformation, setting a new standard for secure, efficient, and inclusive financial ecosystems.
        </p>

        <p>
          I often tell people that we&apos;re not just building a token; we&apos;re building a vision of what finance could and should be—a system that&apos;s fair, transparent, and accessible to everyone.
        </p>

        <Heading level={2}>Overcoming Challenges</Heading>
        <p>
          We anticipate hurdles like regulatory compliance and public education. By prioritizing transparency, leveraging strategic partnerships, and deploying robust educational campaigns, we aim to build trust and drive widespread adoption of DOBI.
        </p>

        <p>
          For me, challenges are just opportunities to innovate further. Every obstacle we face helps us refine our approach and create a stronger, more resilient ecosystem. DOBI is more than just a token; it&apos;s a testament to the power of innovation in creating a smarter, more secure, and decentralized financial future.
        </p>

        <p>
          When we conceived DOBI, our goal was to create an AI-driven financial agent capable of managing and optimizing Decentralized Autonomous Machines, such as electric vehicle chargers and other IoT-enabled assets. For us, it was about leveraging automation, security, and intelligence to facilitate decentralized management with unmatched efficiency.
        </p>

        <p>
          I often describe DOBI as a solution designed to bridge the gap between cutting-edge technology and practical applications. It&apos;s not just about the technology; it&apos;s about solving real-world problems with tools that are secure, transparent, and adaptable. When we started this journey, I envisioned a token that could adapt to the complexities of decentralized finance while staying user-friendly and reliable.
        </p>

        <Heading level={2}>Key Features of DOBI</Heading>
        
        <div className="my-8 flex justify-center">
          <div className="bg-gray-800 rounded-lg p-4 overflow-hidden">
            <div className="text-center text-gray-400 mb-4">DOBI AI Assistant</div>
            <div className="w-full h-64 md:h-96 relative bg-gray-700 rounded-md flex items-center justify-center">
              <div className="text-gray-400">AI Assistant Visualization</div>
            </div>
          </div>
        </div>

        <Heading level={3}>1. Advanced Security through Trusted Execution Environments (TEEs)</Heading>
        <p>
          DOBI operates within TEEs to ensure the integrity and confidentiality of operations. This ensures that all asset management activities are protected from external manipulation. I like to explain TEEs as the digital equivalent of a secure vault—everything happening inside is safe and tamper-proof.
        </p>

        <Heading level={3}>2. Real-World IoT Integration</Heading>
        <p>
          By training on real-world IoT data, DOBI achieves a tailored performance that meets the specific needs of DAMs. This integration enhances the token&apos;s ability to automate and optimize asset management processes. When discussing this feature, I emphasize how this real-world connection makes DOBI practical and reliable for everyday use.
        </p>

        <Heading level={3}>3. Conversational AI Inspired by Eliza</Heading>
        <p>
          DOBI&apos;s conversational interface, inspired by the pioneering chatbot Eliza, enables intuitive interactions, empowering users to engage with their assets seamlessly. I like to think of this feature as having a helpful assistant that&apos;s always ready to guide you through managing your assets effortlessly.
        </p>

        <Heading level={3}>4. Automated Validation and Fraud Prevention</Heading>
        <p>
          AI-powered heuristics allow DOBI to conduct contextual validations, detect anomalies, and prevent fraudulent activities in real time. This capability ensures both security and operational efficiency. Whenever I talk about this, I make it clear that DOBI is designed to make every transaction safer without adding unnecessary complexity for the user.
        </p>

        <Heading level={2}>The Role of DOBI in Real World Asset (RWA) Tokenization</Heading>
        <p>
          DOBI is transforming the tokenization landscape by automating critical processes and enhancing transparency in RWA investments. Its blockchain-based records ensure traceability, while its regulatory compliance mechanisms provide confidence to investors. Key benefits include:
        </p>
        
        <ul>
          <li><strong>Enhanced Security</strong>: TEEs protect transaction data, ensuring compliance with regulatory standards.</li>
          <li><strong>Risk Reduction</strong>: Automated contextual validations reduce the likelihood of errors and fraud.</li>
          <li><strong>Operational Efficiency</strong>: AI-driven automation minimizes the need for manual intervention, streamlining workflows.</li>
        </ul>

        <p>
          When I explain this to potential users, I often highlight how DOBI&apos;s automation takes care of the heavy lifting, allowing investors to focus on making decisions rather than worrying about the nitty-gritty of asset management.
        </p>

        <Heading level={2}>Impact on Collateral Requirements</Heading>
        <p>
          DOBI optimizes collateral requirements by leveraging its trustless design and AI capabilities. In scenarios of non-compliance, the system autonomously enforces collateral execution, safeguarding investor returns. This dual benefit reduces entry barriers for enterprises while ensuring security for investors.
        </p>

        <p>
          I like to put it this way: DOBI not only simplifies the process for businesses by reducing upfront costs but also gives investors peace of mind knowing their funds are secure no matter what happens.
        </p>

        <Heading level={2}>Global Expansion and Regulatory Adaptation</Heading>
        <p>
          DOBI&apos;s design philosophy embraces regulatory adaptability, enabling it to function effectively across diverse jurisdictions. Our commitment to compliance ensures that DOBI can be adopted globally while maintaining its core functionality and benefits for users worldwide.
        </p>
      </div>
    </div>
  )
} 