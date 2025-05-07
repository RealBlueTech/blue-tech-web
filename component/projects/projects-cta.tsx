import { ArrowRight } from "lucide-react"

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-slate-900 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Start Your Project?</h2>
              <p className="mb-6 text-slate-300">
                Let's discuss how we can help you achieve your business goals with our technology solutions.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold">280+</div>
                <p className="text-lg text-slate-300">Successful Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
