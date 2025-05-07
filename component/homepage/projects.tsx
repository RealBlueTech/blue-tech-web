import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Phamacy Management System",
      description: "A comprehensive system for managing pharmacy operations, including inventory tracking, prescription management, and patient records.",
      category: "Web Application",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "https://img.freepik.com/free-photo/african-american-woman-pharmacist-standing-with-serious-expression-pharmacy_839833-20088.jpg?t=st=1746628333~exp=1746631933~hmac=9eb46f7b890098aa3d4569ce560f94e35a42e205f2dc8b7054c4aff5bbcb5624&w=2000",
    },
    {
      title: "Garage Management System",
      description: "Complete solution for automotive repair shops, handling service scheduling, customer management, and vehicle maintenance tracking.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "AWS"],
      image: "https://img.freepik.com/free-photo/repairman-showing-customer-car-changes_482257-76100.jpg?t=st=1746628383~exp=1746631983~hmac=a3938c1fb065b7776fe643de3e75d5b59a048bfdddb6a9129e608c8a314e8dd9&w=2000",
    },
    {
      title: "Point of Sale System",
      description: "Modern retail management system with real-time sales tracking, inventory management, and customer relationship features.",
      category: "Data Platform",
      technologies: ["Python", "TensorFlow", "Google Cloud"],
      image: "https://img.freepik.com/free-photo/focused-african-american-cashier-scanning-goods-checkout_74855-3409.jpg?t=st=1746628475~exp=1746632075~hmac=6c7d8a02e7baab8c21ec88ba68afe23a008dffadff89b349c6b8b930b4c0906d&w=2000",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute right-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Case Studies
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Latest Projects</h2>
          <p className="mb-10 text-lg text-slate-600">
            Explore our recent work and discover how we've helped businesses solve complex challenges with technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
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
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mb-4 text-slate-600">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  View Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
