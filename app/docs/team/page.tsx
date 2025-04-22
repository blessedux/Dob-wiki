import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Alex brings over 10 years of blockchain experience and previously founded two successful fintech startups. With a background in computer science and finance, he leads Dobprotocol's vision and strategy.",
      image: "/placeholder-profile.png", // Placeholder image
    },
    {
      name: "Sofia Chen",
      role: "CTO",
      bio: "Sofia is a blockchain architect with expertise in Layer-2 solutions and smart contract development. She previously worked at leading blockchain companies and has contributed to multiple open-source projects.",
      image: "/placeholder-profile.png", // Placeholder image
    },
    {
      name: "Marcus Johnson",
      role: "Head of Research",
      bio: "With a PhD in Distributed Systems, Marcus leads our research initiatives focused on RWA tokenization and blockchain interoperability. He has published numerous papers on blockchain technology.",
      image: "/placeholder-profile.png", // Placeholder image
    },
    {
      name: "Leila Patel",
      role: "Product Lead",
      bio: "Leila oversees product development at Dobprotocol, bringing experience from her previous roles at major tech companies. She specializes in creating intuitive user experiences for complex blockchain applications.",
      image: "/placeholder-profile.png", // Placeholder image
    },
    {
      name: "David Kim",
      role: "Partnerships Director",
      bio: "David manages strategic partnerships and business development for Dobprotocol. His extensive network in both traditional finance and crypto helps bridge the gap between RWAs and blockchain technology.",
      image: "/placeholder-profile.png", // Placeholder image
    },
    {
      name: "Ana Morales",
      role: "Marketing Lead",
      bio: "Ana directs all marketing and community initiatives for Dobprotocol. Her background in both traditional marketing and crypto native strategies helps drive adoption and build user engagement.",
      image: "/placeholder-profile.png", // Placeholder image
    }
  ]

  return (
    <div className="container px-4 pb-12">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { title: "Docs", href: "/docs" },
            { title: "Dobprotocol Team", href: "/docs/team" }
          ]}
        />
        
        <Heading level={1}>Dobprotocol Team</Heading>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-300">
            Meet the passionate experts behind Dobprotocol. Our team combines deep expertise in blockchain technology, 
            finance, artificial intelligence, and business development to create innovative solutions for the future 
            of decentralized finance and real-world asset tokenization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-24 h-24 overflow-hidden rounded-full mb-4 bg-gray-800">
                  {/* Using a placeholder color div instead of actual image for now */}
                  <div className="absolute inset-0 bg-[#587CE9]/30" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-[#587CE9]">{member.role}</p>
              </div>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-20 h-20 overflow-hidden rounded-full mb-4 bg-gray-800">
                  <div className="absolute inset-0 bg-[#587CE9]/20" />
                </div>
                <h3 className="text-xl font-bold">Dr. Elena Müller</h3>
                <p className="text-sm text-[#587CE9]">Blockchain Economics Advisor</p>
              </div>
              <p className="text-gray-400 text-sm">
                Dr. Müller is a renowned economist specializing in tokenomics and blockchain economic models. She advises Dobprotocol on economic design and incentive structures.
              </p>
            </div>
            
            <div className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-20 h-20 overflow-hidden rounded-full mb-4 bg-gray-800">
                  <div className="absolute inset-0 bg-[#587CE9]/20" />
                </div>
                <h3 className="text-xl font-bold">James Wilson</h3>
                <p className="text-sm text-[#587CE9]">Industry Advisor</p>
              </div>
              <p className="text-gray-400 text-sm">
                James brings decades of experience from traditional finance and has helped multiple blockchain projects navigate regulatory landscapes and institutional adoption.
              </p>
            </div>
          </div>
        </div>
        
        <PageNavigation 
          prevPage={{ title: "DOB Protocol Roadmap", href: "/docs/roadmap" }}
          nextPage={{ title: "Pitch Deck", href: "/docs/pitch-deck" }}
        />
      </div>
    </div>
  )
} 