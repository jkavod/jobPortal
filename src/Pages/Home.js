import React from 'react'
import { Body, Footer, Hero, Nav } from '../UI'
import { StaticScrollUpButton } from '../Constants'

function Home() {
  return (
    <div>
      {/* Navigation bar */}
      <Nav />

      {/* Hero section */}
      <Hero />

      {/* Body content */}
      <Body />

      {/* Footer section */}
      <Footer />

      {/* Button to scroll back up to the top */}
      <StaticScrollUpButton />
    </div>
  )
}

export default Home;
