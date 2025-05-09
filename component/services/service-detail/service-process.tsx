import type { Service } from "../../../data/service"

export default function ServiceProcess({ service }: { service: Service }) {
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
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Our Process
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How We Deliver {service.title}
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Our proven process ensures successful outcomes for every {service.title.toLowerCase()} project.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-[28px] top-0 h-full w-1 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>

            {/* Process steps */}
            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center`}
                  >
                    {/* Step number */}
                    <div className="absolute left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white md:left-1/2 md:-ml-7">
                      <span className="text-sm font-bold">{step.step}</span>
                    </div>

                    {/* Step content */}
                    <div
                      className={`ml-20 w-full rounded-xl border border-slate-100 bg-white p-6 shadow-sm md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <h3 className="mb-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
