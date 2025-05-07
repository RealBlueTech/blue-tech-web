import { TrendingUp, Users, Clock, DollarSign } from "lucide-react"

export default function ResultsMetrics() {
  const metrics = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Growth",
      value: "35%",
      description: "Average revenue increase for our e-commerce clients",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Engagement",
      value: "42%",
      description: "Average increase in user engagement for our mobile apps",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Efficiency",
      value: "50%",
      description: "Average reduction in process time for our enterprise clients",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Savings",
      value: "28%",
      description: "Average cost reduction for our cloud migration projects",
    },
  ]

  return (
    <section className="relative bg-slate-900 py-20 text-white">
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
            <pattern id="results-grid" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 0 0 L 0 8 L 8 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Measurable Results</h2>
          <p className="mb-12 text-lg text-slate-300">
            We're proud of the tangible results we've delivered for our clients across various industries.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2 text-blue-300">{metric.icon}</div>
                <div className="mb-1 text-4xl font-bold">{metric.value}</div>
                <div className="mb-2 text-lg font-medium text-blue-100">{metric.title}</div>
                <p className="text-sm text-slate-300">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h3 className="mb-2 text-2xl font-bold">Client Satisfaction</h3>
                <p className="text-slate-300">
                  98% of our clients rate our services as excellent and would recommend us to others.
                </p>
              </div>
              <div className="text-5xl font-bold text-blue-300">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
