"use client"

import { useState } from "react"

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud Solutions" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "enterprise", label: "Enterprise" },
  ]

  const industries = [
    { id: "all-industries", label: "All Industries" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "retail", label: "Retail" },
    { id: "education", label: "Education" },
    { id: "manufacturing", label: "Manufacturing" },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <label htmlFor="industry-filter" className="mr-2 text-sm font-medium text-slate-700">
                Industry:
              </label>
              <select
                id="industry-filter"
                className="rounded-md border-slate-200 bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
