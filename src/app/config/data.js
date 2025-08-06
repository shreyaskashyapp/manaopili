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
        name:'ITSM',
        categories: [
            {
                name: 'Standard',
                modules: [
                    { name: 'Incident Management', slug: 'incident_management' },
                    { name: 'Problem Management', slug: 'problem_management' },
                    { name: 'Change Management', slug: 'change_management' },
                    { name: 'Release Management', slug: 'release_management' },
                    { name: 'Cost Management', slug: 'cost_management' },
                    { name: 'Asset Management', slug: 'asset_management' },
                    { name: 'Request Management', slug: 'request_management' },
                    { name: 'Walk-Up Experience', slug: 'walk_up_experience' },
                    { name: 'Digital Portfolio Management', slug: 'digital_portfolio_management' },
                    { name: 'Universal Request', slug: 'universal_request' }
                ]
            },
            {
                name: 'Pro',
                modules: [
                    { name: 'Performance Analytics', slug: 'performance_analytics' },
                    { name: 'Digital Product Release', slug: 'digital_product_release' },
                    { name: 'Virtual Agent', slug: 'virtual_agent' },
                    { name: 'Predictive Intelligence', slug: 'predictive_intelligence' },
                    { name: 'Continual Improvement', slug: 'continual_improvement' },
                    { name: 'Vendor Manager Workspace', slug: 'vendor_manager_workspace' },
                    { name: 'Mobile Publishing', slug: 'mobile_publishing' },
                    { name: 'DevOps Change Velocity', slug: 'devops_change_velocity' },
                    { name: 'DevOps Config', slug: 'devops_config' }
                ]
            },
            {
                name: 'Enterprise',
                modules: [
                    { name: 'Workspace Optimization', slug: 'workspace_optimization' },
                    { name: 'Process Mining', slug: 'process_mining' },
                    { name: 'App Engine Starter', slug: 'app_engine_starter' }
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
        name:'CSM',
        categories: [
            {
                name: 'Standard',
                modules: [
                    { name: 'Agent Workspace', slug: 'agent_workspace' },
                    { name: 'Case Management', slug: 'case_management' },
                    { name: 'Omnichannel', slug: 'omnichannel' },
                    { name: 'Self-Service', slug: 'self_service' },
                    { name: 'Knowledge Management', slug: 'knowledge_management' },
                    { name: 'Walk-Up Experience for CSM', slug: 'walk_up_experience_for_csm' },
                    { name: 'Service Management For Issue Resolution', slug: 'service_management_for_issue_resolution' },
                    { name: 'Advanced Work Assignment', slug: 'advanced_work_assignment' },
                    { name: 'Engagement Messenger', slug: 'engagement_messenger' },
                    { name: 'Digital Portfolio Management', slug: 'digital_portfolio_management' },
                ]
            },
            {
                name: 'Pro',
                modules: [
                    { name: 'Proactive Customer Service Operations', slug: 'proactive_customer_service_operations' },
                    { name: 'Task Intelligence', slug: 'task_intelligence' },
                    { name: 'Performance Analytics', slug: 'performance_analytics' },
                    { name: 'Virtual Agent', slug: 'virtual_agent' },
                    { name: 'Outsource Customer Service', slug: 'outsource_customer_service' },
                    { name: 'Continual Improvement Management', slug: 'continual_improvement_management' },
                    { name: 'Vendor Management Workspace', slug: 'vendor_management_workspace' },
                    { name: 'DevOps', slug: 'devops' },
                    { name: 'Now Assist for CSM', slug: 'now_assist_for_csm' },
                ]
            },
            {
                name: 'Enterprise',
                modules: [
                    { name: 'Workforce Optimization', slug: 'workforce_optimization' },
                    { name: 'Process Mining', slug: 'process_mining' },
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
        name:'ITOM',
        "categories": [
            {
                "name": "ITOM Visibility",
                "modules": [
                    { "name": "Discovery", "slug": "discovery" },
                    { "name": "Service Mapping", "slug": "service_mapping" },
                    { "name": "Service Graph Connectors", "slug": "service_graph_connectors" },
                    { "name": "CMDB Data Manager", "slug": "cmdb_data_manager" },
                    { "name": "MID Server (Management, Instrumentation, and Discovery)", "slug": "mid_server" },
                    { "name": "Credential Management", "slug": "credential_management" },
                    { "name": "Discovery Schedules & Patterns", "slug": "discovery_schedules_patterns" },
                    { "name": "Application Services", "slug": "application_services" }
                ]
            },
            {
                "name": "ITOM Health",
                "modules": [
                    { "name": "Event Management", "slug": "event_management" },
                    { "name": "Operational Intelligence / Metric Intelligence", "slug": "operational_intelligence" },
                    { "name": "Health Log Analytics (HLA)", "slug": "health_log_analytics" },
                    { "name": "Service Health Dashboard", "slug": "service_health_dashboard" },
                    { "name": "Alert Management", "slug": "alert_management" },
                    { "name": "Connector Integrations", "slug": "connector_integrations" },
                    { "name": "Impact Analysis (via Service Mapping)", "slug": "impact_analysis" }
                ]
            },
            {
                "name": "ITOM Optimization",
                "modules": [
                    { "name": "Cloud Managament", "slug": "cloud_management" },
                    { "name": "Cloud Insights", "slug": "cloud_insights" },
                    { "name": "Cloud Resource Optimization", "slug": "cloud_resource_optimization" },
                    { "name": "Application Service Monitoring", "slug": "application_service_monitoring" },
                    { "name": "Predictive AIOps (Advanced Intelligance)", "slug": "predictive_aiops" },
                    { "name": "Automated Remediation", "slug": "automated_remediation" },
                    { "name": "Runbook Automation (via Integration Hub)", "slug": "runbook_automation" }
                ]
            }
        ]
    },
    "strategic-portfolio-management": {
        "title": "SPM Modules",
        "subtitle": "Optimize your Strategic Portfolio Management",
        "header": "Technology Workflows (SPM)",
         "types": [
            'Standard',
            'Pro',
            'Enterprise'
        ],
        name:"SPM",
        "categories": [
            {
                "name": "Standard",
                "modules": [
                    { "name": "Project Portfolio Management", "slug": "project_portfolio_management" },
                    { "name": "Resource Management", "slug": "resource_management" },
                    { "name": "Demand Management", "slug": "demand_management" },
                    { "name": "Time Card Management", "slug": "time_card_management" },
                    { "name": "Basic Financial Planning (Cost Plans, Budgets)", "slug": "basic_financial_planning" }
                ]
            },
            {
                "name": "Pro",
                "modules": [
                    { "name": "Agile Development 2.0", "slug": "agile_development_2" },
                    { "name": "SAFe Support & Hybrid Project Planning", "slug": "safe_hybrid_project_planning" },
                    { "name": "Application Portfolio Management (APM)", "slug": "application_portfolio_management" },
                    { "name": "Financial Planning & Cost Modeling", "slug": "financial_planning_cost_modeling" },
                    { "name": "Program Management Workspace", "slug": "program_management_workspace" },
                    { "name": "Performance Analytics for SPM", "slug": "performance_analytics_spm" },
                    { "name": "Integration with DevOps", "slug": "integration_with_devops" }
                ]
            },
            {
                "name": "Enterprise",
                "modules": [
                    { "name": "Digital Portfolio Management", "slug": "digital_portfolio_management" },
                    { "name": "Objectives and Key Results (OKRs)", "slug": "objectives_key_results" },
                    { "name": "Strategic Planning Workspace", "slug": "strategic_planning_workspace" },
                    { "name": "Innovation Management", "slug": "innovation_management" },
                    { "name": "Advanced Financial Planning (e.g., scenario modeling)", "slug": "advanced_financial_planning" },
                    { "name": "Now Assist for SPM (GenAI features)", "slug": "now_assist_spm" },
                    { "name": "Agentic Workflows for proactive guidance", "slug": "agentic_workflows_guidance" }
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