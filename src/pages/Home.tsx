import { useLayoutEffect } from 'react'

import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export const PROJECT_SCROLL_KEY =
  'portfolio-project-scroll-position'

function Home() {
  useLayoutEffect(() => {
    const savedPosition =
      sessionStorage.getItem(PROJECT_SCROLL_KEY)

    if (!savedPosition) {
      return
    }

    const scrollY = Number(savedPosition)

    if (!Number.isFinite(scrollY)) {
      sessionStorage.removeItem(PROJECT_SCROLL_KEY)
      return
    }

    // Wait for the Home page content to be mounted.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollY,
          left: 0,
          behavior: 'instant',
        })

        // The saved position is only needed for this return.
        sessionStorage.removeItem(PROJECT_SCROLL_KEY)
      })
    })
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home