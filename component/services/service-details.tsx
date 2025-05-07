import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ServiceDetails() {
  const featuredServices = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "We build responsive, high-performance websites and web applications that deliver exceptional user experiences and drive business results.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Custom website development",
        "Progressive Web Applications (PWAs)",
        "E-commerce solutions",
        "Content Management Systems",
        "API development and integration",
        "Performance optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "WordPress", "Shopify", "Laravel"],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "We create intuitive, feature-rich mobile applications for iOS and Android that engage users and help businesses reach their mobile audience effectively.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Native iOS and Android development",
        "Cross-platform development",
        "UI/UX design for mobile",
        "App store optimization",
        "Mobile app testing and QA",
        "Ongoing maintenance and support",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description:
        "We provide scalable, secure cloud solutions that optimize operations, reduce infrastructure costs, and enable business agility.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Cloud migration and strategy",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Cloud security and compliance",
        "Managed cloud services",
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Service Offerings
          </h2>
          <p className="mb-16 text-lg text-slate-600">
            Explore our flagship services that have helped hundreds of businesses transform their digital presence and
            operations.
          </p>
        </div>

        <div className="space-y-24">
          {featuredServices.map((service, index) => (
            <div key={index} id={service.id} className="scroll-mt-20">
              <div className={`grid gap-12 items-center lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="mb-4 text-3xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-6 text-lg text-slate-600">{service.description}</p>

                  <div className="mb-6 space-y-3">
                    <h4 className="text-xl font-semibold text-slate-900">Key Features</h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3 text-xl font-semibold text-slate-900">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more about our {service.title.toLowerCase()} services
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={800}
                      height={600}
                      alt={service.title}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
