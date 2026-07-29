'use client'

import { useState, useEffect } from 'react';

export default function WhyManaopiliWheel() {
    const [rotation, setRotation] = useState(0);
    const [targetRotation, setTargetRotation] = useState(0);
    const [isRotating, setIsRotating] = useState(false);
    const [activeId, setActiveId] = useState('savings');

    const labels = {
        savings: -110,
        experience: -40,
        customerCentric: -200,
        transform: 30,
        technical: -250,
    };

    const rotateToTarget = (newRotation) => {
        const currentRotation = rotation % 360;
        const diff = (newRotation - currentRotation + 540) % 360 - 180;
        setTargetRotation(rotation + diff);
        setIsRotating(true);
    };

    const selectPillar = (id) => {
        setActiveId(id);
        rotateToTarget(labels[id]);
    };

    useEffect(() => {
        if (isRotating && rotation !== targetRotation) {
            const step = (targetRotation - rotation) / 10;
            const timeout = setTimeout(() => {
                setRotation((prevRotation) =>
                    Math.abs(prevRotation - targetRotation) < 1
                        ? targetRotation
                        : prevRotation + step
                );
            }, 30);
            return () => clearTimeout(timeout);
        } else {
            setIsRotating(false);
        }
    }, [rotation, targetRotation, isRotating]);

    const pillars = [
        {
            id: "savings",
            title: "Savings",
            description: "Delivering cost efficiencies through optimized processes.",
        },
        {
            id: "experience",
            title: "Experience",
            description: "Enhancing user and employee experiences across the enterprise.",
        },
        {
            id: "customerCentric",
            title: "Customer Centric",
            description: "Tailoring every solution to your unique needs and goals.",
        },
        {
            id: "transform",
            title: "Transform in Place",
            description: "Driving change without disrupting your business.",
        },
        {
            id: "technical",
            title: "Technical Expertise",
            description: "Leveraging proven skills and innovation for ServiceNow success.",
        },
    ];


    return (
        <section className="bg-transparent flex flex-col lg:flex-row">
            <div className="container mx-auto lg:w-1/2">
                <div className="flex justify-center items-center lg:pl-12">
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto mb-[5%] my-[7%]">
                        {/* Outer circle */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border border-white"></div>

                        {/* Gradient wheel */}
                        <div
                            className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#212121] via-[#455CFF] to-[#ffffff] bg-center bg-cover border border-white z-10 transition-transform duration-100 ease-in-out"
                            style={{ transform: `rotate(${rotation}deg)` }}
                        ></div>

                        {/* Inner circle */}
                        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#141414] border border-white z-20"></div>
                        {/* Center logo */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                            <img src='./Logo_white.png' alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
                        </div>

                        {/* Top indicator */}
                        <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Savings label */}
                        <div
                            className="absolute top-[-25px] md:top-[-40px] left-1/2 transform -translate-x-1/2 text-white text-center font-sans text-[10px] md:text-xl font-normal leading-none cursor-pointer hover:text-[#455cff]"
                            onMouseEnter={() => selectPillar('savings')}
                            onTouchStart={() => selectPillar('savings')}
                        >
                            Savings
                        </div>

                        {/* Right indicator */}
                        <div className="absolute right-[-2.1%] md:right-[-1.5px] top-[32%] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Experience label */}
                        <div
                            className="absolute top-[28%] md:top-[30%] right-[-72px] md:right-[-37%] transform -translate-x-1/2 text-white text-center font-sans text-[10px] md:text-xl font-normal leading-none cursor-pointer hover:text-[#455cff]"
                            onMouseEnter={() => selectPillar('experience')}
                            onTouchStart={() => selectPillar('experience')}
                        >
                            Experience
                        </div>

                        {/* Left indicator */}
                        <div className="absolute top-[32%] left-[7px] md:left-[12.5px] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Customer Centric label */}
                        <div
                            className="absolute top-[32%] left-[-45px] md:left-[-78px] transform -translate-y-1/2 text-white text-center font-sans text-[10px] md:text-xl font-normal leading-none cursor-pointer hover:text-[#455cff]"
                            onMouseEnter={() => selectPillar('customerCentric')}
                            onTouchStart={() => selectPillar('customerCentric')}
                        >
                            Customer <br /> Centric
                        </div>

                        {/* Bottom right indicator */}
                        <div className="absolute top-[83%] right-[10%] md:right-[42px] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Transform in Place label */}
                        <div
                            className="absolute top-[85%] right-[-30px] md:right-[-60px] transform -translate-y-1/2 text-white text-center font-sans text-[10px] md:text-xl font-normal leading-none cursor-pointer hover:text-[#455cff]"
                            onMouseEnter={() => selectPillar('transform')}
                            onTouchStart={() => selectPillar('transform')}
                        >
                            Transform <br /> in Place
                        </div>

                        {/* Bottom left indicator */}
                        <div className="absolute left-[15%] top-[83%] md:left-[56px] transform -translate-x-1/2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Technical Expertise label */}
                        <div
                            className="absolute left-[-30px] md:left-[-48px] top-[80%] text-white text-center font-sans text-[10px] md:text-xl font-normal leading-none cursor-pointer hover:text-[#455cff]"
                            onMouseEnter={() => selectPillar('technical')}
                            onTouchStart={() => selectPillar('technical')}
                        >
                            Technical <br /> Expertise
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 lg:pt-0 lg:w-1/2 flex items-center">
                <div className="w-full px-4 pl-6 lg:pl-20 xl:pl-6">
                    <p className="text-zinc-300 text-base mb-8 leading-relaxed max-w-lg">
                        Five ways we turn your ServiceNow investment into lasting value.
                    </p>
                    <div className="flex flex-col">
                        {pillars.map((pillar) => {
                            const active = activeId === pillar.id;
                            return (
                                <button
                                    key={pillar.id}
                                    type="button"
                                    onClick={() => selectPillar(pillar.id)}
                                    onMouseEnter={() => selectPillar(pillar.id)}
                                    className={`group w-full text-left border-l-2 pl-5 py-3.5 transition-all duration-300 ${active ? "border-[#455cff]" : "border-zinc-800 hover:border-zinc-700"}`}
                                >
                                    <p className={`font-heading text-xl md:text-2xl leading-snug transition-colors duration-300 ${active ? "text-[#455cff]" : "text-zinc-500 group-hover:text-[#e2e2e2]"}`}>
                                        {pillar.title}
                                    </p>
                                    <div
                                        className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}
                                    >
                                        <p className="overflow-hidden text-sm md:text-base leading-relaxed text-gray-300">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
