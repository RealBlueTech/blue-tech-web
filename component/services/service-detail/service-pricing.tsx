"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import type { Service } from "../../../data/service"

export default function ServicePricing({ service }: { service: Service }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Transparent Pricing
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pricing Plans for Every Need
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Choose the plan that best fits your business requirements and budget. All plans include our expert
            implementation and dedicated support.
          </p>

          {/* Billing toggle - could be used if you want to show monthly/annual pricing */}
          {/* <div className="mb-8 flex items-center justify-center">
            <span className={`mr-3 text-sm ${!annualBilling ? "font-semibold text-slate-900" : "text-slate-600"}`}>
              Monthly billing
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                annualBilling ? "bg-blue-600" : "bg-slate-200"
              }`}
              role="switch"
              aria-checked={annualBilling}
              onClick={() => setAnnualBilling(!annualBilling)}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span className={`ml-3 text-sm ${annualBilling ? "font-semibold text-slate-900" : "text-slate-600"}`}>
              Annual billing <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Save 20%</span>
            </span>
          </div> */}
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border ${
                  plan.isPopular
                    ? "border-blue-100 bg-blue-50 shadow-md"
                    : "border-slate-100 bg-white shadow-sm hover:shadow-md"
                } transition-all`}
              >
                {plan.isPopular && (
                  <div className="absolute right-0 top-0 z-10">
                    <div className="inline-flex items-center rounded-bl-lg rounded-tr-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{plan.tier}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                    <span className="ml-1 text-sm font-medium text-slate-500">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    {plan.tier === "Basic"
                      ? "Perfect for small businesses and startups"
                      : plan.tier === "Professional"
                        ? "Ideal for growing businesses with specific needs"
                        : "For large businesses with complex requirements"}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${
                        plan.isPopular
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Need a custom solution?</h3>
                <p className="mt-2 text-slate-600">
                  Contact us for a customized quote tailored to your specific business requirements.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
