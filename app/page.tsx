import { SiteHeader } from "@/components/site-header"
import { LandingHero } from "@/components/landing-hero"
import { NavigationCards } from "@/components/navigation-cards"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-screen-xl mx-auto px-8 md:px-10 lg:px-16">
          <LandingHero />
          <NavigationCards />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
