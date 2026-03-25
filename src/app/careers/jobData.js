export const deptColors = {
  Operations: 'bg-transparent text-gray-300 border border-gray-600',
  Security: 'bg-transparent text-gray-300 border border-gray-600',
  Consulting: 'bg-transparent text-gray-300 border border-gray-600',
  ServiceNow: 'bg-transparent text-gray-300 border border-gray-600',
};

export const jobOpenings = [
  {
    id: 1,
    title: 'Principal Security Architect - Zero Trust & Platform Operations',
    dept: 'Security',
    type: 'Contract (C2C)',
    location: 'Remote (United States / Canada)',
    travel: 'Moderate travel for workshops and key phases',
    description:
      'Lead the technical vision and architecture for Zero Trust and cloud security initiatives across Zscaler and ServiceNow ecosystems.',
    tags: ['Zscaler', 'Zero Trust', 'Architecture', 'ServiceNow', 'SASE'],

    about:
      'This role anchors the Zero Trust and cloud security practice, shaping architecture strategy, enabling presales, mentoring consultants, and defining how Zero Trust integrates with enterprise operations and governance platforms.',

    responsibilities: [
      'Design enterprise Zero Trust architectures using ZIA, ZPA, and ZDX',
      'Define segmentation, identity enforcement, and secure access models',
      'Integrate telemetry into ServiceNow SecOps and governance workflows',
      'Lead architecture workshops and maturity assessments',
      'Support presales and solution positioning',
      'Mentor consultants and define reference architectures',
      'Serve as top escalation point for complex security issues',
      'Contribute to playbooks, whitepapers, and practice standards',
    ],

    requirements: [
      '10+ years in security architecture or cloud security',
      'Hands-on Zero Trust or SASE implementation experience',
      'Deep knowledge of identity-based access and segmentation',
      'Experience integrating with ServiceNow, SIEM, or SOAR',
      'Strong consulting and stakeholder management skills',
      'Experience working in professional services environments',
    ],

    education:
      'Bachelor’s in Computer Science, IT, Engineering, or equivalent experience',

    certifications: [
      'Zscaler Certified Cloud Professional (preferred)',
      'CISSP or SSCP',
      'ISO 27001 Lead Implementer/Auditor',
      'ServiceNow Implementation Specialist',
      'Cloud certifications (AWS/Azure/Cisco/Palo Alto)',
    ],

    compensation: '$195–$225/hour',

    whyJoin: [
      'Shape a growing Zero Trust consulting practice',
      'Influence architecture standards and delivery models',
      'Work closely with leadership and partners',
      'Remote-first flexible culture',
      'Strong thought leadership opportunities',
    ],
  },

  {
    id: 2,
    title: 'Zscaler / Platform Security Consultant (United States)',
    dept: 'Consulting',
    type: 'Contract (C2C)',
    location: 'Remote (United States)',
    travel: 'Occasional travel for workshops and kickoffs',
    description:
      'Implement and integrate Zero Trust and cloud security solutions across enterprise transformation programs.',
    tags: ['Zscaler', 'Security', 'Consulting', 'Cloud', 'Zero Trust'],

    about:
      'This role combines hands-on delivery with platform integration and governance. Consultants work with enterprise clients and global teams and grow into architect roles over time.',

    responsibilities: [
      'Implement ZIA, ZPA, and ZDX solutions',
      'Lead Zero Trust workshops and segmentation design',
      'Integrate Zscaler with ServiceNow and SIEM platforms',
      'Support pilots and production rollouts',
      'Collaborate with global delivery teams',
      'Develop runbooks and operational documentation',
      'Support presales and architecture discussions',
      'Contribute to delivery accelerators and methodologies',
    ],

    requirements: [
      '5+ years in network, cloud, or security engineering',
      'Strong networking and Zero Trust fundamentals',
      'Hands-on enterprise security platform experience',
      'Experience integrating with operational platforms',
      'Strong troubleshooting and documentation skills',
      'Consulting environment experience preferred',
    ],

    education:
      'Bachelor’s in Computer Science, IT, Engineering, or equivalent experience',

    certifications: [
      'Zscaler certifications (ZCCP, ZCSA, ZCSE)',
      'ServiceNow certifications (ITSM, SecOps, IRM)',
      'Security certifications (SSCP, CISSP)',
      'ITIL or ISO 27001',
    ],

    growth:
      'Mentorship toward architect roles and cross-platform expertise with certification support.',

    compensation: '$80–$95/hour',

    whyJoin: [
      'Help build a growing Zero Trust practice',
      'Strong certification support',
      'Direct leadership exposure',
      'Work on complex enterprise environments',
      'Remote-first culture',
    ],
  },

  {
    id: 3,
    title: 'Zscaler / Platform Security Consultant (India)',
    dept: 'Consulting',
    type: 'Full-Time / Contract',
    location: 'Remote / Hybrid (India)',
    travel: 'Minimal travel',
    description:
      'Support configuration and integration of Zero Trust solutions as part of global delivery teams.',
    tags: ['Zscaler', 'Security', 'Consulting', 'ServiceNow', 'Global Delivery'],

    experienceLevel: [
      'Junior Consultant (2–3 years)',
      'Consultant (3–5 years)',
      'Senior Consultant (5+ years)',
    ],

    about:
      'Designed for consultants who want to grow from implementation-focused roles into broader solution consulting and architecture tracks.',

    responsibilities: [
      'Configure ZIA, ZPA, and ZDX services',
      'Implement access policies and integrations',
      'Support ServiceNow SecOps integrations',
      'Assist with testing and deployments',
      'Document configurations and workflows',
      'Troubleshoot rollout issues',
      'Collaborate with global teams',
      'Improve delivery playbooks and standards',
    ],

    requirements: [
      '2+ years in network, cloud, or security operations',
      'Basic networking and identity security knowledge',
      'Exposure to Zscaler, VPN, proxy, or cloud security platforms',
      'Strong documentation and troubleshooting skills',
      'Good communication and consulting mindset',
    ],

    education:
      'Bachelor’s in Computer Science, IT, Engineering, or related field',

    certifications: [
      'ZTCA, ZDTA, ZDXA (within 12–18 months)',
      'ZCCP certifications',
      'ServiceNow certifications',
      'Security+ / SSCP / CISSP',
      'ISO 27001 or ITIL',
    ],

    preferred: [
      'ZIA/ZPA configuration experience',
      'ServiceNow exposure',
      'Azure AD / Okta familiarity',
      'SIEM or monitoring exposure',
      'Consulting or MSP experience',
    ],

    whyJoin: [
      'Strong mentorship and career growth',
      'Global enterprise exposure',
      'Architecture growth path',
      'Structured certification support',
      'Collaborative culture',
    ],
  },

  {
    id: 4,
    title: 'ServiceNow Developer',
    dept: 'ServiceNow',
    type: 'Contract (C2C)',
    location: 'Remote (United States)',
    eligibility:
      'Must be authorized to work in the U.S. without sponsorship',
    description:
      'Design and build solutions on the ServiceNow platform to improve workflows, automation, and integrations.',
    tags: ['ServiceNow', 'JavaScript', 'ITSM', 'Automation', 'Integration'],

    about:
      'You will design and implement ServiceNow solutions, working with stakeholders to deliver high-quality applications and automation aligned with business needs.',

    responsibilities: [
      'Develop and customize ServiceNow workflows',
      'Create scripts, business rules, and UI policies',
      'Integrate ServiceNow with external systems',
      'Troubleshoot platform issues',
      'Collaborate with stakeholders on requirements',
      'Participate in testing and releases',
      'Maintain code quality and best practices',
    ],

    requirements: [
      '3+ years ServiceNow development experience',
      '5+ years IT/software development experience',
      'Strong knowledge of ITSM or related modules',
      'JavaScript, REST/SOAP integration skills',
      'Agile methodology familiarity',
      'Strong communication skills',
    ],

    certifications: [
      'CSA (mandatory)',
      'CIS (mandatory)',
      'CAD (preferred)',
      'CTA (preferred)',
      'ITIL certifications',
      'Scrum certifications',
    ],

    compensation: '$65–$100/hour',

    perks: [
      'Flexible remote work',
      'ServiceNow training support',
      'Employee discount programs',
    ],

    whyJoin: [
      'Strong growth culture',
      'High-impact work',
      'Inclusive environment',
      'Career development opportunities',
    ],
  },
];
