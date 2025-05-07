import Image from "next/image"
import { Target, Eye, CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://img.freepik.com/free-photo/business-handshake-world-map_23-2151966716.jpg?t=st=1746628016~exp=1746631616~hmac=f33ec64d25347f48ffab6d10bc254d196b3f777bfff7018ad57f4565edff3b75&w=826"
                width={800}
                height={600}
                alt="About our technology company"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent opacity-60"></div>
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-6 rounded-lg border border-slate-100 bg-white p-4 shadow-lg sm:p-6 md:bottom-8 md:right-8">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Years of Experience</p>
                  <p className="text-xl font-bold text-slate-900">15+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                Our Story
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg text-slate-600">
                We specialize in developing innovative technology solutions that help businesses streamline operations,
                enhance productivity, and achieve sustainable growth in an increasingly digital landscape.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex rounded-lg bg-emerald-100 p-2">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
                <p className="text-slate-600">
                  To deliver cutting-edge technology solutions that empower businesses to overcome challenges and
                  capitalize on new opportunities in the digital era.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex rounded-lg bg-blue-100 p-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
                <p className="text-slate-600">
                  To be the leading technology partner for forward-thinking businesses, known for innovation,
                  reliability, and exceptional client outcomes.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Why Choose Us</h3>
              <div className="space-y-2">
                {[
                  "Expert team with industry-specific knowledge",
                  "Tailored solutions for your unique business needs",
                  "Ongoing support and continuous improvement",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
