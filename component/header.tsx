"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Laptop } from "lucide-react"

// Navigation Links Data
const navigationLinks = [
  { href: "/", label: "Home", isActive: true },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/project", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const resourceLinks = [
  { href: "#blog", label: "Blog" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#resources", label: "Resources" },
]

// Logo Component
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
      <Laptop className="h-5 w-5" />
    </div>
    <span className="text-xl font-bold tracking-tight text-slate-900">BlueTech</span>
  </Link>
)

// CTA Button Component
const CTAButton = ({ className = "" }) => (
  <Link
    href="#contact"
    className={`inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${className}`}
  >
    Get Started
  </Link>
)

// Desktop Navigation Component
const DesktopNavigation = () => (
  <nav className="hidden md:flex md:items-center md:space-x-6">
    {navigationLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`text-sm font-medium ${
          link.isActive ? "text-slate-900" : "text-slate-600"
        } transition-colors hover:text-blue-600`}
        aria-current={link.isActive ? "page" : undefined}
      >
        {link.label}
      </Link>
    ))}
    <div className="relative group">
      <button className="flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
        Resources
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 top-full z-50 mt-2 hidden w-48 rounded-md border border-slate-100 bg-white p-2 shadow-lg group-hover:block">
        {resourceLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </nav>
)

// Mobile Navigation Component
const MobileNavigation = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden">
      <div className="space-y-1 px-4 pb-3 pt-2">
        {[...navigationLinks, ...resourceLinks].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <CTAButton className="mt-2 block w-full" />
      </div>
    </div>
  )
}

// Main Header Component
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNavigation />
          <div className="hidden md:block">
            <CTAButton />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <MobileNavigation isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  )
}
