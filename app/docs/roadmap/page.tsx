import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "Roadmap", href: "/docs/roadmap" }
      ]} />
      
      <Heading level={1}>Dobprotocol Roadmap</Heading>
      
      <div className="prose max-w-none">
        <Heading level={3}>Q1 2025 Objectives</Heading>

        <Heading level={3}>1. Community and Visibility</Heading>
        <ul>
          <li>Build a core community of at least <strong>3,000 active members</strong> for the project.</li>
          <li>Increase project visibility through 3 <strong>monthly AMAs</strong> and collaborations with at least <strong>5 KOLs</strong> specializing in RWA and AI.</li>
          <li>Develop community engagement strategies, including <strong>airdrops</strong>, <strong>referral programs</strong>, and <strong>reward systems</strong> tied to key activities.</li>
        </ul>

        <Heading level={3}>2. Product Development</Heading>
        <ul>
          <li>Complete the development of <strong>DOBI&apos;s functionalities</strong>, focusing on interface enhancements and logic optimization for automated profit distribution to holders.</li>
          <li>Launch the Dobprotocol <strong>platform</strong> with key functionalities:
            <ul>
              <li>Creation of <strong>profit pools</strong>.</li>
              <li><strong>Collateralization</strong> of revenue-generating assets.</li>
            </ul>
          </li>
          <li>Integrate DOBI into Dobprotocol to strengthen the ecosystem and facilitate interaction between components.</li>
        </ul>

        <Heading level={3}>3. Funding and Ecosystem</Heading>
        <ul>
          <li>Launch the <strong>DOB token</strong> with a solid and transparent tokenomics plan.</li>
          <li>Execute a launch strategy for <strong>DOBI</strong>, maximizing reinvestment incentives through staking pools and rewards.</li>
          <li>Achieve market cap targets:
            <ul>
              <li>DOBI: <strong>$1M USD</strong>.</li>
              <li>DOB: <strong>$7M USD</strong>.</li>
            </ul>
          </li>
          <li>Secure <strong>$3M USD</strong> in total investments, focusing on strategic investors that add value to the ecosystem.</li>
          <li>Budget 250k marketing</li>
        </ul>

        <strong>Budget Allocation Breakdown:</strong>
        <ul>
          <li><strong>Marketing:</strong> $300,000 – To drive awareness, execute strategic campaigns, and foster community engagement through targeted efforts.</li>
          <li><strong>Development:</strong> $700,000 – For advancing platform functionalities, enhancing DOBProtocol, and scaling the DOBI agent&apos;s capabilities.</li>
          <li><strong>Community Building:</strong> $200,000 – Dedicated to growing and engaging a core community through rewards, airdrops, and incentivized participation programs.</li>
          <li><strong>Liquidity Provision for DOB:</strong> $900,000 – To ensure robust market liquidity and price stability for the DOB token.</li>
          <li><strong>DOBI Agent:</strong> $300,000 – For further development, integration, and scaling of the DOBI agent to enhance the ecosystem.</li>
          <li><strong>Global Expansion:</strong> $600,000 – To support international growth, including roadshows, strategic partnerships, and participation in global blockchain events.</li>
        </ul>

        <Heading level={3}>4. International Expansion</Heading>
        <ul>
          <li>Launch a global roadshow throughout 2025, presenting Dobprotocol in:
            <ul>
              <li><strong>North America</strong>: USA, Mexico.</li>
              <li><strong>Europe</strong>: Germany.</li>
              <li><strong>Asia</strong>: Singapore, Vietnam, South Korea, Thailand, China, Saudi Arabia.</li>
              <li><strong>Latin America</strong>: Colombia, Argentina.</li>
            </ul>
          </li>
          <li>Ensure participation in key tech and blockchain events in these regions.</li>
        </ul>

        <Heading level={3}>5. Team Growth</Heading>
        <ul>
          <li>Expand the team to <strong>12 full-time members</strong>, covering development, marketing, community building, and business development.</li>
        </ul>

        <Heading level={3}>6. Community Growth</Heading>
        <ul>
          <li>Holder targets:
            <ul>
              <li>DOBI: <strong>1,500 holders</strong>.</li>
              <li>DOB: <strong>3,500 holders</strong>.</li>
            </ul>
          </li>
        </ul>

        <Heading level={3}>7. Research</Heading>
        <p><strong>We will launch a comprehensive paper on the arXiv platform detailing the technology developed for</strong> Dobprotocol <strong>and DOBI.</strong></p>

        <p>This paper will serve as a technical and academic overview of the innovations, mechanisms, and architecture behind Dobprotocol and DOBI. It will highlight:</p>
        <ul>
          <li><strong>Core Technology:</strong> The infrastructure powering Dobprotocol, including the profit pool creation and collateralization mechanisms.</li>
          <li><strong>DOBI Agent:</strong> Detailed functionality, such as the distribution of profits to token holders and its integration into various blockchain ecosystems.</li>
          <li><strong>Smart Contract Design:</strong> An in-depth look at the tokenomics, governance models, and technical underpinnings.</li>
          <li><strong>Use Cases and Applications:</strong> Practical examples of how Dobprotocol and DOBI can drive value for users and expand the utility of real-world assets (RWA) and AI-based systems.</li>
          <li><strong>Future Outlook:</strong> The roadmap for the platform and its impact on decentralized ecosystems.</li>
        </ul>

        <p>This initiative aims to position Dobprotocol and DOBI as leaders in the blockchain space while attracting academic interest, partnerships, and technological validation.</p>

        <Heading level={3}>😎 What We&apos;ve Achieved So Far</Heading>

        <Heading level={3}>1. Project Development</Heading>
        <ul>
          <li><strong>4% of DOBI tokens</strong> were locked during pre-launch, prompting a buyback initiative to reach a lock-in target of <strong>30% of the total supply</strong> with DOB once functionality is complete.</li>
          <li>Hired <strong>2 full-time raiders</strong> to enhance the project as of Wednesday, 18th.</li>
          <li>Achieved <strong>60% progress</strong> in developing the DOBI agent, including:
            <ul>
              <li>Automated profit distribution functionality for DOBI holders.</li>
            </ul>
          </li>
          <li>Engaging with <strong>Virtuals</strong> to integrate DOBI into an incubation program and secure potential grants.</li>
          <li>Participating in grants from various protocols to expand Dobprotocol reach, including:
            <ul>
              <li>Base, Arbitrum, Mantle, Varanetwork, Virtuals.</li>
            </ul>
          </li>
          <li>Evaluating DOBI for blockchain utility projects and exploring integration with technologies such as <strong>Chainlink</strong>, <strong>IOTEX</strong>, <strong>SUI</strong>, and <strong>FET</strong>.</li>
        </ul>

        <Heading level={3}>2. Community</Heading>
        <ul>
          <li>Achieved <strong>organic growth</strong> of the Telegram community without paid services.</li>
          <li>Hosted multiple AMAs to educate and generate interest in the project.</li>
          <li>Implemented <strong>airdrops</strong> to incentivize participation in platform improvement surveys.</li>
        </ul>

        <Heading level={3}>3. Funding</Heading>
        <ul>
          <li>Secured an <strong>8-month runway</strong> for operational stability.</li>
          <li>Raised <strong>$80K USD</strong> from a private investor to fund the development team.</li>
          <li>Advanced discussions for a <strong>$2M USD fundraising round</strong> with angel investors for the DOB token.</li>
        </ul>

        <hr className="my-8 border-gray-700" />

        <Heading level={3}>Key Upcoming Dates</Heading>

        <Heading level={3}>December 23</Heading>
        <ul>
          <li>Present the <strong>DOB tokenomics</strong>, highlighting issuance mechanisms, utility, and value.</li>
          <li>Launch the <strong>staking pool</strong>, allowing users to lock DOBI and earn DOB as a reward.</li>
        </ul>

        <Heading level={3}>January 6</Heading>
        <ul>
          <li>Official launch of the <strong>DOBProtocol platform</strong>, featuring:
            <ul>
              <li><strong>Profit pool functionality</strong>.</li>
              <li><strong>Collateralization</strong> of revenue-generating assets.</li>
            </ul>
          </li>
          <li>Launch of <strong>Ehive</strong>, a platform managing <strong>60 electric charging stations</strong> with:
            <ul>
              <li>Initial offerings of guaranteed returns backed by collateral.</li>
            </ul>
          </li>
          <li>Start of the <strong>DOB token public sale</strong>, supported by targeted marketing strategies.</li>
        </ul>

        <hr className="my-8 border-gray-700" />

        <Heading level={3}>Launch Metrics Targets - January 2025</Heading>

        <Heading level={3}>Community</Heading>
        <ul>
          <li>Onboard at least <strong>1,000 new members</strong> on Telegram through recruitment campaigns.</li>
          <li>Collaborate with <strong>2 KOLs</strong> specializing in RWA/AI to generate interest.</li>
        </ul>

        <Heading level={3}>Financial</Heading>
        <ul>
          <li>Market cap targets:
            <ul>
              <li>DOBI: <strong>$3M USD</strong>.</li>
              <li>DOB: <strong>$5M USD</strong>.</li>
            </ul>
          </li>
        </ul>

        <Heading level={3}>🐶 Dobprotocol Marketing Plan</Heading>

        <Heading level={3}>Content Marketing</Heading>
        <ul>
          <li><strong>LinkedIn Articles</strong>: Focused on brand positioning.</li>
          <li><strong>Dobprotocol Blog</strong>: SEO-focused content.</li>
          <li><strong>Optional</strong>: Articles on Web3 platforms like Mirror.</li>
          <li><strong>Email Marketing</strong>: Newsletters with specialized content for users.</li>
        </ul>

        <Heading level={3}>Social Media Platforms</Heading>
        <ul>
          <li><strong>Channels</strong>: Instagram, Twitter, LinkedIn, YouTube, Telegram, and Discord.</li>
          <li><strong>Tools</strong>: Linktree, Mailchimp for email marketing, Streamlabs/StreamYard for live sessions.</li>
        </ul>

        <Heading level={3}>Content Calendar</Heading>
        <ul>
          <li><strong>Themes</strong>: Monthly campaigns and weekly posting schedules.</li>
        </ul>

        <Heading level={3}>Direct Communication Channels</Heading>
        <ul>
          <li>Telegram, Discord, Chatbot, Calendly.</li>
        </ul>

        <Heading level={3}>Performance Tracking</Heading>
        <ul>
          <li>Metrics: Reach, impressions, engagement, and conversion rates.</li>
        </ul>

        <Heading level={3}>Activities</Heading>
        <ul>
          <li>Innovation events, webinars, live sessions, talks, and distribution of POAPs and airdrops.</li>
        </ul>

        <Heading level={3}>Partnerships & Collaborations</Heading>
        <ul>
          <li>Target: Web2 and Web3 projects, communities, universities, investors (VCs, angel investors, family offices).</li>
        </ul>

        <Heading level={3}>Media Presence</Heading>
        <ul>
          <li><strong>Outlets</strong>: Traditional and crypto-specific media platforms.</li>
        </ul>

        <Heading level={3}>Additional Materials</Heading>
        <ul>
          <li>Onboarding PPT, pitch deck, one-pager, whitepaper (GitBook), media kit.</li>
        </ul>

        <Heading level={3}>Content Types</Heading>
        <ul>
          <li>Text posts, infographics, videos, branded content, and influencer collaborations.</li>
          <li><strong>Positioning Founders</strong>: Establish project leaders as active participants in social media, events, and media.</li>
        </ul>

        <Heading level={3}>Tools</Heading>
        <ul>
          <li>Metricool for analytics and Notion for management.</li>
        </ul>

        <Heading level={3}>Target Audience</Heading>
        <ul>
          <li>Global investors, blockchain/DeFi users, Web3 founders, potential Dobprotocol investors, and developers.</li>
        </ul>

        <Heading level={3}>Marketing Objectives</Heading>
        <ul>
          <li>Position Dobprotocol as a leader in the Web3 ecosystem and decentralized economies.</li>
          <li>Showcase its technology, use cases, and advantages over competitors.</li>
          <li>Educate users about blockchain and attract investors.</li>
        </ul>
      </div>
    </div>
  )
}
