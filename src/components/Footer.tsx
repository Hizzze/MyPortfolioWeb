import { ArrowUp, Terminal } from 'lucide-react'

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Footer Brand */}
        <div className="flex items-center gap-2 select-none">
          <Terminal size={18} className="text-cyan-400" />
          <span className="font-mono font-bold text-white tracking-tight">Vladyslav Syzov</span>
          <span className="text-zinc-600 text-sm">| Portfolio 2026</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-zinc-500 font-medium order-last md:order-none">
          &copy; {new Date().getFullYear()} Vladyslav Syzov. All rights reserved.
        </div>

        {/* Back To Top Action */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  )
}
