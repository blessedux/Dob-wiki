import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function ArchitecturePage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { title: "Technology", href: "/docs/technology" },
          { title: "Architecture", href: "/docs/technology/architecture" },
        ]}
      />

      <Heading id="architecture" level={1}>
        DOB Protocol Architecture
      </Heading>
      <p className="mb-8 text-lg text-muted-foreground">
        Technical overview of the DOB Protocol architecture and its components
      </p>

      <Heading id="system-overview" level={2}>
        System Overview
      </Heading>
      <p className="mb-6">
        The DOB Protocol architecture is designed to enable trustless business operations, revenue distribution, and
        financing for autonomous machines. It consists of several layers that work together to provide a comprehensive
        solution.
      </p>

      <Heading id="architecture-layers" level={2}>
        Architecture Layers
      </Heading>
      <div className="mb-6 space-y-4">
        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Core Layer</h3>
          <p className="text-muted-foreground">
            The foundation of the DOB Protocol, providing the basic infrastructure for trustless operations.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Agent Layer</h3>
          <p className="text-muted-foreground">
            AI-driven agents that automate validation, distribution, and risk assessment processes.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Interface Layer</h3>
          <p className="text-muted-foreground">
            DOBI and other interfaces that allow developers to interact with the DOB Protocol.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Application Layer</h3>
          <p className="text-muted-foreground">Applications and services built on top of the DOB Protocol.</p>
        </div>
      </div>

      <Heading id="agents" level={2}>
        Agents
      </Heading>
      <p className="mb-6">
        Agents are AI-driven entities that automate various processes within the DOB Protocol ecosystem. They play a
        crucial role in enabling trustless operations and efficient capital allocation.
      </p>
      <div className="mb-6 space-y-4">
        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Validation Agents</h3>
          <p className="text-muted-foreground">
            Verify business activities and ensure compliance with predefined rules.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Distribution Agents</h3>
          <p className="text-muted-foreground">
            Automate the distribution of revenues to stakeholders based on predefined rules.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Risk Assessment Agents</h3>
          <p className="text-muted-foreground">
            Evaluate risks associated with financing and collateralization of tokenized revenues.
          </p>
        </div>
      </div>
    </div>
  )
}
