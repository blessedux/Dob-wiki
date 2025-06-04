import { Breadcrumb } from "@/components/breadcrumb"
import { Heading } from "@/components/heading"
import { PageNavigation } from "@/components/page-navigation"
import Image from "next/image"
import Link from "next/link"

// SVG icon components for LinkedIn, X, and Warpcast
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
)
const WarpcastIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
)

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Oscar Castillo",
      role: "CEO",
      bio: "With over 10 years of experience in AI, blockchain, and scalable software development, Oscar has successfully led multiple projects, including Forcast.tech, which now operates autonomously under his frameworks.",
      image: "/images/Oscar_pic.webp",
      linkedin: "https://linkedin.com/in/opcastil",
      warpcast: "https://warpcast.com/opcastil",
      x: "https://x.com/opcastil"
    },
    {
      name: "Fernando Castillo",
      role: "CTO",
      bio: "Fernando Castillo is a founder, blockchain specialist, and PhD candidate with 4 years of experience developing decentralized and scalable solutions. Currently, he combines his role as a researcher with a focus on security and efficiency in Web3 projects, bringing strategic vision and technical skills to drive innovation in the blockchain sector.",
      image: "/images/fernando_pic.webp",
      linkedin: "https://linkedin.com/in/fscastil90120/",
      warpcast: "https://warpcast.com/fscastil",
      x: "https://x.com/fscastil"
    },
    {
      name: "Mirna Ampuero",
      role: "Business Developer & Blockchain Advocate",
      bio: "Mirna Ampuero is a Business Developer with a background in mechatronic engineering and extensive experience in the blockchain ecosystem. Her expertise spans sustainable technology solutions, strategic growth, and blockchain-driven innovation. Focused on impactful projects, Mirna combines technical insight with business acumen to drive growth and adoption in the Web3 space.",
      image: "/images/MIRNA_pic.webp",
      linkedin: "https://linkedin.com/in/mirnaampuero/",
      warpcast: "https://warpcast.com/mirna95",
      x: "https://x.com/mirna_ampuero__"
    },
    {
      name: "Andrés Peña Mellado",
      role: "Head of Marketing & Digital Strategy",
      bio: "With a background as a Web3 Journalist from the University of Santiago de Chile, Andres serves as Head of Marketing & Digital Strategy at Dobprotocol. Bringing expertise in digital marketing, blockchain, and strategic brand growth, Andres focuses on driving engagement and adoption within the Web3 ecosystem.",
      image: "/images/Foto_Andres.webp",
      linkedin: "https://linkedin.com/in/anemic",
      warpcast: "https://warpcast.com/anemic",
      x: "https://x.com/anemic"
    },
    {
      name: "Dani Dahm",
      role: "Head of User Experience and Visual Design",
      bio: "With a robust background in Visual Arts, Dani specializes in UI design, UX research, and comprehensive graphic design. At Dobprotocol, Dani leads interface design, conducts user testing, and creates graphic materials, including custom icons, illustrations, banners, and the project logo.",
      image: "/images/dani_dahm.webp",
      linkedin: "https://linkedin.com/in/dahm",
      warpcast: "https://warpcast.com/dahm",
      x: "https://x.com/dahm"
    },
    {
      name: "Cristobal Oyarzun",
      role: "Public Relations",
      bio: "With extensive expertise in Web3 advisory, content creation, personal branding, and entrepreneurship, Cristobal has founded and led tech startups in IT, blockchain, and Web3, also developing digital marketing businesses building innovative solutions from the ground up.",
      image: "/images/foto_simon.webp", // Placeholder, update if Cristobal's image is available
      linkedin: "https://linkedin.com/in/vivordie/",
      warpcast: null,
      x: "https://x.com/vivorteNFT"
    },
    {
      name: "Bruno Miranda",
      role: "Engineer",
      bio: "Bruno Miranda is an engineer at Dobprotocol.",
      image: "/images/foto_Joaquin.webp", // Placeholder, update if Bruno's image is available
      linkedin: "https://linkedin.com/in/2b260/",
      warpcast: null,
      x: null
    },
    {
      name: "Rubén Román",
      role: "Engineer",
      bio: "Rubén Román is an engineer at Dobprotocol.",
      image: "/images/foto_Joaquin.webp", // Placeholder, update if Rubén's image is available
      linkedin: "https://linkedin.com/in/ilasaunacio/",
      warpcast: null,
      x: "https://x.com/rubnacio"
    },
    {
      name: "Joaquín Farfan",
      role: "Engineer",
      bio: "Joaquín is a Full Stack Software Developer with over 6 years of experience building and scaling digital platforms across fintech, logistics, and decentralized systems.",
      image: "/images/foto_Joaquin.webp",
      linkedin: "https://linkedin.com/in/arfan/",
      warpcast: null,
      x: null
    },
    {
      name: "Simón Espinola",
      role: "CCO",
      bio: "Simón is a Commercial Engineer with over 10 years of experience leading business development and commercial strategy across Latin America.",
      image: "/images/foto_simon.webp",
      linkedin: "https://linkedin.com/in/78b86/",
      warpcast: null,
      x: null
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
            Meet the passionate experts behind Dobprotocol. Our team combines deep expertise in blockchain technology, finance, and business development to create innovative solutions for the future of decentralized finance and real-world asset tokenization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-24 h-24 overflow-hidden rounded-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-[#587CE9]">{member.role}</p>
              </div>
              <p className="text-gray-400 text-sm mb-2">{member.bio}</p>
              <div className="flex gap-3 justify-center">
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </Link>
                )}
                {member.warpcast && (
                  <Link href={member.warpcast} target="_blank" rel="noopener noreferrer" aria-label="Warpcast">
                    <WarpcastIcon />
                  </Link>
                )}
                {member.x && (
                  <Link href={member.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <XIcon />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <PageNavigation 
          prevPage={{ title: "DOB Protocol Roadmap", href: "/docs/roadmap" }}
          nextPage={{ title: "Pitch Deck", href: "/docs/pitch-deck" }}
        />
      </div>
    </div>
  )
} 