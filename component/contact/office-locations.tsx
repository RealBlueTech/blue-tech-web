import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function OfficeLocations() {
  const offices = [
    {
      name: "San Francisco",
      type: "Headquarters",
      address: "123 Tech Street, Innovation District",
      city: "San Francisco, CA 94103",
      phone: "(123) 456-7890",
      email: "sf@techsolutions.com",
      image: "/placeholder.svg?height=300&width=500",
      mapUrl: "https://maps.google.com",
    },
    {
      name: "New York",
      type: "East Coast Office",
      address: "456 Digital Avenue, Tech Hub",
      city: "New York, NY 10001",
      phone: "(123) 456-7891",
      email: "nyc@techsolutions.com",
      image: "/placeholder.svg?height=300&width=500",
      mapUrl: "https://maps.google.com",
    },
    {
      name: "London",
      type: "European Headquarters",
      address: "789 Innovation Lane, Tech City",
      city: "London, EC1V 9NR, UK",
      phone: "+44 20 1234 5678",
      email: "london@techsolutions.com",
      image: "/placeholder.svg?height=300&width=500",
      mapUrl: "https://maps.google.com",
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
            Global Presence
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Office Locations</h2>
          <p className="mb-12 text-lg text-slate-600">
            Visit us at one of our offices around the world or get in touch with our local teams.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {offices.map((office, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`${office.name} office`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{office.name}</h3>
                    <p className="text-sm text-slate-200">{office.type}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
                      <div>
                        <p className="text-slate-700">{office.address}</p>
                        <p className="text-slate-700">{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-slate-500" />
                      <p className="text-slate-700">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-slate-500" />
                      <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View on Map
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Global Reach</h3>
              <p className="mx-auto mb-6 max-w-3xl text-slate-600">
                Beyond our main offices, we have a network of partners and representatives in over 20 countries
                worldwide, allowing us to serve clients globally with local expertise.
              </p>
              <div className="relative mx-auto h-64 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  alt="Global map with office locations"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
