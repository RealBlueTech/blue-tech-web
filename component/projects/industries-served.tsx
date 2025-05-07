import { Building2, Stethoscope, ShoppingBag, GraduationCap, Factory, Truck, Landmark, Leaf } from "lucide-react"
import Link from "next/link"

export default function IndustriesServed() {
  const industries = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      count: 15,
      link: "#healthcare",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Finance",
      count: 12,
      link: "#finance",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Retail",
      count: 18,
      link: "#retail",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      count: 10,
      link: "#education",
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Manufacturing",
      count: 8,
      link: "#manufacturing",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics",
      count: 6,
      link: "#logistics",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Real Estate",
      count: 5,
      link: "#real-estate",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Non-Profit",
      count: 7,
      link: "#non-profit",
    },
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
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
            Industries
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Industries We Serve</h2>
          <p className="mb-12 text-lg text-slate-600">
            We've worked with clients across a wide range of industries, developing deep expertise in their unique
            challenges and opportunities.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="group rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-600">{industry.count} Projects</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
