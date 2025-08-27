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
        }
    };

    useEffect(() => {
        if (paper && data[paper]) {
            setArticle(data[paper].file);
            setDocumentTitle(data[paper].title);
        }
    }, [paper]);

    return (
        <div className="min-h-screen p-8 text-white mt-20">
            <h1 className="text-4xl mb-4 text-white">{documentTitle}</h1>
            {article ? (
                <div className="w-full h-[80vh] border-2 border-zinc-500 rounded-lg overflow-hidden">
                    <iframe
                        src={article}
                        title={documentTitle}
                        className="h-full w-full border-none"
                        allow="fullscreen"
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-[80vh] mt-0 text-white text-center">
                    <h2 className="text-4xl mb-6">Oops! Document not found</h2>
                    <p className="text-md">The requested white paper could not be found.</p>
                </div>
            )}
        </div>
    );
};

export default WhitePaper;
