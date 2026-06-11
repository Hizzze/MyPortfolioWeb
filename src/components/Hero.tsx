import React from 'react'
import { Linkedin, ArrowRight, Terminal } from 'lucide-react'

export function Hero() {
  function handleContactClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Open to exciting new opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, my name is <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Vlad <span className="inline-block animate-wave">👋</span></span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-300 font-mono">
                Full-Stack Web Developer | Frontend Specialist
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              I am a web developer focused primarily on building high-performance, beautiful frontend experiences, but I also have a solid background in backend development and working with databases. Additionally, I leverage AI tools to optimize routine tasks and accelerate design workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/vladyslav-syzov-18496a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-[1.05] animate-float"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Hero Right Visuals (Terminal Mockup) */}
          <div className="lg:col-span-5 w-full flex justify-center animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="w-full max-w-lg glass-card rounded-2xl overflow-hidden shadow-2xl border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-cyan-950/20 group select-none">
              {/* Terminal Title Bar */}
              <div className="bg-zinc-900/80 px-4 py-3 border-b border-zinc-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                  <Terminal size={12} className="text-cyan-400" />
                  <span>vlad-info.ts — node</span>
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 text-left font-mono text-xs sm:text-sm space-y-3.5 leading-relaxed overflow-x-auto bg-zinc-950/40">
                <div>
                  <span className="text-zinc-500">// Personal developer profile metadata</span>
                </div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-cyan-300">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span> <span className="text-amber-300">"Vladyslav Syzov"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">nickname:</span> <span className="text-amber-300">"vladhize"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span> <span className="text-amber-300">"Full-Stack Web Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">specialization:</span> <span className="text-amber-300">"Frontend Specialist"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">education:</span> <span className="text-cyan-300">{'{'}</span>
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">university:</span> <span className="text-amber-300">"WSB Merito in Poznan"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">degree:</span> <span className="text-amber-300">"Computer Science"</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">{'}'}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">aiWorkflowOptimized:</span> <span className="text-emerald-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">openToWork:</span> <span className="text-emerald-400">true</span>
                </div>
                <div>
                  <span className="text-cyan-300">{'}'}</span>
                </div>
                <div className="pt-2 flex items-center">
                  <span className="text-zinc-500">&gt; </span>
                  <span className="text-cyan-400 ml-1.5">npm run dev</span>
                  <span className="w-2.5 h-4 bg-cyan-400 cursor-blink ml-1.5 rounded-xs" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
