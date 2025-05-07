"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ServicesFAQ() {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes across various industries, from startups to enterprise organizations. Our clients include companies in healthcare, finance, retail, education, manufacturing, and more.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on the scope, complexity, and requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific project.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. The right model depends on your project's nature, scope, and requirements. We'll discuss the most suitable option during our consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. These include regular updates, security patches, performance monitoring, and technical support.",
    },
    {
      question: "How do you ensure the security of the solutions you develop?",
      answer:
        "Security is integrated throughout our development process. We follow industry best practices, conduct regular security audits and testing, implement encryption and secure authentication, and stay updated on the latest security threats and mitigations.",
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer:
        "Yes, we have extensive experience integrating with existing systems and technologies. We'll assess your current infrastructure and develop solutions that seamlessly integrate with your existing ecosystem.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
            Common Questions
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border border-slate-100 bg-white shadow-sm">
                <button
                  className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium text-slate-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`px-4 pb-4 ${openIndex === index ? "block" : "hidden"}`}>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
