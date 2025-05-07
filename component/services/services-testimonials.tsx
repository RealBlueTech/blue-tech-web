import Image from "next/image"
import { Star } from "lucide-react"

export default function ServicesTestimonials() {
  const testimonials = [
    {
      quote:
        "Their web development team delivered an exceptional e-commerce platform that has increased our online sales by 45% in just three months.",
      name: "Michael Chen",
      company: "Retail Innovations",
      position: "CEO",
      service: "Web Development",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The mobile app they developed for our healthcare service has transformed how we engage with patients. User satisfaction is up by 60%.",
      name: "Dr. Sarah Johnson",
      company: "MediCare Solutions",
      position: "Director",
      service: "Mobile App Development",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their cloud migration strategy saved us 30% on infrastructure costs while improving system reliability and performance.",
      name: "James Wilson",
      company: "Global Manufacturing Inc.",
      position: "CTO",
      service: "Cloud Computing",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
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
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Client Success
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mb-12 text-lg text-slate-600">
            Hear directly from our clients about their experience working with us and the results we've delivered.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Quote mark */}
              <div className="absolute right-6 top-6 text-4xl font-serif text-slate-200">"</div>

              {/* Service tag */}
              <div className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {testimonial.service}
              </div>

              {/* Rating */}
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-slate-600">{testimonial.quote}</p>

              {/* Client info */}
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    width={80}
                    height={80}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
