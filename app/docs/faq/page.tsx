import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function FaqPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { title: "Docs", href: "/docs" },
          { title: "FAQ", href: "/docs/faq" }
        ]}
      />
      
      <Heading level={1}>Frequently Asked Questions</Heading>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Heading level={2}>General Questions</Heading>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is DOB Protocol?</h3>
              <p className="text-gray-300">
                DOB Protocol is a platform that connects real-world assets to blockchain technology, allowing for transparent and efficient management of assets and their associated revenue streams.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How does DOB Protocol work?</h3>
              <p className="text-gray-300">
                DOB Protocol uses smart contracts to tokenize real-world assets and their revenue streams. These assets can then be managed, invested in, and traded on the platform, with all transactions and distributions being executed automatically through the blockchain.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What are the $DOB and $DOBI tokens?</h3>
              <p className="text-gray-300">
                $DOB is the governance token of the platform, used for creating pools, providing collateral, and participating in platform decisions. $DOBI is an AI-driven agent token that validates off-chain data and facilitates automated asset management.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Heading level={2}>Platform Features</Heading>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What are &quot;Profit Pools&quot;?</h3>
              <p className="text-gray-300">
                Profit Pools are smart contract-based pools that allow for the distribution of revenue from real-world assets to investors. These pools can be public or private and can be configured for various asset types and distribution models.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How does staking work?</h3>
              <p className="text-gray-300">
                Staking allows token holders to lock their tokens in the platform to earn rewards. Different tiers of staking are available with varying APRs and durations, providing flexibility for different investment strategies.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is the DOBI AI Agent?</h3>
              <p className="text-gray-300">
                The DOBI AI Agent is an advanced AI system that validates off-chain data for use in on-chain transactions. It helps ensure the accuracy and reliability of data from real-world assets, enhancing trust in the platform.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Heading level={2}>Getting Started</Heading>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How do I buy DOB tokens?</h3>
              <p className="text-gray-300">
                DOB tokens can be purchased through the presale platform at <a href="https://presale.dobprotocol.com/buy-token" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">presale.dobprotocol.com</a>. After the presale period, they will be available on Uniswap.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How can I participate in profit pools?</h3>
              <p className="text-gray-300">
                To participate in profit pools, you need to connect your wallet to the platform, browse available pools, and purchase shares using DOB tokens. Each pool has specific terms and conditions, including minimum investment amounts and distribution schedules.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is there a minimum investment amount?</h3>
              <p className="text-gray-300">
                Minimum investment amounts vary by pool. Some pools may have lower thresholds for entry, while others, particularly those for high-value assets, may require larger investments. All details are clearly displayed on each pool&apos;s information page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
