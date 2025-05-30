export const configs = {
    "technology-workflows": {
        title: 'ITSM Modules',
        subtitle: "Elevate your ITSM implementation",
        header: "Technology Workflows (Tx)",
        "types": [
            'Standard',
            'Pro',
            'Enterprise'
        ],
        categories: [
            {
                name: 'Standard',
                modules: [
                    { name: 'Incident Management', slug: 'incident-management' },
                    { name: 'Problem Management', slug: 'problem-management' },
                    { name: 'Change Management', slug: 'change-management' },
                    { name: 'Release Management', slug: 'release-management' },
                    { name: 'Cost Management', slug: 'cost-management' },
                    { name: 'Asset Management', slug: 'asset-management' },
                    { name: 'Request Management', slug: 'request-management' },
                    { name: 'Walk-Up Experience', slug: 'walk-up-experience' },
                    { name: 'Digital Portfolio Management', slug: 'digital-portfolio-management' },
                    { name: 'Universal Request', slug: 'universal-request' }
                ]
            },
            {
                name: 'Pro',
                modules: [
                    { name: 'Performance Analytics', slug: 'performance-analytics' },
                    { name: 'Digital Product Release', slug: 'digital-product-release' },
                    { name: 'Virtual Agent', slug: 'virtual-agent' },
                    { name: 'Predictive Intelligence', slug: 'predictive-intelligence' },
                    { name: 'Continual Improvement', slug: 'continual-improvement' },
                    { name: 'Vendor Manager Workspace', slug: 'vendor-manager-workspace' },
                    { name: 'Mobile Publishing', slug: 'mobile-publishing' },
                    { name: 'DevOps Change Velocity', slug: 'devops-change-velocity' },
                    { name: 'DevOps Config', slug: 'devops-config' }
                ]
            },
            {
                name: 'Enterprise',
                modules: [
                    { name: 'Workspace Optimization', slug: 'workspace-optimization' },
                    { name: 'Process Mining', slug: 'process-mining' },
                    { name: 'App Engine Starter', slug: 'app-engine-starter' }
                ]
            }
        ]
    },
    "customer-workflows": {
        title: 'CSM Modules',
        subtitle: "Elevate your CSM implementation",
        header: " Customer Workflows (Cx)",
        "types": [
            'Standard',
            'Pro',
            'Enterprise'
        ],
        categories: [
            {
                name: 'Standard',
                modules: [
                    { name: 'Agent Workspace', slug: 'agent-workspace' },
                    { name: 'Case Management', slug: 'case-management' },
                    { name: 'Omnichannel', slug: 'omnichannel' },
                    { name: 'Self-Service', slug: 'self-service' },
                    { name: 'Knowledge Management', slug: 'knowledge-management' },
                    { name: 'Walk-Up Experience for CSM', slug: 'walk-up-experience-for-csm' },
                    { name: 'Service Management For Issue Resolution', slug: 'service-management-for-issue-resolution' },
                    { name: 'Advanced Work Assignment', slug: 'advanced-work-assignment' },
                    { name: 'Engagement Messenger', slug: 'engagement-messenger' },
                    { name: 'Digital Portfolio Management', slug: 'digital-portfolio-management' },
                ]
            },
            {
                name: 'Pro',
                modules: [
                    { name: 'Proactive Customer Service Operations', slug: 'proactive-customer-service-operations' },
                    { name: 'Task Intelligence', slug: 'task-intelligence' },
                    { name: 'Performance Analytics', slug: 'performance-analytics' },
                    { name: 'Virtual Agent', slug: 'virtual-agent' },
                    { name: 'Outsource Customer Service', slug: 'outsource-customer-service' },
                    { name: 'Continual Improvement Management', slug: 'continual-improvement-management' },
                    { name: 'Vendor Management Workspace', slug: 'vendor-management-workspace' },
                    { name: 'DevOps', slug: 'devops' },
                    { name: 'Now Assist for CSM', slug: 'now-assist-for-csm' },
                ]
            },
            {
                name: 'Enterprise',
                modules: [
                    { name: 'Workforce Optimization', slug: 'workforce-optimization' },
                    { name: 'Process Mining', slug: 'process-mining' },
                ]
            }
        ]
    },
    "it-operations-management": {
        "title": "ITOM Modules",
        "subtitle": "Elevate your ITOM implementation",
        "header": "Technology Workflows (ITOM)",
        "types": [
            'ITOM Visibility',
            'ITOM Health',
            'ITOM Optimization'
        ],
        "categories": [
            {
                "name": "ITOM Visibility",
                "modules": [
                    { "name": "Discovery", "slug": "discovery" },
                    { "name": "Service Mapping", "slug": "service-mapping" },
                    { "name": "Service Graph Connectors", "slug": "service-graph-connectors" },
                    { "name": "CMDB Data Manager", "slug": "cmdb-data-manager" },
                    { "name": "MID Server (Management, Instrumentation, and Discovery)", "slug": "mid-server" },
                    { "name": "Credential Management", "slug": "credential-management" },
                    { "name": "Discovery Schedules & Patterns", "slug": "discovery-schedules-patterns" },
                    { "name": "Application Services", "slug": "application-services" }
                ]
            },
            {
                "name": "ITOM Health",
                "modules": [
                    { "name": "Event Management", "slug": "event-management" },
                    { "name": "Operational Intelligence / Metric Intelligence", "slug": "operational-intelligence" },
                    { "name": "Health Log Analytics (HLA)", "slug": "health-log-analytics" },
                    { "name": "Service Health Dashboard", "slug": "service-health-dashboard" },
                    { "name": "Alert Management", "slug": "alert-management" },
                    { "name": "Connector Integrations", "slug": "connector-integrations" },
                    { "name": "Impact Analysis (via Service Mapping)", "slug": "impact-analysis" }
                ]
            },
            {
                "name": "ITOM Optimization",
                "modules": [
                    { "name": "Cloud Managament", "slug": "cloud-management" },
                    { "name": "Cloud Insights", "slug": "cloud-insights" },
                    { "name": "Cloud Respirce Optimization", "slug": "cloud-resource-optimization" },
                    { "name": "Application Service Monitoring", "slug": "application-service-monitoring" },
                    { "name": "Predictive AIOps (Advanced Intelligance)", "slug": "predictive-aiops" },
                    { "name": "Automated Remediation", "slug": "automated-remediation" },
                    { "name": "Runbook Automation (via Integration Hub)", "slug": "runbook-automation" }
                ]
            }
        ]
    }
}

export const fallbackConfig = {
    "technology-workflows": {
        "title": "Technology Workflows",
        "subtitle": "Coming Soon - May 2025"
    },
    "customer-workflows": {
        "title": "Customer Workflows",
        "subtitle": "Coming Soon - May 2025"
    },
    "it-operations-management": {
        "title": "IT Operations Management",
        "subtitle": "Coming Soon - May 25, 2025"
    },
    "strategic-portfolio-management": {
        "title": "Strategic Portfolio Management",
        "subtitle": "Coming Soon - June 25, 2025"
    },
    "integrated-risk-management": {
        "title": "Integrated Risk Management",
        "subtitle": "Coming Soon - July 25, 2025"
    },
    "ai-and-genai": {
        "title": "AI and GenAI",
        "subtitle": "Coming Soon - August 25, 2025"
    },
    "strategic-planning": {
        "title": "Strategic Planning",
        "subtitle": "Coming Soon - September 25, 2025"
    }
}