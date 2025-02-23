'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            WOLRIX
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-gray-600">About</Link>
            <Link href="#companies" className="hover:text-gray-600">Companies</Link>
            <Link href="#contact" className="hover:text-gray-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="hover:text-gray-600">About</Link>
              <Link href="#companies" className="hover:text-gray-600">Companies</Link>
              <Link href="#contact" className="hover:text-gray-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 