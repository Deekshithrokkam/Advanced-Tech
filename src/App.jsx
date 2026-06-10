import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyJoin from './components/WhyJoin'
import Domains from './components/Domains'
import Events from './components/Events'
import Leadership from './components/Leadership'
import Gallery from './components/Gallery'
import Achievements from './components/Achievements'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [loading])

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyJoin />
            <Domains />
            <Events />
            <Leadership />
            <Gallery />
            <Achievements />
            <Vision />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}
