import { CheckCircle, Database, FileText, Lock, BarChart, RefreshCw } from "lucide-react"

export default function ProjectFeatures({ project }: { project: any }) {
  // Map features to icons for visual representation
  const featureIcons = [
    { feature: project.features[0], icon: <RefreshCw className="h-6 w-6" /> },
    { feature: project.features[1], icon: <FileText className="h-6 w-6" /> },
    { feature: project.features[2], icon: <Database className="h-6 w-6" /> },
    { feature: project.features[3], icon: <Lock className="h-6 w-6" /> },
    { feature: project.features[4], icon: <BarChart className="h-6 w-6" /> },
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
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Key Features
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Functionality
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Our pharmacy management system includes a robust set of features designed to streamline operations and
            enhance patient care.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featureIcons.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">{item.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.feature.split(":")[0] || item.feature.substring(0, 30)}
                </h3>
                <p className="text-slate-600">{item.feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Additional Features</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Multi-location inventory management",
                "Barcode scanning for quick product lookup",
                "Automated expiry date tracking",
                "Customizable reporting tools",
                "Mobile app for on-the-go access",
                "Integration with major suppliers",
                "Patient medication history tracking",
                "Prescription refill reminders",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
