import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TechnologyPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "Technology", href: "/docs/technology" }
      ]} />
      
      <Heading level={1}>Technology</Heading>
      
      <p className="text-lg text-muted-foreground">
        Learn about the innovative technology powering the DOB Protocol ecosystem.
      </p>
      
      <div className="space-y-6 mt-8">
        <div className="space-y-3">
          <Heading level={2}>Blockchain Foundation</Heading>
          <p>
            The DOB Protocol is built on cutting-edge blockchain technology, providing 
            a secure, transparent, and efficient platform for decentralized operations.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Smart Contracts</Heading>
          <p>
            Our audited smart contracts ensure reliable execution of operations, with 
            automated processes that eliminate intermediaries and reduce costs.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Interoperability</Heading>
          <p>
            DOB Protocol emphasizes cross-chain compatibility, enabling seamless 
            integration with various blockchain ecosystems for enhanced flexibility.
          </p>
        </div>
      </div>
    </div>
  )
} 