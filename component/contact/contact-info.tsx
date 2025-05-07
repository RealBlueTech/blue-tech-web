import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: [
        { label: "Main Office", value: "(123) 456-7890" },
        { label: "Support", value: "(123) 456-7891" },
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        { label: "General Inquiries", value: "info@techsolutions.com" },
        { label: "Support", value: "support@techsolutions.com" },
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
        { label: "Saturday - Sunday", value: "Closed" },
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      details: [
        { label: "Address", value: "123 Tech Street, Innovation District" },
        { label: "City", value: "San Francisco, CA 94103" },
      ],
    },
  ]

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
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Contact Information
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in Touch</h2>
          <p className="mb-12 text-lg text-slate-600">
            Have questions or ready to start your project? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700">{item.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-medium text-slate-500">{detail.label}</p>
                      <p className="text-slate-700">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Connect With Us</h3>
                <p className="mb-6 text-slate-600">
                  Follow us on social media to stay updated with the latest technology trends and company news.
                </p>
                <div className="flex space-x-4">
                  {["twitter", "linkedin", "facebook", "instagram"].map((platform) => (
                    <a
                      key={platform}
                      href={`#${platform}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Newsletter</h3>
                <p className="mb-4 text-slate-600">
                  Subscribe to our newsletter to receive the latest updates and insights.
                </p>
                <form className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
