import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function DobOverviewPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { title: "$DOB", href: "/docs/dob" },
          { title: "Overview", href: "/docs/dob/overview" },
        ]}
      />

      <Heading id="dob-overview" level={1}>
        DOB Overview
      </Heading>
      <p className="mb-8 text-lg text-muted-foreground">
        Understanding the Decentralized Operational Backbone (DOB) and its functionality
      </p>

      <Heading id="what-is-dob" level={2}>
        What is DOB?
      </Heading>
      <p className="mb-6">
        DOB (Decentralized Operational Backbone) is the core infrastructure that enables trustless business operations
        and revenue distribution within the DOB Protocol ecosystem. It provides the foundation for decentralized
        financing and autonomous machine operations.
      </p>

      <Heading id="core-functionality" level={2}>
        Core Functionality
      </Heading>
      <div className="mb-6 space-y-4">
        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Trustless Operations</h3>
          <p className="text-muted-foreground">
            DOB enables trustless business operations through automated validation and verification processes.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Revenue Distribution</h3>
          <p className="text-muted-foreground">
            Automated and transparent distribution of revenues to stakeholders based on predefined rules.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Risk Assessment</h3>
          <p className="text-muted-foreground">
            AI-driven risk assessment for financing and collateralization of tokenized revenues.
          </p>
        </div>
      </div>

      <Heading id="technical-architecture" level={2}>
        Technical Architecture
      </Heading>
      <p className="mb-6">The DOB infrastructure consists of several key components:</p>
      <ul className="mb-6 list-disc pl-6">
        <li className="mb-2">Smart contracts for trustless operations and revenue distribution</li>
        <li className="mb-2">AI agents for validation, distribution, and risk assessment</li>
        <li className="mb-2">Tokenization mechanisms for representing revenues and assets</li>
        <li className="mb-2">Integration interfaces for connecting with external systems</li>
      </ul>
    </div>
  )
}
