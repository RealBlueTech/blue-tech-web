import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Enterprise Solutions
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Advanced Tech <br />
                <span className="text-slate-700">Solutions for Business</span>
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                Streamline operations and drive growth with our cutting-edge technology solutions tailored specifically
                for modern enterprises.
              </p>
            </div>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Explore Solutions
              </a>
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      width={32}
                      height={32}
                      alt={`Client ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by 500+ businesses worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038846.jpg?t=st=1746627570~exp=1746631170~hmac=5f2b36091fe41b79385e61f38381acbadee16448c86cfbe944558168557f8aad&w=2000"
                width={800}
                height={600}
                alt="BlueTech technology solutions"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent opacity-60"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-lg border border-slate-100 bg-white p-4 shadow-lg sm:p-6 md:bottom-8 md:left-8">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-emerald-100 p-2">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">98.7%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
