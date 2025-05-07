import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectCategories() {
  const categories = [
    {
      title: "Web Development",
      description: "Custom websites and web applications that deliver exceptional user experiences.",
      image: "/placeholder.svg?height=400&width=600",
      count: 24,
      link: "#web-development",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      image: "/placeholder.svg?height=400&width=600",
      count: 18,
      link: "#mobile-apps",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure and migration services.",
      image: "/placeholder.svg?height=400&width=600",
      count: 15,
      link: "#cloud-solutions",
    },
    {
      title: "E-Commerce",
      description: "End-to-end e-commerce platforms and online store solutions.",
      image: "/placeholder.svg?height=400&width=600",
      count: 12,
      link: "#ecommerce",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/3 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Project Categories
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Browse Projects by Category
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Explore our work across different technology domains and discover our expertise in each area.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square overflow-hidden md:aspect-auto">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="mb-4 text-slate-600">{category.description}</p>
                    <div className="mb-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 w-fit">
                      {category.count} Projects
                    </div>
                    <div className="flex items-center text-sm font-medium text-blue-600">
                      View Projects
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
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
