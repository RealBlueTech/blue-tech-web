import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-900 text-slate-300">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="footer-grid" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 0 0 L 0 8 L 8 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Footer content */}
      <div className="relative z-10 border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10v10H7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">TECH SOLUTIONS</span>
              </div>
              <p className="mb-4 text-slate-400">
                Providing cutting-edge technology solutions to help businesses innovate, optimize, and grow in the
                digital era.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-blue-400 hover:bg-blue-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-pink-600 hover:bg-pink-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Projects", "Team", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="inline-flex items-center text-slate-400 transition-colors hover:text-white"
                    >
                      <ArrowRight className="mr-2 h-3 w-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-slate-400">123 Tech Street, Innovation District, CA 94103</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a href="mailto:info@techsolutions.com" className="text-slate-400 hover:text-white">
                    info@techsolutions.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a href="tel:+11234567890" className="text-slate-400 hover:text-white">
                    (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
              <p className="mb-4 text-slate-400">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-l-md border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-r-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:space-y-0 sm:text-left">
            <div className="text-sm text-slate-500">&copy; {currentYear} Tech Solutions. All rights reserved.</div>
            <div className="flex space-x-4 text-sm text-slate-500">
              <Link href="#privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
