'use client'
import React, { useEffect, useState } from "react";
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

        <div className="bg-zinc-900 relative border-none h-full rounded-2xl overflow-hidden hover:-translate-y-2 group shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={post.image || "https://via.placeholder.com/300x200"}
                    alt={post.title}
                    className="object-fill opacity-80 group-hover:scale-105 transition-all duration-300"
                    layout="fill"
                />
            </div>
            <div className="p-4 space-y-3 flex flex-col ">
                {/* <p className="text-sm text-gray-400 mb-1">{post.date}</p> */}
                <div className="">
                    <span
                        className="px-3 py-1 text-xs font-bold rounded-full text-black"
                        style={{ backgroundColor: "#deff00" }}
                    >
                        {post?.category}
                    </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#deff00] text-white">{post.title}</h3>
                <p className="text-gray-500 text-sm md:text-base  line-clamp-2 pb-20">{post.description}</p>
                {isMobile ? (
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-4 py-2 rounded text-sm font-medium bg-[#141414] text-[#deff00] border border-[#deff00] hover:bg-[#deff00] hover:text-black transition-colors duration-300">
                            Download
                        </button>
                    </a>
                ) : (

                    <button onClick={() => router.push(`/white-paper?paper=${post.slug}`)} className="text-[#deff00] bottom-5 absolute flex items-start font-medium text-sm md:text-lg group-hover:underline">
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
        <div className="bg-zinc-900/50 relative border-none h-full rounded-xl overflow-hidden hover:-translate-y-2 group shadow-md transition-all duration-300">
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#deff00] text-white">{video.title}</h3>
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
                <div className="min-h-screen bg-1414 py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Blog Section */}
                        <section className="mb-16">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-4xl font-bold text-white relative">
                                    Latest Blog Posts
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
                                {blogPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>
                        </section>

                        {/* Videos Section */}
                        <section>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-white relative">
                                    Featured Videos
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
                                {videos.map((video) => (
                                    <VideoCard key={video.id} video={video} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <BlogsEmailCollection onGettingEmail={handleSubmit} />
            )}
        </div>
    );
}