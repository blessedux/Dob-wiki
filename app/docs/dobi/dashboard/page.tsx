import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"
import Link from "next/link"

export default function DobiDashboardPage() {
  return (
    <div className="container px-4 pb-12">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { title: "Docs", href: "/docs" },
            { title: "DOBI", href: "/docs/dobi" },
            { title: "Dashboard", href: "/docs/dobi/dashboard" }
          ]}
        />
        
        <Heading level={1}>DOBI Dashboard</Heading>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-300">
            The DOBI Dashboard is your central command center for managing, monitoring, and interacting with the 
            DOBI AI Agent. This comprehensive interface provides real-time insights into your assets, staking rewards, 
            automated strategies, and the wider DOBI ecosystem.
          </p>
        </div>

        {/* Dashboard Overview with Mockup Image */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Dashboard Overview</h2>
          
          {/* Dashboard Image Placeholder */}
          <div className="w-full border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center bg-black/20 mb-6">
            <div className="h-80 w-full max-w-4xl bg-gray-800/50 rounded-lg flex items-center justify-center">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-400">DOBI Dashboard Preview</h3>
                <p className="text-gray-500 max-w-md">
                  Screenshot of the main DOBI Dashboard interface will be displayed here.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            The DOBI Dashboard is designed with both simplicity and power in mind. It offers an intuitive interface for users 
            of all experience levels while providing advanced features for those who want to maximize their interaction with 
            the DOBI AI Agent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Real-time Analytics</h3>
              <p className="text-gray-400">
                Monitor your DOBI holdings, staking rewards, and overall portfolio performance with comprehensive 
                real-time analytics and visualizations.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">AI Strategy Control</h3>
              <p className="text-gray-400">
                Customize and control how the DOBI AI Agent works for you with adjustable parameters and 
                strategy settings for optimal performance.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#587CE9]/50 transition-colors">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">One-Click Actions</h3>
              <p className="text-gray-400">
                Execute key operations like staking, claiming rewards, and deploying automated strategies with 
                simple, one-click actions from the dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Key Dashboard Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Key Dashboard Features</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Asset Overview</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">
                    The Asset Overview provides a comprehensive summary of your DOBI holdings, staked tokens, and earned rewards:
                  </p>
                  <ul className="space-y-2 text-gray-400 list-disc pl-6">
                    <li>Total DOBI balance across all wallets and platforms</li>
                    <li>Amount staked in different pools and vaults</li>
                    <li>Pending and claimed rewards</li>
                    <li>Historical performance metrics and charts</li>
                    <li>Current market value and token price</li>
                  </ul>
                </div>
                
                {/* Asset Overview Image Placeholder */}
                <div className="w-full md:w-80 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 mx-auto text-gray-600"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">Asset Overview Panel Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">AI Agent Control Panel</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">
                    The AI Agent Control Panel allows you to interact directly with the DOBI AI Agent and customize its behavior:
                  </p>
                  <ul className="space-y-2 text-gray-400 list-disc pl-6">
                    <li>Adjust AI strategy parameters and risk tolerance</li>
                    <li>Schedule automated actions based on market conditions</li>
                    <li>Set notification preferences for important events</li>
                    <li>View AI performance analytics and suggestions</li>
                    <li>Activate or pause specific AI functions</li>
                  </ul>
                </div>
                
                {/* AI Control Panel Image Placeholder */}
                <div className="w-full md:w-80 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 mx-auto text-gray-600"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">AI Control Panel Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Staking & Rewards</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">
                    The Staking & Rewards section provides comprehensive management of your staked assets and earned rewards:
                  </p>
                  <ul className="space-y-2 text-gray-400 list-disc pl-6">
                    <li>View all active staking positions across different pools</li>
                    <li>Track APY/APR rates and reward projections</li>
                    <li>Claim rewards with one-click functionality</li>
                    <li>Reinvest or compound rewards automatically</li>
                    <li>Access historical staking performance data</li>
                  </ul>
                </div>
                
                {/* Staking Panel Image Placeholder */}
                <div className="w-full md:w-80 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 mx-auto text-gray-600"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">Staking Panel Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Getting Started with the Dashboard</h2>
          
          <div className="bg-black/30 border border-gray-800 rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">1</span>
                  Connecting Your Wallet
                </h3>
                <p className="text-gray-300 mt-3 pl-11">
                  To access the DOBI Dashboard, you'll need to connect your wallet:
                </p>
                <ol className="space-y-2 text-gray-400 list-decimal pl-16 mt-2">
                  <li>Visit <Link href="#" className="text-[#587CE9] hover:underline">dashboard.dobprotocol.com</Link></li>
                  <li>Click on the "Connect Wallet" button in the top right corner</li>
                  <li>Select your preferred wallet (MetaMask, WalletConnect, etc.)</li>
                  <li>Approve the connection request in your wallet</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">2</span>
                  Navigating the Interface
                </h3>
                <p className="text-gray-300 mt-3 pl-11">
                  Familiarize yourself with the main sections of the dashboard:
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-16 mt-2">
                  <li><span className="text-white font-medium">Overview:</span> Summary of your assets and activity</li>
                  <li><span className="text-white font-medium">AI Agent:</span> Control and customize your AI settings</li>
                  <li><span className="text-white font-medium">Staking:</span> Manage your staking positions</li>
                  <li><span className="text-white font-medium">Analytics:</span> In-depth performance metrics</li>
                  <li><span className="text-white font-medium">Settings:</span> Personalize your dashboard experience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#587CE9] flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#587CE9]/20 text-[#587CE9] mr-3">3</span>
                  Activating the AI Agent
                </h3>
                <p className="text-gray-300 mt-3 pl-11">
                  Enable the DOBI AI Agent to start working for you:
                </p>
                <ol className="space-y-2 text-gray-400 list-decimal pl-16 mt-2">
                  <li>Navigate to the AI Agent section</li>
                  <li>Review the default settings and customize if desired</li>
                  <li>Toggle the "Activate AI Agent" switch to enable</li>
                  <li>Set your risk tolerance and strategy preferences</li>
                  <li>Confirm the activation in your wallet</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Advanced Dashboard Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">AI Strategy Builder</h3>
              <p className="text-gray-400">
                Create custom AI strategies by combining different parameters, triggers, and actions. The Strategy Builder 
                provides a visual interface to design automated behaviors for the DOBI AI Agent based on your specific goals.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Multi-Chain Management</h3>
              <p className="text-gray-400">
                Monitor and manage your DOBI assets across multiple blockchains from a single dashboard interface. Easily switch 
                between networks and get a consolidated view of your entire portfolio.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Performance Analytics</h3>
              <p className="text-gray-400">
                Access detailed analytics about your DOBI holdings, staking performance, and AI agent activities. View historical data, 
                track returns over time, and identify opportunities for optimization.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#587CE9] mb-2">Custom Notifications</h3>
              <p className="text-gray-400">
                Set up personalized notifications for important events like reward distributions, price movements, or AI agent actions. 
                Receive alerts via email, telegram, or directly in the dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-[#587CE9]/10 border border-[#587CE9]/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-300">
              We're continually improving the DOBI Dashboard with new features and enhancements. Upcoming additions include:
            </p>
            <ul className="space-y-2 text-gray-400 list-disc pl-6 mt-3">
              <li>Mobile app version for on-the-go management</li>
              <li>Advanced AI strategy templates and sharing</li>
              <li>Integration with additional DeFi protocols</li>
              <li>Enhanced visualization tools and reporting</li>
              <li>Community governance participation features</li>
            </ul>
          </div>
        </div>
        
        <PageNavigation 
          prevPage={{ title: "DOBI: The AI-Powered Token", href: "/docs/dobi" }}
          nextPage={{ title: "Buy and Stake DOBI", href: "/docs/dobi/stake" }}
        />
      </div>
    </div>
  )
} 