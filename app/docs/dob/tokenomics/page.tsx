import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"

export default function DobTokenomicsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "DOB", href: "/docs/dob" },
        { title: "Tokenomics", href: "/docs/dob/tokenomics" }
      ]} />
      
      <Heading level={1}>DOB Token Tokenomics</Heading>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-300">
          The DOB token (<Link href="https://basescan.org/address/0xf20ce503bcd9721ea43ddd0485c66fa675bd3fc5" target="_blank" rel="noopener noreferrer" className="break-all">0xF20cE503BCd9721ea43Ddd0485C66fa675BD3FC5</Link>) is fully minted, ensuring that no additional tokens can be generated. Following the community sale on July 6, 2025, a Liquidity Pool (LP) will be launched on Uniswap with 15% of the funds raised, establishing an initial market cap of $120 million.
        </p>

        <Heading level={2}>Ownership and Benefits</Heading>
        <p>
          Owning DOB tokens grants proportional rights to the protocol&apos;s generated fees. All fees are deposited into Dobprotocol&apos;s Profit Pool and redistributed among token holders based on their share.
        </p>

        <Heading level={3}>$DOB Token Staking</Heading>
        <p>
          An upcoming staking system will reward early adopters until the Uniswap Liquidity Pool is established.
        </p>

        <div className="relative overflow-x-auto my-6 rounded-lg border border-gray-700">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-800 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Staking Tier</th>
                <th scope="col" className="px-6 py-3">Max Tokens to Reward</th>
                <th scope="col" className="px-6 py-3">APR</th>
                <th scope="col" className="px-6 py-3">Max Tokens to Stake</th>
                <th scope="col" className="px-6 py-3">Duration (Months)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Tier 1</th>
                <td className="px-6 py-4">25,000,000</td>
                <td className="px-6 py-4">15.00%</td>
                <td className="px-6 py-4">166,666,667</td>
                <td className="px-6 py-4">6</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Tier 2</th>
                <td className="px-6 py-4">15,000,000</td>
                <td className="px-6 py-4">25.00%</td>
                <td className="px-6 py-4">60,000,000</td>
                <td className="px-6 py-4">120</td>
              </tr>
              <tr className="bg-gray-900">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Tier 3</th>
                <td className="px-6 py-4">10,000,000</td>
                <td className="px-6 py-4">35.00%</td>
                <td className="px-6 py-4">28,571,429</td>
                <td className="px-6 py-4">210</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Heading level={2}>Capital Allocation</Heading>
        <p>
          In each funding round, 20% of the raised funds are allocated to liquidity in the LP. The breakdown of funds is as follows:
        </p>

        <div className="relative overflow-x-auto my-6 rounded-lg border border-gray-700">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-800 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Sales Activities</th>
                <td className="px-6 py-4">15%</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Research & Development</th>
                <td className="px-6 py-4">5%</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Marketing</th>
                <td className="px-6 py-4">20%</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Operational Costs</th>
                <td className="px-6 py-4">40%</td>
              </tr>
              <tr className="bg-gray-900">
                <th scope="row" className="px-6 py-4 font-medium">Provide Liquidity on Uniswap</th>
                <td className="px-6 py-4">20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Heading level={2}>Funding Rounds</Heading>
        <p>
          The investment rounds are structured as follows:
        </p>

        <div className="relative overflow-x-auto my-6 rounded-lg border border-gray-700">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-800 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Round</th>
                <th scope="col" className="px-6 py-3">Start Date</th>
                <th scope="col" className="px-6 py-3">End Date</th>
                <th scope="col" className="px-6 py-3">Duration (Months)</th>
                <th scope="col" className="px-6 py-3">Capital (ETH)</th>
                <th scope="col" className="px-6 py-3">Stake (%)</th>
                <th scope="col" className="px-6 py-3">Market Cap (ETH)</th>
                <th scope="col" className="px-6 py-3">Token Price (ETH)</th>
                <th scope="col" className="px-6 py-3">Token Supply</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Public Presale 1/2</th>
                <td className="px-6 py-4">06/01/2024</td>
                <td className="px-6 py-4">06/03/2025</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">1,250</td>
                <td className="px-6 py-4">5%</td>
                <td className="px-6 py-4">25,000</td>
                <td className="px-6 py-4">0.0000250</td>
                <td className="px-6 py-4">50,000,000</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Public Presale 2/2</th>
                <td className="px-6 py-4">06/03/2025</td>
                <td className="px-6 py-4">06/05/2025</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">1,600</td>
                <td className="px-6 py-4">3%</td>
                <td className="px-6 py-4">53,333</td>
                <td className="px-6 py-4">0.0000533</td>
                <td className="px-6 py-4">30,000,000</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Public Sale</th>
                <td className="px-6 py-4">06/05/2025</td>
                <td className="px-6 py-4">06/06/2025</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">7,500</td>
                <td className="px-6 py-4">10%</td>
                <td className="px-6 py-4">75,000</td>
                <td className="px-6 py-4">0.0000750</td>
                <td className="px-6 py-4">100,000,000</td>
              </tr>
              <tr className="bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Private Sale</th>
                <td className="px-6 py-4">06/01/2025</td>
                <td className="px-6 py-4">06/06/2025</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">6,000</td>
                <td className="px-6 py-4">8%</td>
                <td className="px-6 py-4">75,000</td>
                <td className="px-6 py-4">0.0000750</td>
                <td className="px-6 py-4">80,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Heading level={2}>Token Distribution</Heading>

        <div className="relative overflow-x-auto my-6 rounded-lg border border-gray-700">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-800 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Token Distribution</th>
                <th scope="col" className="px-6 py-3">Percentage</th>
                <th scope="col" className="px-6 py-3">Amount</th>
                <th scope="col" className="px-6 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Founders</th>
                <td className="px-6 py-4">9%</td>
                <td className="px-6 py-4">90,000,000</td>
                <td className="px-6 py-4">24 month vesting plan with 4.17% monthly vesting until fully vested</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Staking Rewards</th>
                <td className="px-6 py-4">5%</td>
                <td className="px-6 py-4">50,000,000</td>
                <td className="px-6 py-4">Incentives for token holders</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Buy / LP provider</th>
                <td className="px-6 py-4">5%</td>
                <td className="px-6 py-4">50,000,000</td>
                <td className="px-6 py-4">Capital injections into the liquidity pool</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Early Community</th>
                <td className="px-6 py-4">18%</td>
                <td className="px-6 py-4">180,000,000</td>
                <td className="px-6 py-4">Direct minted webpage</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Dobi Staking</th>
                <td className="px-6 py-4">2%</td>
                <td className="px-6 py-4">20,000,000</td>
                <td className="px-6 py-4">Stake DOBI to earn DOB</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Community</th>
                <td className="px-6 py-4">6%</td>
                <td className="px-6 py-4">60,000,000</td>
                <td className="px-6 py-4">Grants</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Airdrops</th>
                <td className="px-6 py-4">1%</td>
                <td className="px-6 py-4">10,000,000</td>
                <td className="px-6 py-4">Airdrops, Rewards</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Treasury</th>
                <td className="px-6 py-4">35%</td>
                <td className="px-6 py-4">350,000,000</td>
                <td className="px-6 py-4">Operational Cost</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">VCs</th>
                <td className="px-6 py-4">8%</td>
                <td className="px-6 py-4">80,000,000</td>
                <td className="px-6 py-4">18 month vesting plan with a 6 month cliff, after which 33% vests, followed by 5.56% monthly vesting.</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Company</th>
                <td className="px-6 py-4">10%</td>
                <td className="px-6 py-4">100,000,000</td>
                <td className="px-6 py-4">Dober LLC</td>
              </tr>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">Advisor/Director Board</th>
                <td className="px-6 py-4">1%</td>
                <td className="px-6 py-4">10,000,000</td>
                <td className="px-6 py-4">Strategic Partners</td>
              </tr>
              <tr className="bg-gray-800 font-bold">
                <th scope="row" className="px-6 py-4">Total</th>
                <td className="px-6 py-4">100%</td>
                <td className="px-6 py-4">1,000,000,000</td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Heading level={2}>Utility of the DOB Token</Heading>
        <p>
          All major platform functionalities are powered by the DOB token:
        </p>
        <ul>
          <li>Creation of Profit Pools.</li>
          <li>Distributions are executed in DOB.</li>
          <li>Collateral is provided in DOB.</li>
          <li>AI agents are paid in DOB.</li>
        </ul>

        <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700 my-6">
          <h3 className="text-xl font-bold mb-2">Get DOB Tokens</h3>
          <p>
            Don&apos;t miss the opportunity to participate in the DOB ecosystem! Visit our presale page to learn more about acquiring DOB tokens.
          </p>
          <div className="mt-4">
            <Link href="/docs/dob/presale" className="inline-flex items-center px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              Learn About the Presale
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 