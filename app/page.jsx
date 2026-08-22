import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Teachers from '@/components/Teachers'
import Extracurricular from '@/components/Extracurricular'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Teachers />
      <Extracurricular />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
