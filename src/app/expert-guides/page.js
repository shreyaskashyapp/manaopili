'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BlogsEmailCollection from "../components/blog-email-collection";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { checkIfMobile } from "@/lib/utils";


// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Apply FDA Compliance to a ServiceNow Instance",
        description: "Learn how to implement FDA compliance requirements in your ServiceNow instance.",
        image: "/articles/Apply FDA.png",
        slug: "fda-compliance",
        link: "pdfs/Apply FDA Compliance to a ServiceNow Instance  v1.01.pdf",
        category: "Compliance"
    },
    {
        id: 2,
        title: "Best Practices Cherwell Migration to ServiceNow",
        description: "A comprehensive guide for migrating from Cherwell to ServiceNow.",
        image: "/articles/Cherwell.png",
        slug: "cherwell-migration",
        link: "pdfs/Best Practices Cherwell Migration to ServiceNow  v1.02.pdf",
        category: "Migration"
    },
    {
        id: 3,
        title: "Best Practices CSDM Migration",
        description: "Updated guidelines for Common Service Data Model migration v1.10.",
        image: "/articles/CSDM.png",
        slug: "csdm-migration-v1-10",
        link: "pdfs/Best Practices CSDM Migration v1.10.pdf",
        category: "Migration"
    },
    {
        id: 4,
        title: "Best Practices for Code Control, Versioning, Governance, and Collaboration",
        description: "Implementing effective code management in ServiceNow development.",
        image: "/articles/Code Control.png",
        slug: "code-control",
        link: "pdfs/Best Practices for Code Control, Versioning, Governance, and Collaboration v1.01.pdf",
        category: "Development"
    },
    {
        id: 5,
        title: "Building a Solid ITOM Mid-Server Architecture",
        description: "Design and implementation guidance for ITOM mid-server architecture.",
        image: "/articles/ITOM MID Server Arch.png",
        slug: "itom-architecture",
        link: "pdfs/Building a Solid ITOM Mid-Server Architecture  v1.01.pdf",
        category: "ITOM"
    },
    {
        id: 6,
        title: "Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler",
        description: "Integrating security operations and risk management with Zscaler.",
        image: "/articles/CyberSecurity.png",
        slug: "cybersecurity",
        link: "pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler  v1.01.pdf",
        category: "CyberSecurity"
    },
    {
        id: 7,
        title: "How ServiceNow AI Boosts Productivity",
        description: "Leveraging AI capabilities in ServiceNow to enhance workflow efficiency.",
        image: "/articles/AI Boosts Productivity.png",
        slug: "ai-boost",
        link: "pdfs/How ServiceNow AI Boosts Productivity (Without Taking Your Job)  v1.02.pdf",
        category: "AI"
    },
    {
        id: 8,
        title: "How to Improve Performance and UX",
        description: "Optimization techniques for ServiceNow performance and user experience.",
        image: "/articles/Performance.png",
        slug: "performance-ux",
        link: "pdfs/How to Improve Performance and UX  v1.01.pdf",
        category: "Performance"
    },
    {
        id: 9,
        title: "Making the Most of ServiceNow Service Bridge",
        description: "Best practices for integrating multiple ServiceNow instances with Service Bridge.",
        image: "/articles/Service Bridge.png",
        slug: "service-bridge",
        link: "pdfs/Making the Most of ServiceNow Service Bridge for Integrating Multiple ServiceNow Instances  v1.00.pdf",
        category: "Integration"
    },
    {
        id: 10,
        title: "Maximizing ServiceNow Investment for Public Sector",
        description: "Updated approaches for public sector ServiceNow optimization.",
        image: "/articles/Public Sector.png",
        slug: "public-sector-v1-04",
        link: "pdfs/Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.04.pdf",
        category: "Public Sector"
    },
    {
        id: 11,
        title: "Mulesoft vs Integration Hub",
        description: "Comparative analysis of Mulesoft and ServiceNow Integration Hub capabilities.",
        image: "/articles/Mulesoft.png",
        slug: "mulesoft-hub",
        link: "pdfs/Mulesoft vs Integration Hub  v1.01.pdf",
        category: "Integration"
    },
    {
        id: 12,
        title: "Scaled Agile - ServiceNow and Scrum of Scrums",
        description: "Implementing Scaled Agile Framework with ServiceNow and SoS methodology.",
        image: "/articles/Scaled Agile.png",
        slug: "scaled-agile",
        link: "pdfs/Scaled Agile - ServiceNow and Scrum of Scrums (SoS)  v1.02.pdf",
        category: "Agile"
    },
    {
        id: 13,
        title: "Service Portal vs Employee Center",
        description: "Comparing ServiceNow's Service Portal and Employee Center interfaces.",
        image: "/articles/Service Portal.png",
        slug: "service-portal",
        link: "pdfs/Service Portal vs Employee Center  v1.01.pdf",
        category: "UX"
    },
    {
        id: 14,
        title: "ServiceNow Team Building",
        description: "Strategies for building effective ServiceNow implementation teams.",
        image: "/articles/Team Building.png",
        slug: "team-building",
        link: "pdfs/ServiceNow Team Building  v1.01.pdf",
        category: "Management"
    },
    {
        id: 15,
        title: "The Hidden Costs of ServiceNow Accelerators",
        description: "Understanding the true cost implications of using ServiceNow accelerators.",
        image: "/articles/Accelerators.png",
        slug: "hidden-costs",
        link: "pdfs/The Hidden Costs of ServiceNow Accelerators v1.01.pdf",
        category: "Cost Optimization"
    },
    {
        id: 16,
        title: "The Real Deal on ServiceNow Automated Testing Framework",
        description: "In-depth analysis of ServiceNow's ATF capabilities and limitations.",
        image: "/articles/ATF.png",
        slug: "automated-testing",
        link: "pdfs/The Real Deal on ServiceNow Automated Testing Framework  v1.01.pdf",
        category: "Testing"
    },
    {
        id: 17,
        title: "Top 10 Technologies ServiceNow ITOM Won't Discover",
        description: "Understanding the limitations of ServiceNow's discovery capabilities.",
        image: "/articles/ITOM Top 10.png",
        slug: "top-technologies",
        link: "pdfs/Top 10 Technologies ServiceNow ITOM Won't Discover  v1.01.pdf",
        category: "ITOM"
    },
    {
        id: 18,
        title: "Best Practice Implementing and Migrating to CSDM 5",
        description: "Practical guidance for adopting and migrating to ServiceNow's CSDM 5 to align business and IT under a unified, future-ready model.",
        image: "/articles/CSDM_5.png",
        slug: "csdm-migration-5",
        link: "pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Tanium  v1.00.pdf",
        category: "CSDM"
    },
    {
        id: 19,
        title: "Cybersecurity Excellence - ServiceNow SecOps, IRM, & Tanium",
        description: "Learn how ServiceNow and Tanium unite to deliver faster remediation, stronger compliance, and real-time cybersecurity.",
        image: "/articles/Tanium Thumbnail.gif",
        slug: "cybersecurity-excellence",
        link: "pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Tanium v1.00.pdf",
        category: "CyberSecurity"
    },
    {
        id: 20,
        title: "Preventing Duplicate Ticket Strategies",
        description: "Learn how to reduce duplicate incidents in ServiceNow using intake deflection, correlation, ITOM, and AI-driven matching to improve MTTR and operational efficiency.",
        image: "/articles/Preventing Duplicate Ticket Strategies.png",
        slug: "preventing-duplicate-ticket-strategies",
        link: "pdfs/Preventing Duplicate Ticket Strategies v1.0.pdf",
        category: "Strategies"
    },
    {
        id: 21,
        title: "Operationalizing 21 CFR Part 11 in ServiceNow",
        description: "A practical guide to implementing audit-defensible electronic records, signatures, and workflows in ServiceNow to meet 21 CFR Part 11 compliance requirements.",
        image: "/articles/operationalizing-fda-21-cfr.gif",
        slug: "operationalizing-21-cfr-part-11-servicenow",
        link: "pdfs/Operationalizing 21 CFR Part 11 in ServiceNow  v1.0.pdf",
        category: "Compliance"
    },
    {
        id: 22,
        title: "ITSM Modernization in Healthcare with ServiceNow",
        description: "Learn how healthcare organizations modernize ITSM using a Transform-in-Place approach—stabilizing CMDB, improving MTTR, and enabling ITOM without disruption.",
        image: "/articles/servicenow-itsm-modernization.gif",
        slug: "itsm-modernization-healthcare-servicenow",
        link: "pdfs/ITSM Modernization Use Case (Healthcare) v1.3.pdf",
        category: "Use Case"
    },
];


