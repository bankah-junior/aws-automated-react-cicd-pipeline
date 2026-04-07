import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CI/CD Automation</h3>
            <p>Streamline your development workflow with intelligent automation and AWS DevOps tools.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToTop()}>Home</button></li>
              <li><button onClick={() => scrollToSection('tech-stack')}>Tech Stack</button></li>
              <li><button onClick={() => scrollToSection('workflow')}>Workflow</button></li>
              <li><button onClick={() => scrollToSection('benefits')}>Benefits</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">AWS DevOps</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} CI/CD Automation Platform. Built by Anthony Bekoe Bankah.</p>
          <p>Powered by AWS and modern web technologies.</p>
        </div>
      </div>
    </footer>
  )
}
