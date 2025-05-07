import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Our Journey
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Watch Our Story</h2>
          <p className="mb-10 text-lg text-slate-600">
            Discover how we've helped businesses transform their operations and achieve remarkable growth through
            technology.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl">
          <div className="relative aspect-video w-full">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
              alt="Our company story video"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

            {/* Play button */}
            <button
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:h-20 sm:w-20"
              aria-label="Play video"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>

          {/* Video caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-6 text-white">
            <p className="text-lg font-medium">Transforming Business Through Technology</p>
            <p className="text-sm text-slate-300">3:45 min</p>
          </div>
        </div>

        {/* Testimonial quote */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-slate-200">"</div>
            <div>
              <p className="text-lg italic text-slate-600">
                Their technology solutions have revolutionized how we operate, resulting in a 40% increase in efficiency
                and significant cost savings.
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-slate-900">Sarah Johnson</p>
                  <p className="text-sm text-slate-500">CTO, Global Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
