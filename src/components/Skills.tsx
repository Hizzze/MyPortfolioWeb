import React from 'react'
import { Code2, Cpu, Settings, Atom, Wind, Palette, Hash, Layers, Globe, GitBranch, Figma, Terminal, Monitor, Laptop, FileText } from 'lucide-react'

export function Skills() {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            <Code2 className="text-cyan-400 w-8 h-8" />
            <span>Technologies & Tools</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className="spotlight-card glass-card rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-cyan-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center justify-between p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-900/40 hover:border-zinc-800 hover:bg-zinc-900 hover:scale-[1.01] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-purple-400">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-zinc-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500 font-mono font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer accent line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent w-full mt-8 rounded-full" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

interface Skill {
  name: string
  icon: React.ReactNode
  level: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Technologies',
    icon: <Code2 size={24} />,
    skills: [
      { name: 'JavaScript (JS)', icon: <Code2 size={16} />, level: 'Advanced' },
      { name: 'TypeScript (TS)', icon: <Terminal size={16} />, level: 'Advanced' },
      { name: 'React', icon: <Atom size={16} />, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: <Wind size={16} />, level: 'Advanced' },
      { name: 'Sass', icon: <Palette size={16} />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend & CMS',
    icon: <Cpu size={24} />,
    skills: [
      { name: 'C#', icon: <Hash size={16} />, level: 'Intermediate' },
      { name: '.NET Core', icon: <Layers size={16} />, level: 'Intermediate' },
      { name: 'WordPress', icon: <Globe size={16} />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Settings size={24} />,
    skills: [
      { name: 'Git', icon: <GitBranch size={16} />, level: 'Advanced' },
      { name: 'Figma', icon: <Figma size={16} />, level: 'Intermediate' },
      { name: 'Linux', icon: <Terminal size={16} />, level: 'Intermediate' },
      { name: 'Windows', icon: <Monitor size={16} />, level: 'Advanced' },
      { name: 'macOS', icon: <Laptop size={16} />, level: 'Advanced' },
      { name: 'Notion', icon: <FileText size={16} />, level: 'Advanced' },
    ],
  },
]
