"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import animationData from '../../public/therealstartup.json'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-[100px] h-[100px] bg-slate-100 rounded-lg animate-pulse" />
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12 min-h-screen">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 opacity-60 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-gradient-to-l from-emerald-50 to-emerald-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gradient-to-t from-amber-50 to-amber-100 opacity-40 blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 bg-grid-slate-200/60 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226,232,240,0.6)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Enterprise Solutions
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
              >
                Innovate. Integrate. <br />
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Ignite.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-600 md:text-2xl"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Your Vision, Our Tech, Limitless Possibilities.<br /> Solutions That Scale With Your Business.
                </motion.span>

              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-900 transition-all hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Explore Solutions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4 text-sm text-slate-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm transition-transform hover:scale-110"
                  >
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      width={40}
                      height={40}
                      alt={`Client ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>
                Trusted by <span className="font-semibold">10+</span> businesses worldwide
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20 blur-sm"></div> */}
              <div className="relative overflow-hidden rounded-2xl">
              <Lottie width={100} animationData={animationData} loop={true} />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-slate-900/10"></div> */}
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-lg border border-slate-100 bg-white p-4 shadow-xl sm:p-6 md:bottom-8 md:left-8"
            >
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
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-6 -top-6 rounded-lg border border-slate-100 bg-white p-4 shadow-xl md:-right-8 md:top-8"
            >
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Trusted Partner</p>
                  <p className="text-sm font-medium text-slate-900">Enterprise Grade</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
