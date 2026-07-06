'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const WhitePaper = () => {
    const params = useSearchParams();
    const paper = params.get('paper')

    const [documentTitle, setDocumentTitle] = useState('');
    const [article, setArticle] = useState('');

    const data = {
        'fda-compliance': {
            file: '/pdfs/Apply FDA Compliance to a ServiceNow Instance  v1.01.pdf',
            title: 'Apply FDA Compliance to a ServiceNow Instance'
        },
        'cherwell-migration': {
            file: '/pdfs/Best Practices Cherwell Migration to ServiceNow  v1.02.pdf',
            title: 'Best Practices Cherwell Migration to ServiceNow'
        },
        'csdm-migration-v1-08': {
            file: '/pdfs/Best Practices CSDM Migration v1.08.pdf',
            title: 'Best Practices CSDM Migration v1.08'
        },
        'csdm-migration-v1-10': {
            file: '/pdfs/Best Practices CSDM Migration v1.10.pdf',
            title: 'Best Practices CSDM Migration v1.10'
        },
        'code-control': {
            file: '/pdfs/Best Practices for Code Control, Versioning, Governance, and Collaboration v1.01.pdf',
            title: 'Best Practices for Code Control, Versioning, Governance, and Collaboration'
        },
        'itom-architecture': {
            file: '/pdfs/Building a Solid ITOM Mid-Server Architecture  v1.01.pdf',
            title: 'Building a Solid ITOM Mid-Server Architecture'
        },
        'cybersecurity': {
            file: '/pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler  v1.01.pdf',
            title: 'Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler'
        },
        'ai-boost': {
            file: '/pdfs/How ServiceNow AI Boosts Productivity (Without Taking Your Job)  v1.02.pdf',
            title: 'How ServiceNow AI Boosts Productivity (Without Taking Your Job)'
        },
        'performance-ux': {
            file: '/pdfs/How to Improve Performance and UX  v1.01.pdf',
            title: 'How to Improve Performance and UX'
        },
        'service-bridge': {
            file: '/pdfs/Making the Most of ServiceNow Service Bridge for Integrating Multiple ServiceNow Instances  v1.00.pdf',
            title: 'Making the Most of ServiceNow Service Bridge for Integrating Multiple ServiceNow Instances'
        },
        'public-sector-v1-03': {
            file: '/pdfs/Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.03.pdf',
            title: 'Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.03'
        },
        'public-sector-v1-04': {
            file: '/pdfs/Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.04.pdf',
            title: 'Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.04'
        },
        'mulesoft-hub': {
            file: '/pdfs/Mulesoft vs Integration Hub  v1.01.pdf',
            title: 'Mulesoft vs Integration Hub'
        },
        'scaled-agile': {
            file: '/pdfs/Scaled Agile - ServiceNow and Scrum of Scrums (SoS)  v1.02.pdf',
            title: 'Scaled Agile - ServiceNow and Scrum of Scrums (SoS)'
        },
        'service-portal': {
            file: '/pdfs/Service Portal vs Employee Center  v1.01.pdf',
            title: 'Service Portal vs Employee Center'
        },
        'team-building': {
            file: '/pdfs/ServiceNow Team Building  v1.01.pdf',
            title: 'ServiceNow Team Building'
        },
        'hidden-costs': {
            file: '/pdfs/The Hidden Costs of ServiceNow Accelerators v1.01.pdf',
            title: 'The Hidden Costs of ServiceNow Accelerators'
        },
        'automated-testing': {
            file: '/pdfs/The Real Deal on ServiceNow Automated Testing Framework  v1.01.pdf',
            title: 'The Real Deal on ServiceNow Automated Testing Framework'
        },
        'top-technologies': {
            file: '/pdfs/Top 10 Technologies ServiceNow ITOM Won\'t Discover  v1.01.pdf',
            title: 'Top 10 Technologies ServiceNow ITOM Won\'t Discover'
        },
        'csdm-migration-5': {
            file: '/pdfs/Best Practices Implementing & Migration to CSDM 5 v1.0.pdf',
            title: 'Best Practice Implementing and Migrating to CSDM 5'
        },
        'cybersecurity-excellence': {
            file: '/pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Tanium  v1.00.pdf',
            title: 'Cybersecurity Excellence - ServiceNow SecOps, IRM, & Tanium'
        },
        'preventing-duplicate-ticket-strategies': {
            file: '/pdfs/Preventing Duplicate Ticket Strategies v1.0.pdf',
            title: 'Preventing Duplicate Ticket Strategies'
        },
        'operationalizing-21-cfr-part-11-servicenow': {
            file: '/pdfs/Operationalizing 21 CFR Part 11 in ServiceNow  v1.0.pdf',
            title: 'Operationalizing 21 CFR Part 11 in ServiceNow'
        },
        'itsm-modernization-healthcare-servicenow': {
            file: '/pdfs/ITSM Modernization Use Case (Healthcare) v1.3.pdf',
            title: 'ITSM Modernization in Healthcare with ServiceNow'
        }
    };


    useEffect(() => {
        if (paper && data[paper]) {
            setArticle(data[paper].file);
            setDocumentTitle(data[paper].title);
        }
    }, [paper]);

    return (
        <div className="min-h-screen bg-[#141414] p-8 text-white pt-28 md:pt-32">
            <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#455CFF]">White Paper</p>
            <h1 className="font-heading mb-6 text-3xl font-light leading-tight text-white md:text-4xl">{documentTitle}</h1>
            {article ? (
                <div className="h-[80vh] w-full overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30">
                    <iframe
                        src={article}
                        title={documentTitle}
                        className="h-full w-full border-none"
                        allow="fullscreen"
                    />
                </div>
            ) : (
                <div className="mt-0 flex h-[70vh] flex-col items-center justify-center text-center text-white">
                    <h2 className="font-heading mb-6 text-4xl font-light">Oops! Document not found</h2>
                    <p className="text-md mb-8 text-zinc-400">The requested white paper could not be found.</p>
                    <a
                        href="/expert-guides"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm tracking-wide text-white backdrop-blur-md ring-1 ring-inset ring-white/10 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15"
                    >
                        Browse Expert Guides
                    </a>
                </div>
            )}
        </div>
    );
};

export default WhitePaper;
