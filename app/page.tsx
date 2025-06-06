import { SiteHeader } from "@/components/site-header"
import { LandingHero } from "@/components/landing-hero"
import { NavigationCards } from "@/components/navigation-cards"
import { SiteFooter } from "@/components/site-footer"
import { ClientBackgroundPaths } from "@/components/ui/client-background-paths"

// Add some debugging for the components that might be causing the issue
console.log("Rendering Home page");

export default function Home() {
  console.log("Home component rendering");
  
  return (
    <ClientBackgroundPaths className="min-h-screen">
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
    </ClientBackgroundPaths>
  )
}
