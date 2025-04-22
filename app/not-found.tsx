import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md text-center px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-4 py-2 bg-[#587CE9] hover:bg-[#587CE9]/90 text-white rounded-md"
            >
              Go Home
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 border border-[#587CE9] text-[#587CE9] hover:bg-[#587CE9]/10 rounded-md"
            >
              Browse Documentation
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
} 