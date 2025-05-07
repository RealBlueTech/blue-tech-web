import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their team delivered an exceptional solution that transformed our business operations. The attention to detail and technical expertise was impressive.",
      name: "Sarah Johnson",
      company: "Global Enterprises",
      position: "CTO",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with this team was a game-changer for our digital transformation. They understood our needs and delivered beyond our expectations.",
      name: "Michael Chen",
      company: "Innovate Solutions",
      position: "CEO",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The mobile application they developed for us received outstanding feedback from our users. Their technical skills and project management were top-notch.",
      name: "Emily Rodriguez",
      company: "TechStart Inc.",
      position: "Product Manager",
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
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Client Success
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mb-10 text-lg text-slate-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
