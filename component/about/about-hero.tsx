import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Our Story
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Transforming Business Through Technology
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
            We're a team of passionate technologists dedicated to helping businesses innovate, optimize, and grow in the
            digital era.
          </p>

          <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
              alt="Our team at BlueTech headquarters"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-medium">Our headquarters in San Francisco, California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
