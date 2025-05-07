import { ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, goals, and challenges through in-depth consultations and research.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our design team creates intuitive, engaging user experiences and interfaces that align with your brand.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our engineers build your solution using the latest technologies and best practices for optimal performance.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "We rigorously test all aspects of your solution to ensure quality, security, and a seamless user experience.",
    },
    {
      number: "06",
      title: "Deployment",
      description:
        "We carefully launch your solution, ensuring a smooth transition and minimal disruption to your operations.",
    },
    {
      number: "07",
      title: "Support",
      description:
        "Our team provides ongoing support, maintenance, and optimization to ensure your solution continues to deliver value.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Our Approach
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Process</h2>
          <p className="mb-16 text-lg text-slate-600">
            We follow a proven, systematic approach to deliver successful outcomes for every project.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Process timeline line */}
          <div className="absolute left-[28px] top-0 h-full w-1 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>

          {/* Process steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center`}
                >
                  {/* Step number */}
                  <div className="absolute left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white md:left-1/2 md:-ml-7">
                    <span className="text-sm font-bold">{step.number}</span>
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

          <div className="mt-16 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Ready to get started?</h3>
                <p className="text-slate-600">
                  Contact us today to discuss your project and how our process can deliver results for your business.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
