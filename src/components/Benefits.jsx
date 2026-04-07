import React from 'react'
import './Benefits.css'

export default function Benefits() {
  const benefits = [
    {
      title: 'Faster Deployments',
      description: 'Reduce deployment time from hours to minutes with automated pipelines.',
      icon: '⚡'
    },
    {
      title: 'Reduced Errors',
      description: 'Minimize manual errors through automated testing and deployment processes.',
      icon: '✓'
    },
    {
      title: 'Continuous Integration',
      description: 'Integrate code changes frequently and automatically test every commit.',
      icon: '🔄'
    },
    {
      title: 'Scalability',
      description: 'Scale your infrastructure automatically to handle increasing demands.',
      icon: '📈'
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for the resources you use with AWS pay-as-you-go pricing.',
      icon: '💰'
    },
    {
      title: 'Team Collaboration',
      description: 'Enable better collaboration between development and operations teams.',
      icon: '👥'
    }
  ]

  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <div className="section-header">
          <h2>Why CI/CD Automation Matters</h2>
          <p>Transform your development workflow and unlock business value</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
