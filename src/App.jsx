import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FollowUs from './components/FollowUs'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FollowUs />
      <footer className="bg-black/90 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Luxury Event Studio — All Rights Reserved
      </footer>
    </div>
  )
}

export default App
