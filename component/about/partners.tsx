import Image from "next/image"

export default function Partners() {
  const partners = [
    { name: "Partner 1", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 2", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 3", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 4", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 5", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 6", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 7", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 8", image: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Trusted By
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Partners & Clients</h2>
          <p className="mb-12 text-lg text-slate-600">
            We're proud to work with leading organizations across industries to deliver exceptional technology
            solutions.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <Image
                  src={partner.image || "/placeholder.svg"}
                  width={200}
                  height={80}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Industry Expertise</h3>
                <p className="mb-6 text-slate-600">
                  We've worked with clients across a wide range of industries, developing deep expertise in their unique
                  challenges and opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Healthcare",
                    "Finance",
                    "Manufacturing",
                    "Retail",
                    "Education",
                    "Logistics",
                    "Non-profit",
                    "Government",
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-center text-slate-700"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Global Reach</h3>
                <p className="mb-6 text-slate-600">
                  With clients and partners around the world, we deliver technology solutions that transcend
                  geographical boundaries.
                </p>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    alt="Global map with client locations"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
