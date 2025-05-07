import { Globe, Smartphone, Cloud, Shield, Briefcase, Palette, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications tailored to your business needs.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating intuitive native and cross-platform mobile applications that engage users and drive results.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Cloud Computing",
      description:
        "Providing scalable, secure cloud solutions that optimize operations and reduce infrastructure costs.",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      title: "Cyber Security",
      description: "Implementing robust security measures to protect your valuable data and systems from threats.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "IT Consulting",
      description: "Offering strategic guidance to align your technology investments with your business objectives.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive, engaging user interfaces that enhance user satisfaction and conversion rates.",
      icon: <Palette className="h-6 w-6" />,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            What We Offer
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mb-10 text-lg text-slate-600">
            We deliver a full spectrum of technology services designed to help your business innovate, optimize, and
            grow in today's digital landscape.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>

              <div className="mt-4 flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-1 -right-1 h-12 w-12 overflow-hidden">
                <div className="absolute h-16 w-16 -rotate-45 transform bg-slate-50 group-hover:bg-blue-50 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
