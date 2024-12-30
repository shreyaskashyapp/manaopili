'use client'
import { SurveyForm } from '@/app/components/form/survey-form'
import { csmSurveyConfig } from '../config/csm-survey'

const res=[
  {
    "name": "Agent Workspace",
    "slug": "agent-workspace",
    "category": "Standard",
    "ratings": {
      "people": 2,
      "process": 2,
      "technology": 3,
      "comments": ""
    }
  },
  {
    "name": "Case Management",
    "slug": "case-management",
    "category": "Standard",
    "ratings": {
      "people": 0,
      "process": 1,
      "technology": 3,
      "comments": ""
    }
  },
  {
    "name": "Omnichannel",
    "slug": "omnichannel",
    "category": "Standard",
    "ratings": {
      "people": 5,
      "process": 3,
      "technology": 5,
      "comments": ""
    }
  },
  {
    "name": "Self-Service",
    "slug": "self-service",
    "category": "Standard",
    "ratings": {
      "people": 4,
      "process": 4,
      "technology": 3,
      "comments": ""
    }
  },
  {
    "name": "Knowledge Management",
    "slug": "knowledge-management",
    "category": "Standard",
    "ratings": {
      "people": 5,
      "process": 2,
      "technology": 4,
      "comments": ""
    }
  },
  {
    "name": "Walk-Up Experience for CSM",
    "slug": "walk-up-experience-for-csm",
    "category": "Standard",
    "ratings": {
      "people": 3,
      "process": 3,
      "technology": 1,
      "comments": ""
    }
  },
  {
    "name": "Service Management For Issue Resolution",
    "slug": "service-management-for-issue-resolution",
    "category": "Standard",
    "ratings": {
      "people": 4,
      "process": 3,
      "technology": 4,
      "comments": ""
    }
  },
  {
    "name": "Advanced Work Assignment",
    "slug": "advanced-work-assignment",
    "category": "Standard",
    "ratings": {
      "people": 5,
      "process": 2,
      "technology": 5,
      "comments": ""
    }
  },
  {
    "name": "Engagement Messenger",
    "slug": "engagement-messenger",
    "category": "Standard",
    "ratings": {
      "people": 1,
      "process": 2,
      "technology": 3,
      "comments": ""
    }
  },
  {
    "name": "Digital Portfolio Management",
    "slug": "digital-portfolio-management",
    "category": "Standard",
    "ratings": {
      "people": 4,
      "process": 2,
      "technology": 4,
      "comments": ""
    }
  },
  {
    "name": "Proactive Customer Service Operations",
    "slug": "proactive-customer-service-operations",
    "category": "Pro",
    "ratings": {
      "people": 1,
      "process": 4,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Task Intelligence",
    "slug": "task-intelligence",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 4,
      "technology": 3,
      "comments": ""
    }
  },
  {
    "name": "Performance Analytics",
    "slug": "performance-analytics",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 3,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Virtual Agent",
    "slug": "virtual-agent",
    "category": "Pro",
    "ratings": {
      "people": 4,
      "process": 3,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Outsource Customer Service",
    "slug": "outsource-customer-service",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 0,
      "technology": 4,
      "comments": ""
    }
  },
  {
    "name": "Continual Improvement Management",
    "slug": "continual-improvement-management",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 5,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Vendor Management Workspace",
    "slug": "vendor-management-workspace",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 1,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "DevOps",
    "slug": "devops",
    "category": "Pro",
    "ratings": {
      "people": 0,
      "process": 0,
      "technology": 2,
      "comments": ""
    }
  },
  {
    "name": "Now Assist for CSM",
    "slug": "now-assist-for-csm",
    "category": "Pro",
    "ratings": {
      "people": 3,
      "process": 0,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Workforce Optimization",
    "slug": "workforce-optimization",
    "category": "Enterprise",
    "ratings": {
      "people": 0,
      "process": 2,
      "technology": 0,
      "comments": ""
    }
  },
  {
    "name": "Process Mining",
    "slug": "process-mining",
    "category": "Enterprise",
    "ratings": {
      "people": 0,
      "process": 0,
      "technology": 4,
      "comments": ""
    }
  }
]

export default function Survey() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-14">
        <div className="container py-10">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {csmSurveyConfig.title}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Evaluate your ServiceNow CSM implementation across People, Process, and Technology dimensions
            </p>
          </div>
          <SurveyForm
            config={csmSurveyConfig}
            onComplete={(results) => {
              console.log('Survey completed:', results)
            }}
          />
        </div>
      </main>
    )
  }
  