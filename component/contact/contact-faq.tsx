"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ContactFAQ() {
  const faqs = [
    {
      question: "How quickly can I expect a response after submitting a contact form?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly for immediate assistance.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer a free initial consultation to discuss your project requirements and how we can help. This can be scheduled through our contact form or by calling our office directly.",
    },
    {
      question: "Can I request a specific team member to work on my project?",
      answer:
        "Yes, if you have worked with a specific team member before or have a preference based on their expertise, you can request them in your project inquiry. We'll do our best to accommodate your request based on availability.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "We have clients from around the world and are experienced in working across different time zones. Our global offices and remote collaboration tools allow us to serve clients wherever they are located.",
    },
    {
      question: "What information should I prepare before contacting you about a new project?",
      answer:
        "To help us provide the most accurate information, it's helpful to have a basic project description, timeline expectations, budget range, and any specific requirements or challenges. However, don't worry if you don't have all the details yet – we're happy to help you refine your project scope during our consultation.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
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
            Find answers to common questions about contacting us and working with our team.
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
