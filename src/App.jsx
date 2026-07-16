import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import GithubStats from './components/GithubStats'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider>
      <LoadingScreen show={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <GithubStats />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
