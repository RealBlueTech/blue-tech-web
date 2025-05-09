"use client"
import { ArrowRight } from "lucide-react"
import { getAllServices } from "../../data/service"
import { useEffect, useState } from "react"

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const fetchedServices = await getAllServices();
      setServices(fetchedServices);
    }

    fetchServices();
  }, []);

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
              <a
                href={`/service/${service.id}`}
                aria-hidden="true"
              >
              <div  className="mt-4 flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
              </a>

              {/* Decorative corner */}
              <div className="absolute -bottom-1 -right-1 h-12 w-12 overflow-hidden">
                <div className="absolute h-16 w-16 -rotate-45 transform bg-slate-50 group-hover:bg-blue-50 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`/services`}
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
