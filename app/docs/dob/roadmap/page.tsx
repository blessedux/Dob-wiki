import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"

export default function DobRoadmapPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "DOB", href: "/docs/dob" },
        { title: "Roadmap", href: "/docs/dob/roadmap" }
      ]} />
      
      <Heading level={1}>Dobprotocol Roadmap</Heading>
      
      <div className="prose max-w-none">
        <div className="flex justify-center my-6">
          <div className="relative w-full h-64 md:h-96 bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Roadmap Visualization Image
            </div>
          </div>
        </div>

        <Heading level={2}>Q1 2025</Heading>
        <ul>
          <li>Introduction of DOB tokenomics.</li>
          <li>Launch of DOBI staking pools.</li>
          <li>Official launch of the Dobprotocol platform.</li>
          <li>Implementation of Ehive, a charging station management system.</li>
          <li>Commencement of public DOB token sale.</li>
          <li>Dob Agent Platform (MVP in March 2025)</li>
        </ul>

        <Heading level={2}>Q2 2025</Heading>
        <ul>
          <li>Automated Flow Design</li>
          <li>Global expansion across North America, Europe, and Asia.</li>
          <li>Introduction of new functionalities like investment pools and flow automation.</li>
          <li>Integration with additional blockchain networks.</li>
          <li>Expansion of AI agents for automated asset management.</li>
        </ul>

        <Heading level={2}>Key Platform Features</Heading>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Dob Agent Platform (Launch in March 2025)</h3>
          <p>
            Dobprotocol is developing an agent platform for RWA/DePin, integrating technologies such as TEEs, RPA, and hardware wallets.
          </p>
          <ul className="mt-3">
            <li>Agents validate and verify data for deposit execution into profit pools.</li>
            <li>The first use case, DOBI, will validate IoT data and transactions, distributing earnings to DOBI token holders.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Secondary Market (Launch in March 2025)</h3>
          <p>
            A secondary market for For Profit asset shares allows participants to sell their shares and liquidate positions.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">New Pool Type: For Invest (Launch in March 2025)</h3>
          <p className="font-bold mb-2">Utility:</p>
          <ul className="mb-4">
            <li>Invest in RWA/DePin projects requiring capital backed by guaranteed collateral.</li>
            <li>RWA projects created within Dobprotocol can incorporate various tools to enhance investor confidence, such as:
              <ul className="ml-6 mt-2">
                <li>AI Agents</li>
                <li>RPA for process automation</li>
                <li>Collateralization of distribution amounts</li>
              </ul>
            </li>
          </ul>

          <p className="font-bold mb-2">Mechanism:</p>
          <ul>
            <li>Paid public pools can define the percentage allocated to sales and operational costs. These pools have a maximum timeframe to reach their funding goal.</li>
            <li>Upon reaching 100% of the target, 10% of the funds raised, along with 10% of the tokens, are deposited into a Uniswap LP. The remaining 90% is allocated to the profit pool owner.</li>
            <li>If the funding goal is not reached, Dobprotocol only charges its platform fee. Collateral is returned, and investors can reclaim their funds. To facilitate this, a new distribution pool is created, automatically allocating the collected liquidity in DOB to all token holders.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Automated Flow Design (Launch in June 2025)</h3>
          <p>
            <strong>Automated Flow Design</strong> is a feature within Dobprotocol that enables users to graphically automate financial flows between pools or addresses. This tool allows users to visually define the distribution of funds, specifying target addresses and allocation percentages.
          </p>
          <p className="mt-3">
            Additionally, it supports the configuration of automated triggers for distributions, such as time-based schedules, milestones, or external data inputs like oracles. By simplifying complex financial processes, Automated Flow Design enhances transparency, efficiency, and user control, enabling seamless management of decentralized financial operations.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Web2-Connected Wallet Device (Launch in Sept 2025)</h3>
          <p>
            Each device generating revenue on Dobprotocol&apos;s platform will feature a Web3 wallet integrated with onramp and offramp payment systems, enabling seamless fiat-to-crypto conversion for automatic profit distribution.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Dob Credit (Launch in Sept 2025)</h3>
          <p>
            <strong>Dob Credit</strong> is a decentralized credit and lending system within the Dobprotocol ecosystem, designed to provide financial services while enhancing trust and liquidity for tokenized assets. Users can access collateralized loans by securing them with tokenized assets such as RWA or DOB tokens, while investors contribute to a collective credit fund to earn passive income through shared interest.
          </p>
          <p className="mt-3">
            The system features progressive loans, where credit limits grow based on repayment history, and optional KYC requirements depending on pool risk policies. Loan terms are managed through decentralized governance, and all operations are automated and transparent via smart contracts.
          </p>
          <p className="mt-3">
            Risk mitigation is enhanced with buffers and insurance options, and debts can be tokenized for trading in secondary markets, increasing liquidity. Dob Credit benefits borrowers with quick, flexible funding and competitive rates, while offering investors secure, income-generating opportunities, all while reinforcing the decentralized economy.
          </p>
        </div>

        <Heading level={2}>Pool Types</Heading>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">For Profit Pools</h3>
          <p className="font-bold mb-2">Utility:</p>
          <ul>
            <li>Invest in revenue streams from collateral-backed RWA projects.</li>
            <li>Allocate a percentage of revenue generated by RWA assets.</li>
            <li>Pools can be collateralized with future distributions to ensure returns.</li>
            <li>Supported by Dobprotocol&apos;s due diligence process, ensuring asset validity. Real-world contracts mitigate risks for investors.</li>
          </ul>

          <p className="font-bold mt-4 mb-2">Launch Use Case:</p>
          <p>
            Ehive is a platform managing over 100 electric vehicle charging stations. These assets are expected to yield an annual ROI of 30% per charging point. Investors can purchase shares in a charging station using DOB tokens and receive monthly returns deposited in DOB. These investments are secured with 80% collateralized future distributions. A secondary market allows investors to trade their shares.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 my-6">
          <h3 className="text-xl font-bold mb-3">Public and Private Pools</h3>
          <p className="font-bold mb-2">Utility:</p>
          <ul>
            <li>Automate DAO treasury distributions, airdrops, or other allocations.</li>
            <li>Public pools are visible on the platform, while private pools are accessible via invitation links.</li>
            <li>Public pool creators can approve or reject participation requests and define allocation percentages.</li>
            <li>Private profit pools are restricted to pre-defined participants.</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700 my-6">
          <h3 className="text-xl font-bold mb-2">Be Part of Our Journey</h3>
          <p>
            Join Dobprotocol as we revolutionize decentralized asset management and tokenized real-world assets. Get involved early to maximize your potential benefits.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/docs/dob/tokenomics" className="inline-flex items-center px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              View Tokenomics
            </Link>
            <Link href="/docs/dob/presale" className="inline-flex items-center px-5 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
              Join the Presale
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 