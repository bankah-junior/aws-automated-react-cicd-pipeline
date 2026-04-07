import React, { useState } from 'react'
import './Workflow.css'

export default function Workflow() {
  const [expandedId, setExpandedId] = useState(0)

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Code Commit',
      icon: '📝',
      details: 'Push your code to GitHub and trigger the pipeline automatically with our webhook integration.'
    },
    {
      id: 1,
      number: '02',
      title: 'Build & Test',
      icon: '🧪',
      details: 'AWS CodeBuild compiles your application and runs comprehensive test suites in parallel.'
    },
    {
      id: 2,
      number: '03',
      title: 'Artifact Storage',
      icon: '💾',
      details: 'Generated artifacts are securely stored in AWS S3 for deployment and distribution.'
    },
    {
      id: 3,
      number: '04',
      title: 'Deploy',
      icon: '🚀',
      details: 'CodePipeline orchestrates the deployment to staging and production environments seamlessly.'
    },
    {
      id: 4,
      number: '05',
      title: 'Monitor & Alert',
      icon: '📊',
      details: 'Real-time monitoring and automated alerts keep you informed of pipeline status and issues.'
    }
  ]

  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        <div className="section-header">
          <h2>Our 5-Step Workflow</h2>
          <p>Click on any step to explore the details</p>
        </div>
        <div className="workflow-grid">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`workflow-card ${expandedId === step.id ? 'expanded' : ''}`}
              onClick={() => setExpandedId(expandedId === step.id ? null : step.id)}
            >
              <div className="workflow-card-inner">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                {expandedId === step.id && (
                  <p className="step-details">{step.details}</p>
                )}
              </div>
              {idx < steps.length - 1 && (
                <div className="workflow-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
