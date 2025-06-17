"use client"

import Link from "next/link"
import { 
  Globe, 
  FileQuestion, 
  RouteIcon, 
  Users, 
  Presentation, 
  Handshake,
  Wallet,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  Vault,
  Sparkles,
  Diamond,
  BadgePercent,
  BarChart2,
  MonitorPlay,
  Radio,
  Trophy,
  PieChart,
  DollarSign,
  Code,
  Cpu,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface DocLink {
  title: string
  href: string
  icon: React.ReactNode
}

interface DocSection {
  title: string
  items: DocLink[]
  icon?: React.ReactNode
  defaultOpen?: boolean
}

const docs: DocSection[] = [
  {
    title: "Dobprotocol",
    icon: <Globe className="h-5 w-5" />,
    defaultOpen: true,
    items: [
      { title: "Dobprotocol Platform", href: "/docs/platform", icon: <Globe className="h-4 w-4" /> },
      { title: "FAQ", href: "/docs/faq", icon: <FileQuestion className="h-4 w-4" /> },
      { title: "Dobprotocol Roadmap", href: "/docs/roadmap", icon: <RouteIcon className="h-4 w-4" /> },
      { title: "Dobprotocol Team", href: "/docs/team", icon: <Users className="h-4 w-4" /> },
      { title: "Dobprotocol Pitch Deck", href: "/docs/pitch-deck", icon: <Presentation className="h-4 w-4" /> },
      { title: "Dobprotocol x A0x Partnership", href: "/docs/partnerships", icon: <Handshake className="h-4 w-4" /> }
    ]
  },
  {
    title: "$DOBI",
    icon: <Wallet className="h-5 w-5" />,
    defaultOpen: true,
    items: [
      { title: "DOBI: The AI-Powered Token", href: "/docs/dobi", icon: <Bot className="h-4 w-4" /> },
      { title: "DOBI - AI Agent", href: "/docs/dobi/ai-agent", icon: <Bot className="h-4 w-4" /> },
      { title: "DOBI Dashboard", href: "/docs/dobi/dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
      { title: "Buy and Stake DOBI", href: "/docs/dobi/stake", icon: <ShoppingCart className="h-4 w-4" /> },
      { title: "DOBI Vault", href: "/docs/dobi/vault", icon: <Vault className="h-4 w-4" /> },
      { title: "DOBI & EHive", href: "/docs/dobi/ehive", icon: <Sparkles className="h-4 w-4" /> }
    ]
  },
  {
    title: "$DOB",
    icon: <Diamond className="h-5 w-5" />,
    defaultOpen: true,
    items: [
      { title: "DOB Token Presale", href: "/docs/dob", icon: <BadgePercent className="h-4 w-4" /> },
      { title: "DOB Tokenomics & Roadmap", href: "/docs/dob/tokenomics", icon: <BarChart2 className="h-4 w-4" /> }
    ]
  },
  {
    title: "Media",
    icon: <MonitorPlay className="h-5 w-5" />,
    defaultOpen: true,
    items: [
      { title: "Digital Culture in LatAm", href: "/docs/media/latam", icon: <Globe className="h-4 w-4" /> },
      { title: "Dobprotocol on CNN Radio", href: "/docs/media/cnn", icon: <Radio className="h-4 w-4" /> },
      { title: "DOBI: First AI Token in LatAm", href: "/docs/media/first-ai", icon: <Trophy className="h-4 w-4" /> },
      { title: "AI in DeFi", href: "/docs/media/ai-defi", icon: <PieChart className="h-4 w-4" /> },
      { title: "Stablecoins and Financial Inclusion", href: "/docs/media/stablecoins", icon: <DollarSign className="h-4 w-4" /> }
    ]
  },
  {
    title: "Technology",
    icon: <Code className="h-5 w-5" />,
    defaultOpen: true,
    items: [
      { title: "Technology behind Dobprotocol", href: "/docs/technology", icon: <Cpu className="h-4 w-4" /> },
      { title: "Dobprotocol in Vara", href: "/docs/technology/vara", icon: <Cpu className="h-4 w-4" /> }
    ]
  }
];

export function DocsSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    docs.reduce((acc, section) => {
      acc[section.title] = section.defaultOpen || false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="flex flex-col space-y-2 bg-black text-white rounded-lg p-4">
      {docs.map((section) => (
        <div key={section.title} className="space-y-1">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {section.icon}
              <h4 className="font-medium text-sm">{section.title}</h4>
            </div>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform", 
                openSections[section.title] ? "transform rotate-180" : ""
              )} 
            />
          </button>

          {openSections[section.title] && (
            <div className="flex flex-col space-y-1 pl-10 py-1">
              {section.items.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="flex items-center space-x-3 py-2 px-3 text-gray-300 hover:text-white text-sm transition-colors rounded hover:bg-gray-800"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
