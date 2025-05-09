import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import type { Service } from "../../../data/service"

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Services
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              Our Services
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{service.title}</h1>
            <p className="text-xl text-slate-600">{service.longDescription}</p>

            <div className="mt-8">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={service.image || "/placeholder.svg"}
                width={800}
                height={600}
                alt={service.title}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
