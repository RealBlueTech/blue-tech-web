import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Our Work
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Innovative Solutions for Real-World Challenges
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
            Explore our portfolio of successful projects that have helped businesses transform, innovate, and grow.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects-grid"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="Project showcase"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="Project showcase"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="Project showcase"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
