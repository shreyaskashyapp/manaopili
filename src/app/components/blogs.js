'use client'
import React, { useEffect, useState } from "react";
import BlogsEmailCollection from "../components/blog-email-collection";
import Link from "next/link";
import Image from "next/image";

  
// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Apply FDA Compliance to a ServiceNow Instance",
        description: "Learn how to implement FDA compliance requirements in your ServiceNow instance.",
        image: "/articles/Apply FDA.png",
        slug: "fda-compliance",
        link: "https://manaopili.vercel.app/pdfs/Apply FDA Compliance to a ServiceNow Instance v1.01.pdf",
    },
    {
        id: 2,
        title: "Best Practices Cherwell Migration to ServiceNow",
        description: "A comprehensive guide for migrating from Cherwell to ServiceNow.",
        image: "/articles/Cherwell.png",
        slug: "cherwell-migration",
        link: "https://manaopili.vercel.app/pdfs/Best Practices Cherwell Migration to ServiceNow v1.02.pdf"
    },
    {
        id: 3,
        title: "Best Practices CSDM Migration",
        description: "Updated guidelines for Common Service Data Model migration v1.10.",
        image: "/articles/CSDM.png",
        slug: "csdm-migration-v1-10",
        link: "https://manaopili.vercel.app/pdfs/Best Practices CSDM Migration v1.10.pdf"
    },
    {
        id: 4,
        title: "Best Practices for Code Control, Versioning, Governance, and Collaboration",
        description: "Implementing effective code management in ServiceNow development.",
        image: "/articles/Code Control.png",
        slug: "code-control",
        link: "https://manaopili.vercel.app/pdfs/Best Practices for Code Control, Versioning, Governance, and Collaboration v1.01.pdf"
    },
    {
        id: 5,
        title: "Building a Solid ITOM Mid-Server Architecture",
        description: "Design and implementation guidance for ITOM mid-server architecture.",
        image: "/articles/ITOM MID Server Arch.png",
        slug: "itom-architecture",
        link: "https://manaopili.vercel.app/pdfs/Building a Solid ITOM Mid-Server Architecture v1.01.pdf"
    },
    {
        id: 6,
        title: "Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler",
        description: "Integrating security operations and risk management with Zscaler.",
        image: "/articles/CyberSecurity.png",
        slug: "cybersecurity",
        link: "https://manaopili.vercel.app/pdfs/Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler v1.01.pdf"
    },
    {
        id: 7,
        title: "How ServiceNow AI Boosts Productivity",
        description: "Leveraging AI capabilities in ServiceNow to enhance workflow efficiency.",
        image: "/articles/AI Boosts Productivity.png",
        slug: "ai-boost",
        link: "https://manaopili.vercel.app/pdfs/How ServiceNow AI Boosts Productivity (Without Taking Your Job) v1.02.pdf"
    },
    {
        id: 8,
        title: "How to Improve Performance and UX",
        description: "Optimization techniques for ServiceNow performance and user experience.",
        image: "/articles/Performance.png",
        slug: "performance-ux",
        link: "https://manaopili.vercel.app/pdfs/How to Improve Performance and UX v1.01.pdf"
    },
    {
        id: 9,
        title: "Making the Most of ServiceNow Service Bridge",
        description: "Best practices for integrating multiple ServiceNow instances with Service Bridge.",
        image: "/articles/Service Bridge.png",
        slug: "service-bridge",
        link: "https://manaopili.vercel.app/pdfs/Making the Most of ServiceNow Service Bridge for Integrating Multiple ServiceNow Instances v1.00.pdf"
    },
    {
        id: 10,
        title: "Maximizing ServiceNow Investment for Public Sector",
        description: "Updated approaches for public sector ServiceNow optimization.",
        image: "/articles/Public Sector.png",
        slug: "public-sector-v1-04",
        link: "https://manaopili.vercel.app/pdfs/Maximizing ServiceNow Investment for Public Sector Agencies with Limited Budgets v1.04.pdf"
    },
    {
        id: 11,
        title: "Mulesoft vs Integration Hub",
        description: "Comparative analysis of Mulesoft and ServiceNow Integration Hub capabilities.",
        image: "/articles/Mulesoft.png",
        slug: "mulesoft-hub",
        link: "https://manaopili.vercel.app/pdfs/Mulesoft vs Integration Hub v1.01.pdf"
    },
    {
        id: 12,
        title: "Scaled Agile - ServiceNow and Scrum of Scrums",
        description: "Implementing Scaled Agile Framework with ServiceNow and SoS methodology.",
        image: "/articles/Scaled Agile.png",
        slug: "scaled-agile",
        link: "https://manaopili.vercel.app/pdfs/Scaled Agile - ServiceNow and Scrum of Scrums (SoS) v1.02.pdf"
    },
    {
        id: 13,
        title: "Service Portal vs Employee Center",
        description: "Comparing ServiceNow's Service Portal and Employee Center interfaces.",
        image: "/articles/Service Portal.png",
        slug: "service-portal",
        link: "https://manaopili.vercel.app/pdfs/Service Portal vs Employee Center v1.01.pdf"
    },
    {
        id: 14,
        title: "ServiceNow Team Building",
        description: "Strategies for building effective ServiceNow implementation teams.",
        image: "/articles/Team Building.png",
        slug: "team-building",
        link: "https://manaopili.vercel.app/pdfs/ServiceNow Team Building v1.01.pdf"
    },
    {
        id: 15,
        title: "The Hidden Costs of ServiceNow Accelerators",
        description: "Understanding the true cost implications of using ServiceNow accelerators.",
        image: "/articles/Accelerators.png",
        slug: "hidden-costs",
        link: "https://manaopili.vercel.app/pdfs/The Hidden Costs of ServiceNow Accelerators v1.01.pdf"
    },
    {
        id: 16,
        title: "The Real Deal on ServiceNow Automated Testing Framework",
        description: "In-depth analysis of ServiceNow's ATF capabilities and limitations.",
        image: "/articles/ATF.png",
        slug: "automated-testing",
        link: "https://manaopili.vercel.app/pdfs/The Real Deal on ServiceNow Automated Testing Framework v1.01.pdf"
    },
    {
        id: 17,
        title: "Top 10 Technologies ServiceNow ITOM Won't Discover",
        description: "Understanding the limitations of ServiceNow's discovery capabilities.",
        image: "/articles/ITOM Top 10.png",
        slug: "top-technologies",
        link: "https://manaopili.vercel.app/pdfs/Top 10 Technologies ServiceNow ITOM Won't Discover v1.01.pdf"
    }
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
];

