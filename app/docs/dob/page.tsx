import { Heading } from "@/components/heading"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DOBPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb items={[
        { title: "Docs", href: "/docs" },
        { title: "DOB Token", href: "/docs/dob" }
      ]} />
      
      <Heading level={1}>DOB Token</Heading>
      
      <p className="text-lg text-muted-foreground">
        The DOB token is the primary governance and utility token of the DOB Protocol ecosystem.
      </p>
      
      <div className="space-y-6 mt-8">
        <div className="space-y-3">
          <Heading level={2}>Token Utility</Heading>
          <p>
            DOB tokens serve multiple purposes within the ecosystem, including governance 
            rights, staking rewards, and access to premium features.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Governance</Heading>
          <p>
            As a DOB token holder, you have voting rights on important protocol decisions, 
            including feature proposals and parameter adjustments.
          </p>
        </div>
        
        <div className="space-y-3">
          <Heading level={2}>Staking</Heading>
          <p>
            By staking DOB tokens, you can earn passive rewards while contributing to 
            the security and stability of the network.
          </p>
        </div>
      </div>
    </div>
  )
} 