import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ProjectHero({ project }: { project: any }) {
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
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              {project.category}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{project.title}</h1>
            <p className="text-xl text-slate-600">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={project.image || "/placeholder.svg"}
                width={800}
                height={600}
                alt={project.title}
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
