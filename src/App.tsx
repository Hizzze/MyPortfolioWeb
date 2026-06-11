import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen relative font-sans antialiased overflow-x-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-950/15 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