// Sample video data
const videos = [
    {
        id: 1,
        title: "Building a High-Performing ServiceNow Team: Roles & Responsibilities Explained",
        channel: "Mana'o Pili",
        videoId: "w-fv9TVR-sA",
    },
    {
        id: 2,
        title: "Digital TRIP",
        channel: "Mana'o Pili",
        videoId: "rqOJ8frCak8",
    },
    {
        id: 3,
        title: "Common CI Classes Hawai'ian Style",
        channel: "Mana'o Pili",
        videoId: "5-nFxPN2YWY",
    },
    {
        id: 4,
        title: "IT Terms - Hawai'ian Style",
        channel: "Mana'o Pili",
        videoId: "krg45uSeOaA",
    },
    {
        id: 5,
        title: "Partnering with the Anahulu Valley Preservation Fund",
        channel: "Mana'o Pili",
        videoId: "Up8LcOVZgAI",
    },
    {
        id: 6,
        title: "The Hidden Costs of ServiceNow Accelerators",
        channel: "Mana'o Pili",
        videoId: "jxn8D-5_m-0",
    },
];


// Blog Card Component
const BlogCard = ({ post }) => {
    const isMobile = usePlatform();
    const router = useRouter();


    return (

        <div className="bg-white/[0.03] border border-white/[0.08] hover:border-[#455CFF]/40 relative h-full rounded-2xl overflow-hidden hover:-translate-y-2 group shadow-lg hover:shadow-[0_12px_40px_rgba(69,92,255,0.12)] transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={post.image || "https://via.placeholder.com/300x200"}
                    alt={post.title}
                    className="object-fill opacity-80 group-hover:scale-105 transition-all duration-500"
                    layout="fill"
                />
            </div>
            <div className="p-4 space-y-3 flex flex-col ">
                {/* <p className="text-sm text-gray-400 mb-1">{post.date}</p> */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#455CFF]">{post?.category}</p>
                <h3 className="font-heading text-xl font-semibold group-hover:text-white text-zinc-200 transition-colors duration-200">{post.title}</h3>
                <p className="text-gray-500 text-sm md:text-base  line-clamp-2 pb-20">{post.description}</p>
                {isMobile ? (
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.06] text-white border border-white/20 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 transition-colors duration-300">
                            Download
                        </button>
                    </a>
                ) : (

                    <button onClick={() => router.push(`/white-paper?paper=${post.slug}`)} className="text-[#455CFF] bottom-5 absolute flex items-start font-medium text-sm md:text-lg underline-offset-4 group-hover:underline">
                        Read More
                    </button>

                )}
            </div>
        </div>

    );
};

