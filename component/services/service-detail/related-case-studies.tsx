import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// This would typically come from a database or API
// For now, we're using mock data
const caseStudies = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution for a leading retail brand.",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  "corporate-website": {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    description: "Modern website redesign for a Fortune 500 financial services company.",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  "web-application": {
    id: "web-application",
    title: "Customer Portal Application",
    description: "Secure customer portal for a healthcare provider with advanced features.",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  "healthcare-app": {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description: "Patient management mobile application for a healthcare provider.",
    category: "Mobile App Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  "inventory-app": {
    id: "inventory-app",
    title: "Inventory Management App",
    description: "Mobile inventory tracking solution for retail chain.",
    category: "Mobile App Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  "fitness-app": {
    id: "fitness-app",
    title: "Fitness Tracking App",
    description: "Comprehensive fitness and wellness tracking application.",
    category: "Mobile App Development",
    image: "/placeholder.svg?height=600&width=800",
  },
}

export default function RelatedCaseStudies({ caseStudyIds }: { caseStudyIds: string[] }) {
  const relatedCaseStudies = caseStudyIds.map((id) => caseStudies[id as keyof typeof caseStudies]).filter(Boolean)

  if (relatedCaseStudies.length === 0) {
    return null
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Success Stories
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Related Case Studies</h2>
          <p className="mb-12 text-lg text-slate-600">
            Explore real-world examples of our successful projects and the results we've delivered for our clients.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {relatedCaseStudies.map((caseStudy, index) => (
              <Link
                key={index}
                href={`/projects/${caseStudy.id}`}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={caseStudy.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="mb-4 text-slate-600">{caseStudy.description}</p>
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
