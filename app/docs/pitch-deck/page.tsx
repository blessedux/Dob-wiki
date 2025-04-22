import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"
import Link from "next/link"

export default function PitchDeckPage() {
  return (
    <div className="container px-4 pb-12">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { title: "Docs", href: "/docs" },
            { title: "Pitch Deck", href: "/docs/pitch-deck" }
          ]}
        />
        
        <Heading level={1}>Dobprotocol Pitch Deck</Heading>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-300">
            Our pitch deck provides a comprehensive overview of Dobprotocol, our vision, market opportunity, 
            technology, and roadmap. Download or view the full pitch deck to understand how we're revolutionizing 
            real-world asset tokenization and the future of decentralized finance.
          </p>
        </div>

        {/* Placeholder for the PDF viewer */}
        <div className="w-full border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center p-12 mt-4 bg-black/20">
          <div className="h-96 w-full max-w-3xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-20 w-20 mx-auto text-gray-600"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-400">Pitch Deck Preview</h3>
              <p className="text-gray-500 max-w-md">
                The pitch deck will be displayed here. You can view it online or download the PDF for offline viewing.
              </p>
              <div className="pt-4">
                <Link 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#587CE9] hover:bg-[#4A6CD0] text-white font-medium transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Market Opportunity</h3>
              <p className="text-gray-400">
                The global market for tokenized real-world assets is projected to reach $16 trillion by 2030. 
                Dobprotocol is positioned to capture 0.25% of this market, representing $250 million in operational assets.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Technology Innovation</h3>
              <p className="text-gray-400">
                Our platform leverages TEEs and Zero-Knowledge Proofs to ensure data integrity and privacy while enabling 
                transparent and automated revenue distribution from real-world assets.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Tokenomics</h3>
              <p className="text-gray-400">
                The dual-token system (DOB and DOBI) creates a robust economic model that balances governance, utility, 
                and value accrual. Staking mechanisms incentivize long-term participation and alignment.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Growth Strategy</h3>
              <p className="text-gray-400">
                Our growth strategy includes strategic partnerships with RWA providers, global expansion across key 
                blockchain hubs, and continuous improvement of our technology stack and user experience.
              </p>
            </div>
          </div>
        </div>
        
        <PageNavigation 
          prevPage={{ title: "Dobprotocol Team", href: "/docs/team" }}
          nextPage={{ title: "Partnerships", href: "/docs/partnerships" }}
        />
      </div>
    </div>
  )
} 