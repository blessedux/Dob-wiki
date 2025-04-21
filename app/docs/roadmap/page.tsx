import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"

export default function RoadmapPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { title: "Dobprotocol", href: "/docs" },
          { title: "Roadmap", href: "/docs/roadmap" },
        ]}
      />

      <Heading id="dobprotocol-roadmap" level={1}>
        Dobprotocol Roadmap
      </Heading>
      <p className="mb-8 text-lg text-muted-foreground">The development roadmap and future plans for DOB Protocol</p>

      <div className="space-y-12">
        <div>
          <Heading id="q2-2025" level={2}>
            Q2 2025
          </Heading>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-green-500"></div>
              <div>
                <h3 className="font-medium">Platform Launch</h3>
                <p className="text-muted-foreground">
                  Initial release of the DOB Protocol platform with core functionality.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-green-500"></div>
              <div>
                <h3 className="font-medium">Developer Documentation</h3>
                <p className="text-muted-foreground">Comprehensive documentation and guides for developers.</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Heading id="q3-2025" level={2}>
            Q3 2025
          </Heading>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-yellow-500"></div>
              <div>
                <h3 className="font-medium">DOBI Integration Tools</h3>
                <p className="text-muted-foreground">Release of tools for easier integration with the DOB Interface.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-yellow-500"></div>
              <div>
                <h3 className="font-medium">Agent Marketplace</h3>
                <p className="text-muted-foreground">Launch of a marketplace for AI-driven agents.</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Heading id="q4-2025" level={2}>
            Q4 2025
          </Heading>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-gray-500"></div>
              <div>
                <h3 className="font-medium">Cross-Chain Support</h3>
                <p className="text-muted-foreground">Expansion to multiple blockchain networks.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-gray-500"></div>
              <div>
                <h3 className="font-medium">Advanced Analytics</h3>
                <p className="text-muted-foreground">Enhanced analytics and reporting features.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
