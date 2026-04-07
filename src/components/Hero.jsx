import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Automate Your CI/CD Pipeline 🚀</h1>
          <p className="hero-subtitle">
            Streamline your development workflow with intelligent automation. Deploy faster, test smarter, and ship with confidence using AWS DevOps tools.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('workflow')}>
              Explore Workflow
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('benefits')}>
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </div>
    </section>
  )
}
