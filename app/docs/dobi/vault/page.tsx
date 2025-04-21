import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"

export default function DobiVaultPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "$DOBI", href: "/docs/dobi" },
        { title: "Vault", href: "/docs/dobi/vault" }
      ]} />
      
      <Heading level={1}>DOBI Vault - Locked Staking</Heading>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-300">
          This guide explains how to use the Locked Staking smart contract deployed on the <strong>Base Network</strong>. There are two deployments:
        </p>

        <ul>
          <li><strong>Testnet (Base Sepolia)</strong>: For testing purposes.</li>
          <li><strong>Mainnet (Base)</strong>: For production use.</li>
        </ul>

        <Heading level={2}>Smart Contract Addresses</Heading>
        <ul>
          <li>
            <strong>Base Sepolia (Testnet)</strong>: <Link href="https://sepolia.basescan.org/address/0x11e7f472537e98afffb145dfc47039a6b2aedced" target="_blank" rel="noopener noreferrer" className="break-all">0x11E7f472537e98aFfFB145dFc47039a6b2aEDCeD</Link>
          </li>
          <li>
            <strong>Base (Mainnet)</strong>: <Link href="https://basescan.org/address/0xFe6f53967579EF624953ba9f47EEE20EC3a1639a" target="_blank" rel="noopener noreferrer" className="break-all">0xFe6f53967579EF624953ba9f47EEE20EC3a1639a</Link>
          </li>
        </ul>

        <p>
          Each smart contract has its own staking configuration and uses different tokens for staking and rewards.
        </p>

        <Heading level={2}>Staking Configurations</Heading>

        <Heading level={3}>1. Base Sepolia (Testnet)</Heading>
        <ul>
          <li>
            <strong>Stake Token</strong>: <Link href="https://sepolia.basescan.org/address/0xf7b794d81483c31994d572c296bbf42ef1d1ac47" target="_blank" rel="noopener noreferrer" className="break-all">0xF7b794d81483C31994d572C296BBf42eF1D1AC47</Link>
          </li>
          <li>
            <strong>Reward Token</strong>: <Link href="https://sepolia.basescan.org/address/0x205dc1a980cc1b3b160cc8d57ee95ffed7127c3f" target="_blank" rel="noopener noreferrer" className="break-all">0x205dc1A980cC1B3b160cC8D57ee95FFed7127C3f</Link>
          </li>
          <li>
            <strong>Deposit Period</strong>:
            <p className="ml-4 my-2"><em>December 24, 2024, 12:15 AM (GMT)</em> – <em>December 31, 2024, 12:15 AM (GMT)</em></p>
          </li>
          <li>
            <strong>Lock Period</strong>:
            <p className="ml-4 my-2"><em>December 31, 2024, 12:15 AM (GMT)</em> – <em>January 21, 2025, 12:15 AM (GMT)</em></p>
          </li>
          <li><strong>Reward Rate</strong>: 1%</li>
        </ul>

        <Heading level={3}>2. Base (Mainnet)</Heading>
        <ul>
          <li>
            <strong>Stake Token</strong>: <Link href="https://basescan.org/address/0x931ef8053e997b1bab68d1e900a061305c0ff4fb" target="_blank" rel="noopener noreferrer" className="break-all">0x931eF8053E997b1Bab68d1E900a061305c0Ff4FB</Link>
          </li>
          <li>
            <strong>Reward Token</strong>: <Link href="https://basescan.org/address/0xf20ce503bcd9721ea43ddd0485c66fa675bd3fc5" target="_blank" rel="noopener noreferrer" className="break-all">0xF20cE503BCd9721ea43Ddd0485C66fa675BD3FC5</Link>
          </li>
          <li>
            <strong>Deposit Period</strong>:
            <p className="ml-4 my-2"><em>December 24, 2024, 12:00 AM (GMT)</em> – <em>March 6, 2025, 12:00 AM (GMT)</em></p>
          </li>
          <li>
            <strong>Lock Period</strong>:
            <p className="ml-4 my-2"><em>March 6, 2025, 12:00 AM (GMT)</em> – <em>September 2, 2025, 12:00 AM (GMT)</em></p>
          </li>
          <li><strong>Reward Rate</strong>: 1%</li>
        </ul>

        <div className="p-4 bg-gray-800 rounded-lg my-6">
          <p className="text-gray-300 italic"><strong>Note</strong>: For the testnet deployment, you can request tokens from the development team.</p>
        </div>

        <Heading level={2}>How to Use Locked Staking</Heading>
        <p>
          You can interact with the smart contracts using a blockchain explorer (e.g., BaseScan), as all contracts are verified. Below is a step-by-step guide for staking and claiming tokens.
        </p>

        <Heading level={3}>1. Stake Tokens</Heading>
        <p>
          You can only stake tokens during the deposit period. This requires two transactions:
        </p>

        <Heading level={4}>Step 1: Approve Allowance</Heading>
        <p>
          Grant the smart contract permission to use your Stake Tokens by calling the <strong>approve()</strong> function of the Stake Token smart contract.
        </p>
        <ul>
          <li>
            <strong>BaseScan (Mainnet)</strong>: <Link href="https://basescan.org/address/0x931ef8053e997b1bab68d1e900a061305c0ff4fb#writeContract#F5" target="_blank" rel="noopener noreferrer">Approve Allowance URL</Link>
          </li>
        </ul>

        <p><strong>Example:</strong></p>
        <p>
          To approve exactly 1 token with 18 decimal places (common for ERC-20 tokens), you need to specify the amount as 1 followed by 18 zeros (i.e., 1000000000000000000) in the approve() function.
        </p>

        <div className="my-6 bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-gray-400">Approve Allowance Example Image</p>
        </div>

        <Heading level={4}>Step 2: Stake Tokens</Heading>
        <p>
          Call the <strong>stake()</strong> function of the Locked Staking smart contract to stake your tokens.
        </p>
        <ul>
          <li>
            <strong>BaseScan (Mainnet)</strong>: <Link href="https://basescan.org/address/0xfe6f53967579ef624953ba9f47eee20ec3a1639a#writeContract#F4" target="_blank" rel="noopener noreferrer">Stake function URL</Link>
          </li>
        </ul>

        <p><strong>Requirements:</strong></p>
        <ul>
          <li>The stake() amount must be less than or equal to the approved amount.</li>
          <li>The amount must also not exceed the maximum allowed stake amount, as defined in the contract&apos;s staking configuration.</li>
        </ul>

        <p><strong>Example:</strong></p>
        <p>
          Stake 1 token during the deposit period.
        </p>

        <div className="my-6 bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-gray-400">Stake Function Example Image</p>
        </div>

        <Heading level={3}>2. Claim Tokens</Heading>
        <p>
          You can only claim tokens after the <strong>lock period</strong> ends. Use the claim() function of the <strong>Locked Staking smart contract</strong> to retrieve your staked tokens and rewards. No additional inputs are required.
        </p>
        <ul>
          <li>
            <strong>BaseScan (Mainnet)</strong>: <Link href="https://basescan.org/address/0xfe6f53967579ef624953ba9f47eee20ec3a1639a#writeContract#F1" target="_blank" rel="noopener noreferrer">Claim Tokens URL</Link>
          </li>
        </ul>

        <p><strong>Example:</strong></p>
        <p>
          Call the <strong>claim()</strong> function once the lock period ends to receive both your staked tokens and reward tokens.
        </p>

        <div className="my-6 bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-gray-400">Claim Function Example Image</p>
        </div>

        <Heading level={3}>Additional Notes</Heading>
        <ul>
          <li>Always ensure you&apos;re interacting with the correct contract address.</li>
          <li>For the testnet version, you can contact the dev team to get faucet tokens for testing.</li>
          <li>Use BaseScan&apos;s &quot;Write Contract&quot; feature to interact with the functions.</li>
        </ul>

        <Heading level={2}>UI</Heading>
        <p>
          We are excited to announce the launch of our new interface designed to make the staking process seamless and user-friendly. With this new platform, users can now easily manage their staking activities through an intuitive and streamlined experience.
        </p>

        <p>
          This enhanced functionality is now live, providing users with a more accessible and efficient way to engage with staking. We invite you to explore the platform and enjoy its simplicity and improved usability!
        </p>

        <p>
          UI link: <Link href="https://dobi-stake.dobprotocol.com/" target="_blank" rel="noopener noreferrer">https://dobi-stake.dobprotocol.com/</Link>
        </p>

      </div>
    </div>
  )
} 