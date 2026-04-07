import React from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Workflow from './components/Workflow'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <TechStack />
      <Workflow />
      <Benefits />
      <Footer />
    </div>
  )
}

export default App
