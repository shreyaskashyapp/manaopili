'use client'

import { useState, useEffect } from 'react';

export default function WhyManaopiliWheel() {
    const [rotation, setRotation] = useState(0);
    const [targetRotation, setTargetRotation] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

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

    return (
        <section className="pb-10 md:pb-20">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] mx-auto mb-[5%] md:mb-[8%] mt-[5%] md:mt-[8%]">
                        {/* Outer circle */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border border-white"></div>
                        
                        {/* Gradient wheel */}
                        <div
                            className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#212121] via-[#1e40af] to-[#ffffff] bg-center bg-cover border border-white z-10 transition-transform duration-100 ease-in-out"
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
                            className="absolute top-[-25px] md:top-[-50px] left-1/2 transform -translate-x-1/2 text-white text-center font-sans text-xs md:text-2xl font-normal leading-none cursor-pointer hover:text-[#deff00]"
                            onMouseEnter={() => rotateToTarget(labels.savings)}
                            onTouchStart={() => rotateToTarget(labels.savings)}
                        >
                            Savings
                        </div>

                        {/* Right indicator */}
                        <div className="absolute right-[-2.1%] md:right-[2px] top-[32%] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Experience label */}
                        <div
                            className="absolute top-[32%] md:top-[30%] right-[-90px] md:right-[-36%] transform -translate-x-1/2 text-white text-center font-sans text-xs md:text-2xl font-normal leading-none cursor-pointer hover:text-[#deff00]"
                            onMouseEnter={() => rotateToTarget(labels.experience)}
                            onTouchStart={() => rotateToTarget(labels.experience)}
                        >
                            Experience
                        </div>

                        {/* Left indicator */}
                        <div className="absolute top-[32%] left-[7px] md:left-[15px] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Customer Centric label */}
                        <div
                            className="absolute top-[32%] left-[-55px] md:left-[-120px] transform -translate-y-1/2 text-white text-center font-sans text-xs md:text-2xl font-normal leading-none cursor-pointer hover:text-[#deff00]"
                            onMouseEnter={() => rotateToTarget(labels.customerCentric)}
                            onTouchStart={() => rotateToTarget(labels.customerCentric)}
                        >
                            Customer <br /> Centric
                        </div>

                        {/* Bottom right indicator */}
                        <div className="absolute top-[83%] right-[10%] md:right-[55px] transform -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Transform in Place label */}
                        <div
                            className="absolute top-[85%] right-[-40px] md:right-[-80px] transform -translate-y-1/2 text-white text-center font-sans text-xs md:text-2xl font-normal leading-none cursor-pointer hover:text-[#deff00]"
                            onMouseEnter={() => rotateToTarget(labels.transform)}
                            onTouchStart={() => rotateToTarget(labels.transform)}
                        >
                            Transform <br /> in Place
                        </div>

                        {/* Bottom left indicator */}
                        <div className="absolute left-[15%] top-[83%] md:left-[68px] transform -translate-x-1/2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="50%" cy="50%" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Technical Expertise label */}
                        <div
                            className="absolute left-[-30px] md:left-[-72px] top-[85%] text-white text-center font-sans text-xs md:text-2xl font-normal leading-none cursor-pointer hover:text-[#deff00]"
                            onMouseEnter={() => rotateToTarget(labels.technical)}
                            onTouchStart={() => rotateToTarget(labels.technical)}
                        >
                            Technical <br /> Expertise
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}