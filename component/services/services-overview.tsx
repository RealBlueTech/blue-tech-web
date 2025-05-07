import { Globe, Smartphone, Cloud, Shield, Briefcase, Palette, Database, Code, LineChart, Cpu } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications tailored to your business needs.",
      link: "#web-development",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description:
        "Creating intuitive native and cross-platform mobile applications that engage users and drive results.",
      link: "#mobile-development",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Computing",
      description:
        "Providing scalable, secure cloud solutions that optimize operations and reduce infrastructure costs.",
      link: "#cloud-computing",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cyber Security",
      description: "Implementing robust security measures to protect your valuable data and systems from threats.",
      link: "#cyber-security",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analytics",
      description:
        "Transforming your raw data into actionable insights that drive better business decisions and outcomes.",
      link: "#data-analytics",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software",
      description: "Developing bespoke software solutions that address your unique business challenges and needs.",
      link: "#custom-software",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Digital Strategy",
      description:
        "Creating comprehensive digital roadmaps that align technology initiatives with your business objectives.",
      link: "#digital-strategy",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description:
        "Leveraging artificial intelligence and machine learning to automate processes and uncover new opportunities.",
      link: "#ai-ml",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "IT Consulting",
      description: "Offering strategic guidance to align your technology investments with your business objectives.",
      link: "#it-consulting",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive, engaging user interfaces that enhance user satisfaction and conversion rates.",
      link: "#ui-ux-design",
    },
  ]

  return (
    <section id="services-overview" className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
          <p className="mb-12 text-lg text-slate-600">
            We offer a comprehensive range of technology services to help your business thrive in the digital age.
            Explore our offerings below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
