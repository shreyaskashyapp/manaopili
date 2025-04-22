'use client'
import React, { useEffect, useState } from "react";
import BlogsEmailCollection from "../components/blog-email-collection";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// Import images
// import acceleratorsImage from "/articles/Accelerators.png";
// import aiBoostsProductivityImage from "/articles/AI Boosts Productivity.png";
// import applyFdaImage from "/articles/Apply FDA.png";
// import atfImage from "/articles/ATF.png";
// import cherwellImage from "/articles/Cherwell.png";
// import codeControlImage from "/articles/Code Control.png";
// import csdmImage from "/articles/CSDM.png";
// import cyberSecurityImage from "/articles/CyberSecurity.png";
// import itomMidServerArchImage from "/articles/ITOM MID Server Arch.png";
// import itomTop10Image from "/articles/ITOM Top 10.png";
// import mulesoftImage from "/articles/Mulesoft.png";
// import performanceImage from "/articles/Performance.png";
// import publicSectorImage from "/articles/Public Sector.png";
// import scaledAgileImage from "/articles/Scaled Agile.png";
// import serviceBridgeImage from "/articles/Service Bridge.png";
// import servicePortalImage from "/articles/Service Portal.png";
// import teamBuildingImage from "/articles/Team Building.png";
// import usePlatform from "../hooks/usePlatform";
// import s from "services_bg.png";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Apply FDA Compliance to a ServiceNow Instance",
        description: "Learn how to implement FDA compliance requirements in your ServiceNow instance.",
        date: "January 2023",
        image: "/articles/Apply FDA.png",
        slug: "fda-compliance",
        link: `https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuRI3SaaGnO4tX5c1MYSNQ29ElTkvL0hxUdJeZ`,
    },
    {
        id: 2,
        title: "Best Practices Cherwell Migration to ServiceNow",
        description: "A comprehensive guide for migrating from Cherwell to ServiceNow.",
        date: "February 2023",
        image: "/articles/Cherwell.png",
        slug: "cherwell-migration",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuSO71QsDKhfnWVQK20j1T3vNmJeLxoRGdFZsk"
    },
    {
        id: 3,
        title: "Best Practices CSDM Migration",
        description: "Updated guidelines for Common Service Data Model migration v1.10.",
        date: "April 2023",
        image: "/articles/CSDM.png",
        slug: "csdm-migration-v1-10",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOumuLif4oQ36NmFHvkCxSWqn8aLErO5DoVgzbu    "
    },
    {
        id: 4,
        title: "Best Practices for Code Control, Versioning, Governance, and Collaboration",
        description: "Implementing effective code management in ServiceNow development.",
        date: "May 2023",
        image: "/articles/Code Control.png",
        slug: "code-control",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOu7wCakIGUa8Bmz4h6Fl2XLsCfcu3DIotMxHPn"
    },
    {
        id: 5,
        title: "Building a Solid ITOM Mid-Server Architecture",
        description: "Design and implementation guidance for ITOM mid-server architecture.",
        date: "June 2023",
        image: "/articles/ITOM MID Server Arch.png",
        slug: "itom-architecture",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOudXe7m7BLSiULVQJhaFTnGCHNY4X9f8g7Eu1I"
    },
    {
        id: 6,
        title: "Cybersecurity Excellence - ServiceNow SecOps, IRM, & Zscaler",
        description: "Integrating security operations and risk management with Zscaler.",
        date: "July 2023",
        image: "/articles/CyberSecurity.png",
        slug: "cybersecurity",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOukzrHddWA40NJ1V2f7UOPITZlqe9HwazKxYyb"
    },
    {
        id: 7,
        title: "How ServiceNow AI Boosts Productivity",
        description: "Leveraging AI capabilities in ServiceNow to enhance workflow efficiency.",
        date: "August 2023",
        image: "/articles/AI Boosts Productivity.png",
        slug: "ai-boost",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuQdbRrVzBlJLrCZVFI7UoTz0antwpd2Wvjfb9"
    },
    {
        id: 8,
        title: "How to Improve Performance and UX",
        description: "Optimization techniques for ServiceNow performance and user experience.",
        date: "September 2023",
        image: "/articles/Performance.png",
        slug: "performance-ux",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuyFtc9XrLFb9MyiH5G4JWRCYX3pws8NOqemva"
    },
    {
        id: 9,
        title: "Making the Most of ServiceNow Service Bridge",
        description: "Best practices for integrating multiple ServiceNow instances with Service Bridge.",
        date: "October 2023",
        image: "/articles/Service Bridge.png",
        slug: "service-bridge",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOubCa1swDgklKnezGhVL2jRHv5SJrBXi31UdbN"
    },
    {
        id: 10,
        title: "Maximizing ServiceNow Investment for Public Sector",
        description: "Updated approaches for public sector ServiceNow optimization.",
        date: "December 2023",
        image: "/articles/Public Sector.png",
        slug: "public-sector-v1-04",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuakz6GRnhHfe5QcCXUIPiqZJFkV0RoLyw8zKB"
    },
    {
        id: 11,
        title: "Mulesoft vs Integration Hub",
        description: "Comparative analysis of Mulesoft and ServiceNow Integration Hub capabilities.",
        date: "January 2024",
        image: "/articles/Mulesoft.png",
        slug: "mulesoft-hub",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOulG6RkSCOucg3ys7H0dQBjKLzDfZhECWbko28"
    },
    {
        id: 12,
        title: "Scaled Agile - ServiceNow and Scrum of Scrums",
        description: "Implementing Scaled Agile Framework with ServiceNow and SoS methodology.",
        date: "February 2024",
        image: "/articles/Scaled Agile.png",
        slug: "scaled-agile",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuMrZnvuHKIs3i4r1RDNx6bCmu8ngTFhSekPta"
    },
    {
        id: 13,
        title: "Service Portal vs Employee Center",
        description: "Comparing ServiceNow's Service Portal and Employee Center interfaces.",
        date: "March 2024",
        image: "/articles/Service Portal.png",
        slug: "service-portal",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOunUpLFp8cu1leoWSVyXZOIwKtUm5vTFRjqBhG"
    },
    {
        id: 14,
        title: "ServiceNow Team Building",
        description: "Strategies for building effective ServiceNow implementation teams.",
        date: "April 2024",
        image: "/articles/Team Building.png",
        slug: "team-building",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuRMqJuWnO4tX5c1MYSNQ29ElTkvL0hxUdJeZq"
    },
    {
        id: 15,
        title: "The Hidden Costs of ServiceNow Accelerators",
        description: "Understanding the true cost implications of using ServiceNow accelerators.",
        date: "May 2024",
        image: "/articles/Accelerators.png",
        slug: "hidden-costs",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuBctaRdbsJnWSL7QIRXqalDEvbFCOH8heiKtN"
    },
    {
        id: 16,
        title: "The Real Deal on ServiceNow Automated Testing Framework",
        description: "In-depth analysis of ServiceNow's ATF capabilities and limitations.",
        date: "June 2024",
        image: "/articles/ATF.png",
        slug: "automated-testing",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOuN25SG8mKRFXruB8dIci4Hlav5CY1TU7kAwjS"
    },
    {
        id: 17,
        title: "Top 10 Technologies ServiceNow ITOM Won't Discover",
        description: "Understanding the limitations of ServiceNow's discovery capabilities.",
        date: "July 2024",
        image: "/articles/ITOM Top 10.png",
        slug: "top-technologies",
        link: "https://8uabsc7qtv.ufs.sh/f/DZpkmIwNJSOu76drZFbGUa8Bmz4h6Fl2XLsCfcu3DIotMxHP"
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
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
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
    const router = useRouter();
    const params = useSearchParams();
    const redirectionUrl = params.get('redirectTo')

    const handleSubmit = (email, organizationName) => {
        setHasSubmitted(true);
        if (redirectionUrl) {
            router.push(`white-paper?paper=${redirectionUrl}`)
        }

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