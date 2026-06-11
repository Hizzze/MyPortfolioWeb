import React, { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 shadow-lg shadow-black/10' : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="group text-2xl font-bold font-mono tracking-tight text-white flex items-center gap-1 select-none"
            >
              <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">&lt;</span>
              <span>Vlad.dev</span>
              <span className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">/&gt;</span>
              <span className="w-2.5 h-5 bg-cyan-400 cursor-blink ml-1 rounded-sm"></span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="https://github.com/Hizzze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-950/20"
            >
              <Github size={16} className="text-cyan-400" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-950/95 border-b border-zinc-800/50 backdrop-blur-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-zinc-400 hover:text-white block px-3 py-3 rounded-md text-base font-medium border-l-2 border-transparent hover:border-cyan-500 hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2 px-3">
            <a
              href="https://github.com/Hizzze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-base font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-all duration-300"
            >
              <Github size={18} className="text-cyan-400" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavLink {
  label: string
  id: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]
