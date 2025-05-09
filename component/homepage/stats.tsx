import { Users, CheckCircle, Award } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      value: "5+",
      label: "Years of Experience",
      description: "Delivering technology solutions since 2019",
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: "12+",
      label: "Completed Projects",
      description: "Successful implementations across industries",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      value: "30+",
      label: "Happy Clients",
      description: "Businesses transformed through technology",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <section className="relative bg-slate-900 py-16 text-white">
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
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 0 0 L 0 8 L 8 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 inline-flex rounded-lg bg-white/10 p-2 text-blue-300">{stat.icon}</div>
                <div className="mb-1 text-4xl font-bold">{stat.value}</div>
                <div className="mb-2 text-lg font-medium text-blue-100">{stat.label}</div>
                <p className="text-sm text-slate-300">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="mb-4 text-2xl font-bold">Ready to transform your business?</h3>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
