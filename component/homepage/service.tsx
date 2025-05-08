"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Smartphone, Cloud, Shield, Database, Code } from "lucide-react"

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications tailored to your business needs.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Custom website development", "E-commerce solutions", "Progressive Web Apps", "CMS integration"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description:
        "Creating intuitive native and cross-platform mobile applications that engage users and drive results.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["iOS & Android apps", "Cross-platform development", "UI/UX design", "App maintenance & support"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Computing",
      description:
        "Providing scalable, secure cloud solutions that optimize operations and reduce infrastructure costs.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Cloud migration", "Infrastructure as a Service", "Platform as a Service", "Cloud security"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cyber Security",
      description: "Implementing robust security measures to protect your valuable data and systems from threats.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Security assessments", "Threat monitoring", "Compliance solutions", "Security training"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Transforming your raw data into actionable insights that drive better business decisions.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Business intelligence", "Data visualization", "Predictive analytics", "Big data solutions"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software",
      description: "Developing bespoke software solutions that address your unique business challenges and needs.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Enterprise applications", "Workflow automation", "Legacy system integration", "API development"],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Our Services
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            We deliver a full spectrum of technology services designed to help your business innovate, optimize, and
            grow in today's digital landscape.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Service tabs */}
            <div className="md:col-span-4">
              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex w-full items-start rounded-lg border p-4 text-left transition-all ${
                      activeService === index
                        ? "border-blue-100 bg-blue-50 shadow-sm"
                        : "border-slate-100 bg-white hover:border-blue-50 hover:bg-slate-50"
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div
                      className={`mr-4 rounded-lg p-2 ${
                        activeService === index ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${activeService === index ? "text-blue-600" : "text-slate-900"}`}>
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">{service.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeService}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">{services[activeService].title}</h3>
                  <p className="mb-4 text-slate-600">{services[activeService].description}</p>

                  <h4 className="mb-2 font-semibold text-slate-900">Key Features</h4>
                  <ul className="mb-6 space-y-2">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <svg
                          className="mr-2 h-5 w-5 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services#${services[activeService].title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more about {services[activeService].title.toLowerCase()}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={services[activeService].image || "/placeholder.svg"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={services[activeService].title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
