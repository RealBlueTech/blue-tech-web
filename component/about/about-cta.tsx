import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 0 0 L 0 8 L 8 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Let's discuss how our technology solutions can help your business innovate, optimize, and grow in today's
            digital landscape.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
