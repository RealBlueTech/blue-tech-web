"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Laptop } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
              <Laptop className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">TECH SOLUTIONS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-900 transition-colors hover:text-blue-600"
              aria-current="page"
            >
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
              Projects
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full z-50 mt-2 hidden w-48 rounded-md border border-slate-100 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#blog"
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                >
                  Blog
                </Link>
                <Link
                  href="#case-studies"
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                >
                  Case Studies
                </Link>
                <Link
                  href="#resources"
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                >
                  Resources
                </Link>
              </div>
            </div>
            <Link href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-900"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="#blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="mt-2 block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-white hover:bg-slate-800"
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