// Video Card Component
const VideoCard = ({ video }) => {
    return (
        <div className="bg-white/[0.03] border border-white/[0.08] hover:border-[#455CFF]/40 relative h-full rounded-xl overflow-hidden hover:-translate-y-2 group shadow-md transition-all duration-300">
            <div className="relative aspect-video w-full">
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
            <div className="p-3">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white text-zinc-200 transition-colors duration-200">{video.title}</h3>
                <p className="text-sm text-zinc-500">{video.channel}</p>
                {video.views && video.date && (
                    <p className="text-xs text-gray-400">
                        {video.views} • {video.date}
                    </p>
                )}
            </div>
        </div>
    );
};

// Create a custom hook for platform detection
// This should be in a separate file: hooks/usePlatform.js

function usePlatform() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = window.navigator.userAgent;
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            setIsMobile(mobile);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return isMobile;
}




// ── Content hub (shown after the email gate) ──────────────────────────────
const gridContainer = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const gridItem = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ContentHub() {
    const reduceMotion = useReducedMotion();
    const [tab, setTab] = useState("articles");

    // Cards animate in on MOUNT (not whileInView) so the first screenful is
    // always visible immediately — this is the fix for "loads only after scroll".
    const Grid = ({ items, render }) =>
        reduceMotion ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {items.map(render)}
            </div>
        ) : (
            <motion.div
                variants={gridContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
                {items.map((item) => (
                    <motion.div key={item.id} variants={gridItem}>
                        {render(item)}
                    </motion.div>
                ))}
            </motion.div>
        );

    const tabs = [
        { id: "articles", label: "Articles", count: blogPosts.length },
        { id: "videos", label: "Videos", count: videos.length },
    ];

    return (
        <div className="min-h-screen bg-[#141414]">
            {/* Compact header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-6 md:pt-32">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#455CFF] mb-3">Resources</p>
                <h1 className="font-heading text-4xl md:text-6xl font-light text-white leading-tight">Expert Guides</h1>
                <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
                    Articles, playbooks, and videos on getting more out of your ServiceNow investment.
                </p>
            </div>

            {/* Sticky tab switch */}
            <div className="sticky top-20 z-30 bg-[#141414]/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-baseline gap-8">
                        {tabs.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`font-heading text-xl md:text-2xl tracking-wide transition-colors ${
                                    tab === t.id ? "text-white" : "text-zinc-600 hover:text-zinc-300"
                                }`}
                            >
                                {t.label}
                                <span className="ml-1.5 align-top text-[11px] text-zinc-600">{t.count}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Panels */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <AnimatePresence mode="wait">
                    {tab === "articles" ? (
                        <motion.div
                            key="articles"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={reduceMotion ? undefined : { opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Grid items={blogPosts} render={(post) => <BlogCard key={post.id} post={post} />} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="videos"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={reduceMotion ? undefined : { opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Grid items={videos} render={(video) => <VideoCard key={video.id} video={video} />} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function BlogAndVideosPage() {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const router = useRouter();
    const params = useSearchParams();
    const redirectionUrl = params.get('redirectTo')

    const handleSubmit = () => {
        setHasSubmitted(true);
        if (redirectionUrl) {
            if (checkIfMobile()) {
                const pdfLink = blogPosts?.find(post => post.slug === redirectionUrl)?.link;
                if (pdfLink) {
                    setTimeout(() => {
                        window.open(pdfLink, '_blank')
                    })
                }
            }
            else {
                router.push(`white-paper?paper=${redirectionUrl}`)
            }
        }
    };

    useEffect(() => {
        if (sessionStorage.getItem('email') &&
            sessionStorage.getItem('organisationName')) {
            setHasSubmitted(true)
        }
    }, [])

    return (
        <div>
            {hasSubmitted ? (
                <ContentHub />
            ) : (
                <BlogsEmailCollection onGettingEmail={handleSubmit} />
            )}
        </div>
    );
}