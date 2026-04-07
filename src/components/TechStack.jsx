import React from 'react'
import './TechStack.css'

export default function TechStack() {
  const techs = [
    {
      name: 'React',
      icon: '⚛️',
      description: 'Build interactive user interfaces with modern React patterns'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      description: 'Version control and collaboration platform'
    },
    {
      name: 'AWS S3',
      icon: '📦',
      description: 'Scalable cloud storage for artifacts and assets'
    },
    {
      name: 'CodeBuild',
      icon: '🔨',
      description: 'Fully managed continuous integration service'
    },
    {
      name: 'CodePipeline',
      icon: '🚀',
      description: 'Automated continuous delivery pipeline'
    }
  ]

  return (
    <section className="tech-stack section" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2>Our Tech Stack</h2>
          <p>Built with industry-leading tools for modern CI/CD automation</p>
        </div>
        <div className="tech-grid">
          {techs.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
