import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection,'
import Navbar from './components/Navbar'
import JobCategories from './components/JobCategories'
import FeaturedSection from './components/FeaturedSection'
import JobConnect from './components/JobConnect'
import SuccessStories from './components/SuccessStories'
import Jumpstart from './components/JumpStart'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroSection />
    <JobCategories />
    <FeaturedSection />
    <JobConnect />
    <SuccessStories />
    <Jumpstart />
    <Footer />
    </>
  )
}

export default App
