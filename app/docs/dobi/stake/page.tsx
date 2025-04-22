import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"
import Link from "next/link"

export default function DobiStakePage() {
  return (
    <div className="container px-4 pb-12">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { title: "Docs", href: "/docs" },
            { title: "DOBI", href: "/docs/dobi" },
            { title: "Buy and Stake", href: "/docs/dobi/stake" }
          ]}
        />
        
        <Heading level={1}>Buy and Stake DOBI</Heading>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-300">
            DOBI tokens can be acquired and staked to earn rewards and participate in the protocol's governance. 
            This guide walks you through the process of buying DOBI tokens and staking them to maximize your returns.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#587CE9]/10 border border-[#587CE9]/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Buy DOBI
            </h2>
            <p className="text-gray-300 mb-4">
              Purchase DOBI tokens through decentralized exchanges or directly from our platform. Multiple options are available
              to make the process simple and efficient.
            </p>
            <Link 
              href="#buy-dobi" 
              className="text-[#587CE9] hover:underline flex items-center"
            >
              Learn how to buy
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-[#587CE9]/10 border border-[#587CE9]/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Stake DOBI
            </h2>
            <p className="text-gray-300 mb-4">
              Stake your DOBI tokens to earn rewards, participate in governance, and support the protocol. Various 
              staking options are available for different goals and time horizons.
            </p>
            <Link 
              href="#stake-dobi" 
              className="text-[#587CE9] hover:underline flex items-center"
            >
              Learn how to stake
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Buy DOBI Section */}
        <div id="buy-dobi" className="pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Buy DOBI</h2>
          
          {/* Buy DOBI Mockup */}
          <div className="w-full border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center bg-black/20 mb-6">
            <div className="h-60 w-full max-w-4xl bg-gray-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-600"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-400">DOBI Purchase Interface</h3>
                <p className="text-gray-500 max-w-md">
                  Screenshot of the DOBI token purchase interface will be displayed here.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Option 1: Buy on Decentralized Exchanges</h3>
              <p className="text-gray-300 mb-4">
                DOBI tokens are available on several leading decentralized exchanges (DEXs) where you can trade them using other cryptocurrencies:
              </p>
              <ol className="space-y-4 text-gray-400 list-decimal pl-6">
                <li>
                  <span className="font-medium text-white">Connect your wallet</span>
                  <p>Connect your MetaMask, WalletConnect, or other Web3 wallet to one of these supported exchanges:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-6">
                    <li>Uniswap (Ethereum & Base)</li>
                    <li>PancakeSwap (BNB Chain)</li>
                    <li>SushiSwap (Arbitrum)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium text-white">Swap for DOBI</span>
                  <p>Use ETH, USDT, USDC, or other supported tokens to swap for DOBI. Always verify the token contract address to ensure you're buying authentic DOBI tokens.</p>
                </li>
                <li>
                  <span className="font-medium text-white">Confirm transaction</span>
                  <p>Review the details, adjust slippage if needed, and confirm the transaction in your wallet.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Option 2: Buy Directly on DOB Protocol</h3>
              <p className="text-gray-300 mb-4">
                You can purchase DOBI tokens directly through the DOB Protocol platform for a more streamlined experience:
              </p>
              <ol className="space-y-4 text-gray-400 list-decimal pl-6">
                <li>
                  <span className="font-medium text-white">Visit the DOB Protocol app</span>
                  <p>Go to <Link href="#" className="text-[#587CE9] hover:underline">app.dobprotocol.com</Link> and connect your wallet</p>
                </li>
                <li>
                  <span className="font-medium text-white">Navigate to Buy DOBI</span>
                  <p>Select the "Buy DOBI" option from the main menu</p>
                </li>
                <li>
                  <span className="font-medium text-white">Choose payment method</span>
                  <p>Select your preferred payment method (crypto or credit card where available)</p>
                </li>
                <li>
                  <span className="font-medium text-white">Complete the purchase</span>
                  <p>Enter the amount of DOBI you wish to buy, review the transaction details, and confirm</p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Stake DOBI Section */}
        <div id="stake-dobi" className="pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Staking Options</h2>
          
          <p className="text-gray-300 mb-6">
            Staking your DOBI tokens allows you to earn rewards while supporting the protocol. Different staking options
            are available based on your preferences and goals:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[#587CE9]">Flexible Staking</h3>
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">5-10% APY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Stake your DOBI with no lock-up period. Withdraw anytime with maximum flexibility, but with lower reward rates.
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6 mb-4">
                <li>No minimum staking period</li>
                <li>Withdraw anytime without penalties</li>
                <li>Daily reward distribution</li>
                <li>Lower APY compared to locked staking</li>
              </ul>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[#587CE9]">Locked Staking</h3>
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">15-25% APY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Lock your DOBI for a fixed period to earn higher rewards. Available in various durations.
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6 mb-4">
                <li>Lock periods: 30, 90, 180, or 365 days</li>
                <li>Higher APY for longer lock periods</li>
                <li>Early withdrawal subject to penalties</li>
                <li>Weekly reward distribution</li>
              </ul>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[#587CE9]">Liquidity Provision</h3>
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">20-30% APY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Provide liquidity with DOBI pairs on supported DEXs and stake the LP tokens for dual rewards.
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6 mb-4">
                <li>Earn trading fees from DEX</li>
                <li>Additional DOBI rewards for LP staking</li>
                <li>Available pairs: DOBI-ETH, DOBI-USDC</li>
                <li>Impermanent loss risk applies</li>
              </ul>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[#587CE9]">Governance Staking</h3>
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">10-15% APY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Stake DOBI to participate in protocol governance while earning rewards.
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6 mb-4">
                <li>Voting rights on protocol proposals</li>
                <li>Minimum 100 DOBI required</li>
                <li>3-day cooldown for unstaking</li>
                <li>Governance incentives in addition to APY</li>
              </ul>
            </div>
          </div>
          
          {/* Staking Guide */}
          <h3 className="text-xl font-bold text-white mb-4">How to Stake DOBI</h3>
          
          {/* Staking Interface Mockup */}
          <div className="w-full border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center bg-black/20 mb-6">
            <div className="h-60 w-full max-w-4xl bg-gray-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-600"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-400">DOBI Staking Interface</h3>
                <p className="text-gray-500 max-w-md">
                  Screenshot of the DOBI staking interface will be displayed here.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 border border-gray-800 rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">1</span>
                  Access the Staking Dashboard
                </h4>
                <p className="text-gray-300 mt-3 pl-11">
                  Visit the DOBI staking dashboard at <Link href="#" className="text-[#587CE9] hover:underline">app.dobprotocol.com/stake</Link> and connect your wallet.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">2</span>
                  Choose a Staking Option
                </h4>
                <p className="text-gray-300 mt-3 pl-11">
                  Select your preferred staking option from the available choices based on your goals.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">3</span>
                  Enter Staking Amount
                </h4>
                <p className="text-gray-300 mt-3 pl-11">
                  Enter the amount of DOBI you wish to stake. You can use the "Max" button to stake all available tokens.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">4</span>
                  Approve Token Spending
                </h4>
                <p className="text-gray-300 mt-3 pl-11">
                  For your first stake, you'll need to approve the smart contract to use your DOBI tokens. This is a one-time approval.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">5</span>
                  Confirm Staking
                </h4>
                <p className="text-gray-300 mt-3 pl-11">
                  Review the details of your stake, including estimated rewards, and confirm the transaction through your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards and Claiming */}
        <div className="pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Managing Your Staked DOBI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#587CE9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Track Your Rewards</h3>
              <p className="text-gray-400 text-center">
                Monitor your accumulated rewards in real-time through the staking dashboard. View your APY, earned tokens, and projected earnings.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#587CE9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Claim Rewards</h3>
              <p className="text-gray-400 text-center">
                Claim your earned rewards anytime with a simple click. Choose to withdraw them to your wallet or compound them back into your stake.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#587CE9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Tax Reporting</h3>
              <p className="text-gray-400 text-center">
                Access detailed transaction history and staking reports to help with your tax filings and record keeping.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Important Considerations</h2>
          <ul className="space-y-2 text-gray-400 list-disc pl-6">
            <li>Always ensure you're interacting with official DOB Protocol smart contracts</li>
            <li>Keep enough gas tokens (ETH/BNB/etc.) in your wallet for transactions</li>
            <li>Staking rewards may vary based on protocol performance and token economics</li>
            <li>For locked staking, understand the early withdrawal penalties before committing</li>
            <li>Consider gas fees when deciding how frequently to claim rewards</li>
          </ul>
        </div>
        
        <PageNavigation 
          prevPage={{ title: "DOBI Dashboard", href: "/docs/dobi/dashboard" }}
          nextPage={{ title: "DOBI Vault", href: "/docs/dobi/vault" }}
        />
      </div>
    </div>
  )
} 