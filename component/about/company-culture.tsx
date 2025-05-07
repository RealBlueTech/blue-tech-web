import Image from "next/image"
import { Coffee, Clock, Heart, Award, Briefcase, Zap } from "lucide-react"

export default function CompanyCulture() {
  const benefits = [
    {
      icon: <Coffee className="h-5 w-5" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options to help you maintain a healthy balance.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Continuous Learning",
      description: "Regular training, workshops, and conference opportunities to keep your skills sharp.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs to support your physical and mental wellbeing.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Recognition",
      description: "Regular recognition programs to celebrate achievements and contributions.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Career Growth",
      description: "Clear career paths and mentorship opportunities to help you grow professionally.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Innovation Time",
      description: "Dedicated time to work on passion projects and explore new technologies.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Life at BlueTech
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Company Culture</h2>
          <p className="mb-12 text-lg text-slate-600">
            We've built a collaborative, innovative, and inclusive culture where our team members can thrive and do
            their best work.
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1">
            <h3 className="text-2xl font-bold text-slate-900">A Place Where You Can Grow</h3>
            <p className="text-lg text-slate-600">
              At BlueTech, we believe that our success is directly tied to the happiness and growth of our team
              members. We've created an environment that fosters creativity, collaboration, and continuous learning.
            </p>
            <p className="text-lg text-slate-600">
              Our open and inclusive culture encourages diverse perspectives and ideas, leading to better solutions for
              our clients and more opportunities for innovation.
            </p>
            <div className="rounded-lg bg-slate-50 p-6">
              <blockquote className="italic text-slate-700">
                "What sets BlueTech apart is the culture of collaboration and innovation. Everyone is encouraged
                to share ideas and take ownership of their work. It's the most supportive and dynamic environment I've
                ever worked in."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/images/employee-avatar.jpg"
                    width={40}
                    height={40}
                    alt="Employee"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-slate-900">Alex Johnson</p>
                  <p className="text-sm text-slate-500">Senior Developer, 5 years at BlueTech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/office-culture-1.jpg"
                  width={300}
                  height={300}
                  alt="Company culture"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/office-culture-2.jpg"
                  width={300}
                  height={300}
                  alt="Company culture"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-lg">
                <Image
                  src="/images/office-culture-3.jpg"
                  width={600}
                  height={300}
                  alt="Company culture"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">Benefits & Perks</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700">{benefit.icon}</div>
                <h4 className="mb-2 text-lg font-semibold text-slate-900">{benefit.title}</h4>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
