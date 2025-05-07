import Image from "next/image"
import { Trophy, Award, Star } from "lucide-react"

export default function Achievements() {
  const awards = [
    {
      title: "Technology Innovator of the Year",
      organization: "Tech Excellence Awards",
      year: "2022",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Best Workplace in Technology",
      organization: "Workplace Excellence",
      year: "2021",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Top Cloud Solutions Provider",
      organization: "Cloud Computing Magazine",
      year: "2020",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const certifications = [
    {
      title: "ISO 27001",
      description: "Information Security Management",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "AWS Partner",
      description: "Advanced Consulting Partner",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Microsoft Gold",
      description: "Cloud Platform Competency",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Google Cloud",
      description: "Premier Partner",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
            Recognition
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Awards & Certifications</h2>
          <p className="mb-12 text-lg text-slate-600">
            We're proud to be recognized for our commitment to excellence, innovation, and quality in everything we do.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="mb-8 flex items-center text-2xl font-bold text-slate-900">
              <Trophy className="mr-3 h-6 w-6 text-amber-500" />
              Awards & Recognition
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border border-slate-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mb-4 h-16 w-16 overflow-hidden">
                    <Image
                      src={award.image || "/placeholder.svg"}
                      width={100}
                      height={100}
                      alt={award.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="mb-1 text-lg font-semibold text-slate-900">{award.title}</h4>
                  <p className="mb-1 text-blue-600">{award.organization}</p>
                  <p className="text-sm text-slate-500">{award.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="mb-8 flex items-center text-2xl font-bold text-slate-900">
              <Award className="mr-3 h-6 w-6 text-blue-500" />
              Certifications & Partnerships
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm"
                >
                  <div className="mb-3 h-12 w-12 overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      width={80}
                      height={80}
                      alt={cert.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="mb-1 font-semibold text-slate-900">{cert.title}</h4>
                  <p className="text-sm text-slate-500">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white shadow-lg">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center">
                <Star className="mr-4 h-12 w-12 text-amber-400" />
                <div>
                  <h3 className="text-2xl font-bold">Industry-Leading Client Satisfaction</h3>
                  <p className="text-slate-300">98% of our clients rate our services as excellent or very good</p>
                </div>
              </div>
              <div className="text-4xl font-bold">4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
