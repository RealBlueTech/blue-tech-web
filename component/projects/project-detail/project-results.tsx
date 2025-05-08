import { TrendingUp, Clock, CheckCircle, Users } from "lucide-react"

export default function ProjectResults({ project }: { project: any }) {
  // Map results to icons for visual representation
  const resultIcons = [
    { result: project.results[0], icon: <Clock className="h-6 w-6" /> },
    { result: project.results[1], icon: <TrendingUp className="h-6 w-6" /> },
    { result: project.results[2], icon: <CheckCircle className="h-6 w-6" /> },
    { result: project.results[3], icon: <Users className="h-6 w-6" /> },
  ]

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
            Project Impact
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Measurable Results</h2>
          <p className="mb-12 text-lg text-slate-600">
            Our pharmacy management system delivered significant improvements in efficiency, accuracy, and patient
            satisfaction.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resultIcons.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-emerald-100 p-3 text-emerald-600">{item.icon}</div>
                <div className="mb-2 text-3xl font-bold text-slate-900">
                  {item.result.match(/\d+%/) ? item.result.match(/\d+%/)[0] : ""}
                </div>
                <p className="text-slate-600">{item.result}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-900 p-8 text-white">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Client Testimonial</h3>
                <div className="text-xl italic text-slate-300">
                  "The pharmacy management system has completely transformed our operations. We've seen dramatic
                  improvements in efficiency, accuracy, and patient satisfaction. The system is intuitive and our staff
                  adapted to it quickly."
                </div>
                <div className="mt-4">
                  <div className="font-semibold">Dr. Sarah Johnson</div>
                  <div className="text-slate-400">Chief Pharmacist, MediCare Pharmacy Chain</div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">Long-term Impact</h3>
                <p className="mb-4 text-slate-300">
                  Beyond the immediate operational improvements, our system has delivered significant long-term
                  benefits:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Reduced medication errors by 85%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Improved regulatory compliance across all locations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Enabled data-driven business decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Supported business growth and expansion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
