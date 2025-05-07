import { Target, Eye, Heart, Users, Shield, Lightbulb } from "lucide-react"

export default function MissionVision() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centric",
      description: "We put our clients' needs at the center of everything we do, focusing on delivering real value.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to solve complex business challenges.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical standards in all our interactions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our company and with our clients.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Mission, Vision & Values
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            These core principles guide our work and define who we are as a company.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-lg text-slate-600">
              To deliver innovative technology solutions that empower businesses to overcome challenges, seize
              opportunities, and achieve sustainable growth in an increasingly digital world.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-lg text-slate-600">
              To be the leading technology partner for forward-thinking businesses, recognized globally for our
              innovation, expertise, and exceptional client outcomes.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">Our Core Values</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700">{value.icon}</div>
                <h4 className="mb-2 text-xl font-semibold text-slate-900">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
