import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DobiAIAgentPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "$DOBI", href: "/docs/dobi" },
        { title: "AI Agent", href: "/docs/dobi/ai-agent" }
      ]} />
      
      <Heading level={1}>DOBI - AI Agent</Heading>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-300">
          DOBI is an innovative AI agent integrated within the Dobprotocol ecosystem. It is designed to enhance the management and validation of Real-World Assets (RWAs). By leveraging advanced algorithms, DOBI ensures data accuracy and reliability, fostering investor confidence in autonomous asset investments.
        </p>

        <p>
          A significant milestone for DOBI was its successful "red pill" in <a href="https://app.virtuals.io/virtuals/13315" target="_blank" rel="noopener noreferrer">Virtuals.fun</a>, achieved in under 24 hours. This rapid deployment showcases the project&apos;s innovative capabilities and sets a precedent for future integrations within the blockchain ecosystem. DOBI&apos;s potential extends beyond current functionalities. Future enhancements will include capabilities to handle unstructured data and images, further solidifying its role as a validator within the ecosystem.
        </p>

        <p>
          The development of these advanced features aims to revolutionize asset management by introducing Decentralized Autonomous Machines (DAMs), which will allow programmable profit flows under AI supervision.
        </p>

        <Heading level={2}>Core Purpose</Heading>
        <p>
          Dobi&apos;s main purpose is to validate off-chain data to be used as oracles to approve transactions in profit pools. Additionally, Dobi will have full access to the asset&apos;s wallet, enabling it to contract services such as preventive maintenance, upgrades, or other necessary actions to ensure the continuous operation of the autonomous asset.
        </p>

        <Heading level={2}>Key Features of DOBI</Heading>
        <ul>
          <li>
            <strong>Data Validation:</strong> DOBI verifies the integrity of data from RWAs, ensuring transparency and trustworthiness for investors. This validation process is critical for maintaining a secure investment environment.
          </li>
          <li>
            <strong>Profit Distribution:</strong> As DOBI validates transactions, it generates rewards that are distributed among $DOBI token holders. This mechanism not only incentivizes participation but also aligns the interests of all stakeholders.
          </li>
          <li>
            <strong>Collateral Reduction:</strong> Increased trust through DOBI&apos;s validations allows businesses to lower the collateral required for securing investments. This reduction makes it easier for investors to engage with autonomous assets.
          </li>
        </ul>

        <Heading level={2}>Join the transformation</Heading>
        <p>
          Engage with DOBI and experience a new standard in asset management. The integration of AI within Dobprotocol streamlines operations and enhances profitability and security for investors.
        </p>

        <p>
          Discover how DOBI can elevate your investment strategy and join this groundbreaking initiative in blockchain technology.
        </p>

        <Heading level={2}>Future Developments with DOBI</Heading>
        <p>
          The DOBI team is continuously working on expanding its capabilities. Future developments will focus on:
        </p>

        <ul>
          <li>Enhanced processing of unstructured data and images for more comprehensive validation</li>
          <li>Advanced pattern recognition for early detection of potential issues with RWAs</li>
          <li>Deeper integration with various blockchain networks to expand reach and applicability</li>
          <li>Improved AI decision-making algorithms for autonomous asset management</li>
          <li>Development of more sophisticated smart contract interactions</li>
        </ul>

        <Heading level={2}>Technical Implementation</Heading>
        <p>
          DOBI operates through a combination of:
        </p>

        <ul>
          <li>Trusted Execution Environments (TEEs) for secure data processing</li>
          <li>Machine learning algorithms trained on real-world IoT data</li>
          <li>Smart contract automation for profit distribution and governance</li>
          <li>Cryptographic validation mechanisms for data integrity</li>
        </ul>

        <p>
          This technical foundation ensures that DOBI can reliably validate data from autonomous assets while maintaining the highest standards of security and privacy.
        </p>
      </div>
    </div>
  )
} 