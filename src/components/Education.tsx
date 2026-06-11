import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            <GraduationCap className="text-cyan-400 w-8 h-8" />
            <span>Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-zinc-800/80 ml-4 sm:ml-6 md:ml-8 pl-8 sm:pl-10 space-y-12 py-4">

          {EDUCATION_DATA.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 group-hover:border-cyan-400 group-hover:bg-cyan-950/45 transition-all duration-300 shadow-md">
                <GraduationCap size={16} className="text-zinc-450 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300 space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.university}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 self-start sm:self-center">
                    <Calendar size={12} className="text-purple-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Award size={14} className="text-cyan-400" />
                    <span className="font-semibold text-zinc-300">{item.major}</span>
                  </div>
                  <div className="hidden sm:block text-zinc-650">•</div>
                  <div className="flex items-center gap-1">
                    <span className="text-purple-400 font-medium">Specialization:</span>
                    <span className="text-zinc-300">{item.specialization}</span>
                  </div>
                  <div className="hidden sm:block text-zinc-650">•</div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-2 border-t border-zinc-900/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

interface EducationItem {
  university: string
  major: string
  specialization: string
  period: string
  location: string
  description: string
}

const EDUCATION_DATA: EducationItem[] = [
  {
    university: 'WSB Merito University in Poznan',
    major: 'Computer Science',
    specialization: 'Software Engineering',
    period: '2023 - 2026',
    location: 'Poznań, Poland',
    description: 'Focusing on computer science principles, core software engineering design patterns, systems architecture, algorithmic development, and modern client-side and server-side technologies.',
  },
]
