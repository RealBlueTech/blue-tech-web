import type { Service } from "../../../data/service"

export default function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Overview
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Our {service.title} Services
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Discover the benefits of partnering with us for your {service.title.toLowerCase()} needs.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Approach</h3>
              <p className="text-slate-600">
                We take a collaborative, client-centered approach to {service.title.toLowerCase()}. Our team works
                closely with you to understand your business goals, target audience, and specific requirements. This
                ensures that the solution we deliver not only meets your technical needs but also supports your broader
                business objectives.
              </p>
              <p className="mt-4 text-slate-600">
                Our development process is transparent, with regular updates and opportunities for feedback. We believe
                in building long-term partnerships with our clients, providing ongoing support and expertise beyond the
                initial project completion.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