// Blog Card Component
const BlogCard = ({ post }) => {
    const isMobile = usePlatform();

    return (
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(222,255,0,0.5)] transition-all duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={post.image || "https://via.placeholder.com/300x200"}
                    alt={post.title}
                    className="object-fill opacity-80 hover:opacity-100 transition-opacity"
                    layout="fill"
                />
            </div>
            <div className="p-4">
                {/* <p className="text-sm text-gray-400 mb-1">{post.date}</p> */}
                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">{post.description}</p>
                {isMobile ? (
                    <a 
                        href={post.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="px-4 py-2 rounded text-sm font-medium bg-black text-[#deff00] border border-[#deff00] hover:bg-[#deff00] hover:text-black transition-colors duration-300 shadow-[0_0_10px_rgba(222,255,0,0.3)] hover:shadow-[0_0_15px_rgba(222,255,0,0.6)]">
                            Download
                        </button>
                    </a>
                ) : (
                    <Link href={`/white-paper?paper=${post.slug}`}>
                        <button className="px-4 py-2 rounded text-sm font-medium bg-black text-[#deff00] border border-[#deff00] hover:bg-[#deff00] hover:text-black transition-colors duration-300 shadow-[0_0_10px_rgba(222,255,0,0.3)] hover:shadow-[0_0_15px_rgba(222,255,0,0.6)]">
                            Read More
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

// Video Card Component
const VideoCard = ({ video }) => {
    return (
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(222,255,0,0.5)] transition-all duration-300">
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
                <h3 className="text-base font-medium mb-1 line-clamp-2 text-white">{video.title}</h3>
                <p className="text-sm text-[#deff00]">{video.channel}</p>
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

    const handleSubmit = (email, organizationName) => {
        setHasSubmitted(true);
    };

    return (
        <div>
            {hasSubmitted ? (
                <div className="min-h-screen bg-1414 py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Blog Section */}
                        <section className="mb-16">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-white relative">
                                    Latest Blog Posts
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#deff00] shadow-[0_0_10px_rgba(222,255,0,0.7)]"></span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#deff00] shadow-[0_0_10px_rgba(222,255,0,0.7)]"></span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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