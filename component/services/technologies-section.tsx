import Image from "next/image"

export default function TechnologiesSection() {
  const technologyCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", image: "/react.svg" },
        { name: "Angular", image: "/angular.svg" },
        { name: "Vue.js", image: "/Vue.svg" },
        { name: "Next.js", image: "/next.svg" },
        { name: "TypeScript", image: "/typescript.svg" },
        { name: "Tailwind CSS", image: "/tailwind-css.svg" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", image: "/Node.svg" },
        { name: "Python", image: "/python.svg" },
        { name: "Java", image: "/Java.svg" },
        { name: "PHP", image: "/php.svg" },
        { name: ".NET", image: "/Net.svg" },
        { name: "Ruby", image: "/Ruby.svg" },
      ],
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", image: "/react native.svg" },
        { name: "Flutter", image: "/Flutter.svg" },
        { name: "Swift", image: "/shift.svg" },
        { name: "Kotlin", image: "/Kotlin.svg" },
        { name: "Ionic", image: "/ionic.svg" },
        { name: "Xamarin", image: "/xamarim.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", image: "/aws.svg" },
        { name: "Azure", image: "/azure.svg" },
        { name: "Google Cloud", image: "/google-cloud.svg" },
        { name: "Docker", image: "/docker.svg" },
        { name: "Kubernetes", image: "/kubernetes.svg" },
        { name: "Jenkins", image: "/jenkins.svg" },
      ],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Our Tech Stack
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technologies We Work With
          </h2>
          <p className="mb-16 text-lg text-slate-600">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-12">
          {technologyCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-3 h-12 w-12">
                      <Image
                        src={tech.image || "/placeholder.svg"}
                        width={60}
                        height={60}
                        alt={tech.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-center text-sm font-medium text-slate-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
