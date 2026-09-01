import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import { useScrollReveal } from './hooks/useScrollReveal'

/**
 * The whole page, in order.
 *
 * To reorder the site, move a line inside <main>.
 * To remove a section, delete its line here AND its entry in
 * `navLinks` inside src/data/portfolio.ts.
 */
export default function App() {
  // Turns on the fade-in-on-scroll animation for the whole page.
  useScrollReveal()

  return (
    <>
      {/* Lets keyboard users jump past the navbar. Only visible on focus. */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
