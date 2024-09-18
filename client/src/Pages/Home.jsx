import React from 'react'
import Dashboard from './HomePage/HeroSection'
import ImageCarousel from './HomePage/ImageCarousel'
import AskMentor from './HomePage/AskMentor'
import FAQSection from './HomePage/FAQ'
import WhyChooseUs from './HomePage/whytochoose'
import ChatBot from '../Bots/chatbot'


function Home() {
  return (
    <div>
      <Dashboard/>
      <WhyChooseUs />
      <ChatBot/>
    </div>
  )
}

export default Home
