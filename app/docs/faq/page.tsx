import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import Image from "next/image"

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { title: "Docs", href: "/docs" },
          { title: "FAQ", href: "/docs/faq" }
        ]}
      />
      
      <Heading level={1}>Frequently Asked Questions</Heading>
      
      <div className="prose max-w-none">
        <Heading level={2}>What is Dobprotocol and how does it work?</Heading>
        <p>
          Dobprotocol is an asset distribution protocol, designed specifically for the distribution of tokens from Real World Assets (RWA) projects.
        </p>
        <p>
          It offers a set of free software tools, accessible to all, that facilitates the distribution of these assets in the field of tokenization.
        </p>
        <p>
          Thanks to its on-chain approach, it enables distribution in a trustless manner, i.e. without the need to rely on intermediaries. Dobprotocol thus solves the problem of trust through a new mechanism that guarantees transparency and security in transactions.
        </p>

        <Heading level={2}>Which blockchains does Dobprotocol support?</Heading>
        <p>
          Dobprotocol is designed as a multichain platform and is currently compatible with CELO, Polygon, BASE, AVAX and VARA. Dobprotocol allows projects to choose the blockchain that best suits their needs.
        </p>

        <Heading level={2}>How are assets distributed on Dobprotocol?</Heading>
        <p>
          In Dobprotocol, you can create on-chain distribution rules that determine how assets are distributed. One option is "Treasury", which is designed for private distribution among stakeholders and is simpler than the Multisig Wallets model.
        </p>
        <p>
          This adds a layer of transparency, as anyone can see the distribution process, providing a kind of transparent tokenomics.
        </p>
        <p>
          Another model is Airdrop, which is public and allows anyone to join. In this case, any ERC-20 token can be added and distributed among multiple users.
        </p>
        <p>
          In addition, the RWA model allows the distribution of profits or benefits derived from an asset, such as intellectual property, real estate, among others.
        </p>

        <Heading level={2}>Dobprotocol Distribution Pools: What are they and how do they work?</Heading>
        <p>
          Distribution Pools are smart contracts that allow users to establish on-chain rules for the distribution of assets among token holders. When a user joins a pool, he acquires a token representing his ownership percentage, becoming eligible for distributions.
        </p>
        <p>
          These tokens can be transferred between different portfolios. The system automatically and autonomously identifies eligible holders for profit distribution, simplifying the entire asset management and distribution process.
        </p>

        <Heading level={2}>What kind of projects or activities are suitable for using Dobprotocol?</Heading>
        <p>
          Dobprotocol is ideal for Real World Assets (RWAs) related projects, including real estate ventures, Decentralized Physical Infrastructure Networks (DePin), Revenue Generating Devices (such as electric chargers), Internet of Things (IoT) projects, blockchain project airdrops, Decentralized Autonomous Organizations (DAOs) and hackathon reward distributions.
        </p>

        <Heading level={3}>How do I register on Dobprotocol?</Heading>
        <p>
          Currently, users can register with Dobprotocol using the MetaMask multi-chain wallet. In the future, additional registration options are planned, including the Rainbow wallet. Web2 authentication systems (such as Google) will also be integrated into the MVP2 version, and integration with Stripe Crypto for credit card transactions. These future options will expand the accessibility of the platform.
        </p>

        <Heading level={2}>Is it difficult to use Dobprotocol?</Heading>
        <p>
          Dobprotocol is designed with ease of use in mind. It is easy to use for standard Web3 users, as it features a friendly user interface, and offers help messages that guide users through all the protocol processes.
        </p>

        <div className="my-8 py-4 bg-gray-800 text-center text-gray-400 rounded-lg">
          [Matrix-style hacker atmosphere image]
        </div>

        <Heading level={2}>How does Dobprotocol deal with the problem of bots in the Distribution Pools?</Heading>
        <p>
          Dobprotocol deals with the problem of bots through integration with Gitcoin Passport and the implementation of payment pools. These measures help ensure that distributions are fair and reach legitimate participants, improving the overall integrity of the system and protecting users&apos; interests.
        </p>

        <Heading level={4}>What is DOBI, and how does it work?</Heading>
        <p>
          DOBI is an advanced AI agent integrated into the Dobprotocol ecosystem. Its primary function is to validate and ensure the integrity of data from Real-World Assets (RWAs). By leveraging advanced algorithms, DOBI fosters transparency and trust, making autonomous asset investments more secure and reliable for investors.
        </p>

        <Heading level={2}>What are the key features of DOBI?</Heading>
        <ul>
          <li>Data Validation: Ensures transparency by verifying the accuracy and reliability of RWA data.</li>
          <li>Profit Distribution: Generates rewards for validating transactions, which are distributed to $DOBI token holders.</li>
          <li>Collateral Reduction: Builds trust through validations, enabling businesses to reduce the collateral needed for investments.</li>
        </ul>

        <Heading level={2}>What is Virtuals.fun and how is it related to DOBI?</Heading>
        <p>
          DOBI achieved a significant milestone by successfully integrating into Virtuals.fun within 24 hours. This rapid deployment demonstrates its innovative capabilities and sets a benchmark for future integrations in blockchain ecosystems.
        </p>

        <Heading level={2}>Dobprotocol vs. traditional asset distribution systems</Heading>
        <p>
          Dobprotocol offers several key advantages over traditional systems. It operates in a decentralized model, reducing single points of failure. It provides accurate tracking of distribution quantities, improving accountability. Unlike traditional systems, Dobprotocol allows users to program distribution systems with a variety of rules and mechanisms.
        </p>

        <div className="my-8 py-4 bg-gray-800 text-center text-gray-400 rounded-lg">
          [Doberman pinscher image]
        </div>

        <Heading level={2}>What are the differences between Distribution Pools and Liquidity Pools?</Heading>
        <p>
          Distribution Pools focus on distributing profits and assets among stakeholders, while Liquidity Pools aim to create a market for an asset to provide liquidity. This distinction is crucial to understand the purpose and operation of Dobprotocol compared to other DeFi platforms.
        </p>

        <Heading level={2}>What are Smart Contracts and how are they applied in Dobprotocol?</Heading>
        <p>
          Smart contracts are self-executing contracts with the terms directly written in code. In Dobprotocol, all distribution logic is programmed using open source smart contracts.
        </p>

        <Heading level={2}>Dobprotocol fees and commissions: What charges apply when using the platform?</Heading>
        <p>
          Currently Dobprotocol is free, you only have to pay the fees for each blockchain. In the future there will be a progressive scale of fees, the first one being 0.15% per traded volume.
        </p>

        <Heading level={2}>What does it mean for Dobprotocol to be open-source?</Heading>
        <p>
          The open source nature of Dobprotocol aligns with its mission to democratize access to asset sharing tools and reduce inequality.
        </p>
        <p>
          All tools developed by Dobprotocol will be freely available, and anyone will be able to download, use and build upon the code and on-chain tools.
        </p>
        <p>
          The goal is to create an ecosystem of decentralized asset sharing tools across multiple blockchains, fostering innovation and collaboration in the digital asset management space.
        </p>

        <Heading level={2}>Environmental concerns: Is blockchain&apos;s energy consumption harmful to the environment?</Heading>
        <p>
          Dobprotocol prioritizes environmental sustainability by using Proof of Stake (PoS) blockchains, which consume significantly less energy than Proof of Work (PoW) systems such as Bitcoin. It also works with carbon negative blockchains such as CELO and Polygon. By choosing green blockchain solutions, Dobprotocol demonstrates its commitment to sustainable technological advancement.
        </p>
      </div>
    </div>
  )
}
