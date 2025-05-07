import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution for a leading retail brand.",
      category: "Web Development",
      industry: "Retail",
      image: "/placeholder.svg?height=600&width=800",
      slug: "ecommerce-platform",
    },
    {
      title: "Healthcare Mobile App",
      description: "Patient management mobile application for a healthcare provider.",
      category: "Mobile App",
      industry: "Healthcare",
      image: "/placeholder.svg?height=600&width=800",
      slug: "healthcare-app",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for a financial services company.",
      category: "Web Development",
      industry: "Finance",
      image: "/placeholder.svg?height=600&width=800",
      slug: "financial-dashboard",
    },
    {
      title: "Cloud Migration",
      description: "Enterprise-scale cloud migration for a manufacturing company.",
      category: "Cloud Solutions",
      industry: "Manufacturing",
      image: "/placeholder.svg?height=600&width=800",
      slug: "cloud-migration",
    },
    {
      title: "Learning Management System",
      description: "Custom LMS for a leading educational institution.",
      category: "Web Development",
      industry: "Education",
      image: "/placeholder.svg?height=600&width=800",
      slug: "learning-management-system",
    },
    {
      title: "Inventory Management App",
      description: "Mobile inventory tracking solution for retail chain.",
      category: "Mobile App",
      industry: "Retail",
      image: "/placeholder.svg?height=600&width=800",
      slug: "inventory-app",
    },
    {
      title: "Payment Processing Platform",
      description: "Secure payment processing solution for online businesses.",
      category: "Web Development",
      industry: "Finance",
      image: "/placeholder.svg?height=600&width=800",
      slug: "payment-platform",
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-powered supply chain management system.",
      category: "Enterprise Solutions",
      industry: "Logistics",
      image: "/placeholder.svg?height=600&width=800",
      slug: "supply-chain",
    },
    {
      title: "Telemedicine Platform",
      description: "Virtual healthcare consultation platform.",
      category: "Web Development",
      industry: "Healthcare",
      image: "/placeholder.svg?height=600&width=800",
      slug: "telemedicine-platform",
    },
  ]

  return (
    <section id="projects-grid" className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute right-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium text-blue-600">{project.industry}</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-slate-600">{project.description}</p>
                  <div className="flex items-center text-sm font-medium text-blue-600">
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
