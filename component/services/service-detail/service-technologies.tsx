import Image from "next/image"
import type { Service } from "../../../data/service"

export default function ServiceTechnologies({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Technologies
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Technologies We Use</h2>
          <p className="mb-12 text-lg text-slate-600">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 h-12 w-12">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    width={60}
                    height={60}
                    alt={tech.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-center text-sm font-medium text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
