import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function DobiOverviewPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { title: "$DOBI", href: "/docs/dobi" },
          { title: "Overview", href: "/docs/dobi/overview" },
        ]}
      />

      <Heading id="dobi-overview" level={1}>
        DOBI Overview
      </Heading>
      <p className="mb-8 text-lg text-muted-foreground">
        Understanding the DOB Interface (DOBI) and its role in the ecosystem
      </p>

      <Heading id="what-is-dobi" level={2}>
        What is DOBI?
      </Heading>
      <p className="mb-6">
        DOBI (DOB Interface) is the interface layer that allows developers to integrate with the DOB Protocol ecosystem.
        It provides a standardized way to interact with the underlying infrastructure, making it easier to build
        applications on top of the DOB Protocol.
      </p>

      <Heading id="key-features" level={2}>
        Key Features
      </Heading>
      <div className="mb-6 space-y-4">
        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Standardized API</h3>
          <p className="text-muted-foreground">
            DOBI provides a consistent API for interacting with the DOB Protocol, regardless of the underlying
            implementation.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Extensible Architecture</h3>
          <p className="text-muted-foreground">
            The interface is designed to be extensible, allowing for new features and capabilities to be added over
            time.
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-2 text-lg font-medium">Developer Tools</h3>
          <p className="text-muted-foreground">
            DOBI includes a suite of developer tools to make integration easier, including SDKs, documentation, and
            examples.
          </p>
        </div>
      </div>

      <Heading id="use-cases" level={2}>
        Use Cases
      </Heading>
      <p className="mb-6">DOBI can be used in a variety of scenarios, including:</p>
      <ul className="mb-6 list-disc pl-6">
        <li className="mb-2">Building decentralized applications that leverage the DOB Protocol</li>
        <li className="mb-2">Integrating existing systems with the DOB ecosystem</li>
        <li className="mb-2">Creating custom agents that interact with the DOB Protocol</li>
      </ul>
    </div>
  )
}
