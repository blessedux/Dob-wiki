import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:px-6 md:py-32">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">DOB Protocol Wiki</h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Comprehensive documentation and resources for understanding and participating in the DOB Protocol ecosystem.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-red-500 hover:bg-red-600">Documentación</Button>
          <Button variant="outline" className="border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7.5a2.5 2.5 0 0 0 2.5 2.5H8l2 2 2-2h2.5a2.5 2.5 0 0 0 2.5-2.5V9Z" />
              <path d="M8 14v-4" />
              <path d="M16 14v-4" />
              <path d="M8 10h.01" />
              <path d="M16 10h.01" />
            </svg>
            Discord
          </Button>
        </div>
      </div>
    </section>
  )
}
