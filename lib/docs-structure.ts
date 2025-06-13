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
import React from 'react';

interface DocItem {
  slug: string;
  label: string;
  icon: React.ReactElement;
}

interface DocSection {
  category: string | null;
  label: string;
  icon: React.ReactElement;
  items: DocItem[];
}

export const docsStructure: DocSection[] = [
  {
    category: "dobprotocol",
    label: "Dobprotocol",
    icon: React.createElement(Globe, { className: "h-5 w-5" }),
    items: [
      { slug: "platform", label: "Dobprotocol Platform", icon: React.createElement(Globe, { className: "h-4 w-4" }) },
      { slug: "faq", label: "FAQ", icon: React.createElement(FileQuestion, { className: "h-4 w-4" }) },
      { slug: "roadmap", label: "Dobprotocol Roadmap", icon: React.createElement(RouteIcon, { className: "h-4 w-4" }) },
      { slug: "team", label: "Dobprotocol Team", icon: React.createElement(Users, { className: "h-4 w-4" }) },
      { slug: "pitch-deck", label: "Dobprotocol Pitch Deck", icon: React.createElement(Presentation, { className: "h-4 w-4" }) },
      { slug: "partnerships", label: "Dobprotocol x A0x Partnership", icon: React.createElement(Handshake, { className: "h-4 w-4" }) }
    ]
  },
  {
    category: "dobi",
    label: "$DOBI",
    icon: React.createElement(Wallet, { className: "h-5 w-5" }),
    items: [
      { slug: "dobi", label: "DOBI: The AI-Powered Token", icon: React.createElement(Bot, { className: "h-4 w-4" }) },
      { slug: "ai-agent", label: "DOBI - AI Agent", icon: React.createElement(Bot, { className: "h-4 w-4" }) },
      { slug: "dashboard", label: "DOBI Dashboard", icon: React.createElement(LayoutDashboard, { className: "h-4 w-4" }) },
      { slug: "stake", label: "Buy and Stake DOBI", icon: React.createElement(ShoppingCart, { className: "h-4 w-4" }) },
      { slug: "vault", label: "DOBI Vault", icon: React.createElement(Vault, { className: "h-4 w-4" }) },
      { slug: "ehive", label: "DOBI & EHive", icon: React.createElement(Sparkles, { className: "h-4 w-4" }) }
    ]
  },
  {
    category: "dob",
    label: "$DOB",
    icon: React.createElement(Diamond, { className: "h-5 w-5" }),
    items: [
      { slug: "dob", label: "DOB Token Presale", icon: React.createElement(BadgePercent, { className: "h-4 w-4" }) },
      { slug: "tokenomics", label: "DOB Tokenomics & Roadmap", icon: React.createElement(BarChart2, { className: "h-4 w-4" }) }
    ]
  },
  {
    category: "media",
    label: "Media",
    icon: React.createElement(MonitorPlay, { className: "h-5 w-5" }),
    items: [
      { slug: "latam", label: "Digital Culture in LatAm", icon: React.createElement(Globe, { className: "h-4 w-4" }) },
      { slug: "cnn", label: "Dobprotocol on CNN Radio", icon: React.createElement(Radio, { className: "h-4 w-4" }) },
      { slug: "first-ai", label: "DOBI: First AI Token in LatAm", icon: React.createElement(Trophy, { className: "h-4 w-4" }) },
      { slug: "ai-defi", label: "AI in DeFi", icon: React.createElement(PieChart, { className: "h-4 w-4" }) },
      { slug: "stablecoins", label: "Stablecoins and Financial Inclusion", icon: React.createElement(DollarSign, { className: "h-4 w-4" }) }
    ]
  },
  {
    category: "technology",
    label: "Technology",
    icon: React.createElement(Code, { className: "h-5 w-5" }),
    items: [
      { slug: "technology", label: "Technology behind Dobprotocol", icon: React.createElement(Cpu, { className: "h-4 w-4" }) },
      { slug: "vara", label: "Dobprotocol in Vara", icon: React.createElement(Cpu, { className: "h-4 w-4" }) }
    ]
  }
]; 