import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function FeaturedProject() {
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
            Featured Project
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            E-Commerce Transformation
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            How we helped a traditional retailer increase online sales by 200% with a modern e-commerce platform.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="E-Commerce Platform"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">Retail</div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    E-Commerce
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                <p className="text-slate-600">
                  Our client, a traditional brick-and-mortar retailer with 50+ physical stores, was struggling to
                  compete in the growing online marketplace. Their existing website was outdated, difficult to navigate,
                  and not optimized for mobile devices.
                </p>

                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                <p className="text-slate-600">
                  We developed a comprehensive e-commerce platform with a focus on user experience, mobile
                  responsiveness, and seamless integration with their existing inventory management system.
                </p>

                <div className="space-y-2">
                  {[
                    "Custom-built e-commerce platform",
                    "Mobile-first responsive design",
                    "Integrated inventory management",
                    "Personalized product recommendations",
                    "Streamlined checkout process",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-slate-50 p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">200%</div>
                    <div className="text-sm text-slate-600">Increase in online sales</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">45%</div>
                    <div className="text-sm text-slate-600">Increase in mobile conversions</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">65%</div>
                    <div className="text-sm text-slate-600">Increase in average order value</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-slate-600">Reduction in cart abandonment</div>
                  </div>
                </div>
              </div>

              <a
                href="/projects/ecommerce-platform"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Read the full case study
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
