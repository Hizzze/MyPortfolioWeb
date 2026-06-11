import { Send, Instagram, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            <Mail className="text-cyan-400 w-8 h-8" />
            <span>Let's Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Section Description */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Feel free to reach out to me on any of these platforms. I am open to new job opportunities and collaborations!
          </p>
        </div>

        {/* Large Social Button-Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {SOCIALS.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border-zinc-800/80 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/5 transition-all duration-300 overflow-hidden"
            >
              {/* Background Color Fill Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Neon border highlight top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${social.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon Wrapper with Pop Effect */}
              <div className={`relative z-10 mb-5 p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md ${social.iconColorClass}`}>
                {social.icon}
              </div>

              {/* Platform Title */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-1 tracking-tight">
                {social.platform}
              </h3>

              {/* Handle Subtext */}
              <p className="relative z-10 text-sm text-zinc-400 font-mono group-hover:text-zinc-200 transition-colors">
                {social.handle}
              </p>

              {/* Arrow Indicator Top Right */}
              <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

interface SocialItem {
  platform: string
  handle: string
  link: string
  icon: React.ReactNode
  bgGradient: string
  borderGradient: string
  iconColorClass: string
}

const SOCIALS: SocialItem[] = [
  {
    platform: 'Telegram',
    handle: '@vladhize',
    link: 'https://t.me/vladhize',
    icon: <Send size={28} className="rotate-45 -translate-x-0.5 translate-y-0.5" />,
    bgGradient: 'from-sky-500/5 to-sky-600/10',
    borderGradient: 'from-transparent via-sky-400 to-transparent',
    iconColorClass: 'group-hover:text-sky-400 group-hover:border-sky-500/30 group-hover:shadow-sky-950/30',
  },
  {
    platform: 'LinkedIn',
    handle: 'Vladyslav Syzov',
    link: 'https://www.linkedin.com/in/vladyslav-syzov-18496a284/',
    icon: <Linkedin size={28} />,
    bgGradient: 'from-blue-500/5 to-blue-600/10',
    borderGradient: 'from-transparent via-blue-400 to-transparent',
    iconColorClass: 'group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:shadow-blue-950/30',
  },
  {
    platform: 'GitHub',
    handle: 'Hizzze',
    link: 'https://github.com/Hizzze',
    icon: <Github size={28} />,
    bgGradient: 'from-purple-500/5 to-purple-600/10',
    borderGradient: 'from-transparent via-purple-400 to-transparent',
    iconColorClass: 'group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:shadow-purple-950/30',
  },
  {
    platform: 'Instagram',
    handle: '@vladhize',
    link: 'https://www.instagram.com/vladhize',
    icon: <Instagram size={28} />,
    bgGradient: 'from-pink-500/5 to-rose-600/10',
    borderGradient: 'from-transparent via-pink-400 to-transparent',
    iconColorClass: 'group-hover:text-pink-400 group-hover:border-pink-500/30 group-hover:shadow-pink-950/30',
  },
]
