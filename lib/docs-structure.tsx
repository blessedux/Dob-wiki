import React from "react";
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
  Cpu
} from "lucide-react";

export const docsStructure = [
  // Top-level pages
  {
    category: null,
    label: "Dobprotocol Platform",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { slug: "platform", label: "Dobprotocol Platform", icon: <Globe className="h-4 w-4" /> },
      { slug: "faq", label: "FAQ", icon: <FileQuestion className="h-4 w-4" /> },
      { slug: "roadmap", label: "Dobprotocol Roadmap", icon: <RouteIcon className="h-4 w-4" /> },
      { slug: "team", label: "Dobprotocol Team", icon: <Users className="h-4 w-4" /> },
      { slug: "pitch-deck", label: "Dobprotocol Pitch Deck", icon: <Presentation className="h-4 w-4" /> },
      { slug: "partnerships", label: "Dobprotocol x A0x Partnership", icon: <Handshake className="h-4 w-4" /> }
    ]
  },
  // Category pages
  {
    category: "dobi",
    label: "$DOBI",
    icon: <Wallet className="h-5 w-5" />,
    items: [
      { slug: "dobi", label: "DOBI: The AI-Powered Token", icon: <Bot className="h-4 w-4" /> },
      { slug: "ai-agent", label: "DOBI - AI Agent", icon: <Bot className="h-4 w-4" /> },
      { slug: "dashboard", label: "DOBI Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
      { slug: "stake", label: "Buy and Stake DOBI", icon: <ShoppingCart className="h-4 w-4" /> },
      { slug: "vault", label: "DOBI Vault", icon: <Vault className="h-4 w-4" /> },
      { slug: "ehive", label: "DOBI & EHive", icon: <Sparkles className="h-4 w-4" /> }
    ]
  },
  {
    category: "dob",
    label: "$DOB",
    icon: <Diamond className="h-5 w-5" />,
    items: [
      { slug: "dob", label: "DOB Token Presale", icon: <BadgePercent className="h-4 w-4" /> },
      { slug: "tokenomics", label: "DOB Tokenomics & Roadmap", icon: <BarChart2 className="h-4 w-4" /> }
    ]
  },
  {
    category: "media",
    label: "Media",
    icon: <MonitorPlay className="h-5 w-5" />,
    items: [
      { slug: "digital-culture", label: "Digital Culture in LatAm", icon: <Globe className="h-4 w-4" /> },
      { slug: "cnn-radio", label: "Dobprotocol on CNN Radio", icon: <Radio className="h-4 w-4" /> },
      { slug: "dobi-latam", label: "DOBI: First AI Token in LatAm", icon: <Trophy className="h-4 w-4" /> },
      { slug: "ai-defi", label: "AI in DeFi", icon: <PieChart className="h-4 w-4" /> },
      { slug: "stablecoins", label: "Stablecoins and Financial Inclusion", icon: <DollarSign className="h-4 w-4" /> }
    ]
  },
  {
    category: "technology",
    label: "Technology",
    icon: <Code className="h-5 w-5" />,
    items: [
      { slug: "overview", label: "Technology behind Dobprotocol", icon: <Cpu className="h-4 w-4" /> },
      { slug: "vara", label: "Dobprotocol in Vara", icon: <Cpu className="h-4 w-4" /> }
    ]
  }
]; 