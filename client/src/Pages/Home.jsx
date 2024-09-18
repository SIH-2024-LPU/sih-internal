import React from 'react'
import Dashboard from './HomePage/HeroSection'
import ImageCarousel from './HomePage/ImageCarousel'
import AskMentor from './HomePage/AskMentor'
import FAQSection from './HomePage/FAQ'
import WhyChooseUs from './HomePage/whytochoose'

function Home() {
  return (
    <div>
      <Dashboard/>
      <WhyChooseUs/>
    </div>
  )
}

export default Home
