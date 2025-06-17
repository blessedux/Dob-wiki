import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"

export default function PartnershipsPage() {
  return (
    <div className="container px-4 pb-12">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { title: "Docs", href: "/docs" },
            { title: "Partnerships", href: "/docs/partnerships" }
          ]}
        />
        
        <Heading level={1}>Dobprotocol x A0x Partnership</Heading>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-300">
            Our strategic partnership with A0x represents a significant milestone in building a robust ecosystem 
            for real-world asset tokenization. Together, we're creating new opportunities for users in DeFi and 
            expanding the capabilities of both platforms.
          </p>
        </div>

        {/* Partnership Logo Banner */}
        <div className="w-full bg-black/30 border border-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-36 h-36 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-[#587CE9] font-bold text-xl">DOB</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-1 bg-gray-700 rounded-full md:w-1 md:h-24" />
            <div className="my-6 text-lg font-semibold text-white">PARTNERSHIP</div>
            <div className="w-24 h-1 bg-gray-700 rounded-full md:w-1 md:h-24" />
          </div>
          
          <div className="w-36 h-36 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-emerald-400 font-bold text-xl">A0x</span>
          </div>
        </div>

        {/* About A0x */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">About A0x</h2>
          <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              A0x is a leading decentralized protocol that specializes in advanced trading solutions and liquidity provision. 
              With a focus on innovation and security, A0x has established itself as a key player in the DeFi space.
            </p>
            <ul className="space-y-2 text-gray-400 list-disc pl-6">
              <li>Founded in 2021 by a team of blockchain and finance experts</li>
              <li>Over $500M in total value locked (TVL) across their ecosystem</li>
              <li>Supports multiple blockchain networks including Ethereum, Base, and Arbitrum</li>
              <li>Known for their cutting-edge AI-powered trading algorithms</li>
            </ul>
          </div>
        </div>

        {/* Partnership Details */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Partnership Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Technology Integration</h3>
              <p className="text-gray-400">
                Dobprotocol is integrating A0x's advanced liquidity solutions to enhance the trading experience for tokenized real-world assets. 
                This integration will provide users with better price discovery and reduced slippage when trading RWA tokens.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Cross-Promotion</h3>
              <p className="text-gray-400">
                Both platforms will engage in joint marketing activities to expand their user base and increase awareness of RWA tokenization 
                opportunities. This includes webinars, social media campaigns, and collaborative educational content.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Shared Liquidity Pools</h3>
              <p className="text-gray-400">
                The partnership establishes specialized liquidity pools that combine A0x's efficient market-making algorithms with 
                Dobprotocol's real-world asset tokens, creating deeper markets and better capital efficiency.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Research Collaboration</h3>
              <p className="text-gray-400">
                Our teams are collaborating on research initiatives focused on the intersection of AI, DeFi, and real-world asset tokenization. 
                The findings will be published in joint papers and implemented in both platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Partnership Timeline</h2>
          <div className="relative border-l-2 border-gray-700 pl-8 space-y-12 py-4">
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-[#587CE9]"></div>
              <h3 className="text-lg font-semibold text-white">Q1 2024: Initial Announcement</h3>
              <p className="text-gray-400 mt-2">
                Public announcement of the strategic partnership between Dobprotocol and A0x, outlining shared vision and goals.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-[#587CE9]"></div>
              <h3 className="text-lg font-semibold text-white">Q2 2024: Technical Integration</h3>
              <p className="text-gray-400 mt-2">
                Completion of the first phase of technical integration, enabling A0x's liquidity solutions on the Dobprotocol platform.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-emerald-400"></div>
              <h3 className="text-lg font-semibold text-white">Q3 2024: Joint Product Launch</h3>
              <p className="text-gray-400 mt-2">
                Launch of the first joint product: specialized RWA liquidity pools with enhanced trading features and AI-powered analytics.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gray-600"></div>
              <h3 className="text-lg font-semibold text-white">Q4 2024: Expansion</h3>
              <p className="text-gray-400 mt-2">
                Expansion of the partnership to include additional asset classes and blockchain networks, with a focus on cross-chain functionality.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gray-600"></div>
              <h3 className="text-lg font-semibold text-white">Q1 2025: Ecosystem Growth</h3>
              <p className="text-gray-400 mt-2">
                Joint development of a comprehensive ecosystem for RWA tokenization, trading, and yield generation across multiple platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Benefits of the Partnership</h2>
          <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-[#587CE9] mb-2">For Dobprotocol Users</h3>
                <ul className="space-y-2 text-gray-400 list-disc pl-6">
                  <li>Enhanced liquidity for tokenized real-world assets</li>
                  <li>Reduced trading costs and improved price execution</li>
                  <li>Access to A0x's advanced trading features</li>
                  <li>Expanded investment opportunities across both platforms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">For A0x Users</h3>
                <ul className="space-y-2 text-gray-400 list-disc pl-6">
                  <li>Exposure to unique real-world asset investment opportunities</li>
                  <li>Portfolio diversification beyond traditional crypto assets</li>
                  <li>Access to Dobprotocol's RWA tokenization tools</li>
                  <li>Integration with DOBI AI agent for automated strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <PageNavigation 
          prevPage={{ title: "Pitch Deck", href: "/docs/pitch-deck" }}
          nextPage={{ title: "DOBI: The AI-Powered Token", href: "/docs/dobi" }}
        />
      </div>
    </div>
  )
} 