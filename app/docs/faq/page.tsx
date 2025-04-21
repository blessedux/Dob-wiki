import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function FAQPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { title: "Dobprotocol", href: "/docs" },
          { title: "FAQ", href: "/docs/faq" },
        ]}
      />

      <Heading id="dobprotocol-faq" level={1}>
        Dobprotocol FAQ
      </Heading>
      <p className="mb-8 text-lg text-muted-foreground">Frequently asked questions about DOB Protocol</p>

      <div className="space-y-6">
        <div>
          <Heading id="what-is-dob-protocol" level={2}>
            What is DOB Protocol?
          </Heading>
          <p className="text-muted-foreground">
            DOB Protocol is a decentralized platform that enables on-chain financing for autonomous machines, creating a
            financial backbone for DeFiN.
          </p>
        </div>

        <div>
          <Heading id="how-does-it-work" level={2}>
            How does it work?
          </Heading>
          <p className="text-muted-foreground">
            DOB Protocol uses AI-driven agents to automate validation, revenue distribution, and risk assessment,
            allowing tokenized revenues to be used as collateral for financing.
          </p>
        </div>

        <div>
          <Heading id="what-is-dobi" level={2}>
            What is DOBI?
          </Heading>
          <p className="text-muted-foreground">
            DOBI (DOB Interface) is the interface layer that allows developers to integrate with the DOB Protocol
            ecosystem.
          </p>
        </div>

        <div>
          <Heading id="who-can-use-dob" level={2}>
            Who can use DOB Protocol?
          </Heading>
          <p className="text-muted-foreground">
            DOB Protocol is designed for developers, businesses, and autonomous systems that need decentralized
            financial infrastructure for their operations.
          </p>
        </div>
      </div>
    </div>
  )
}
