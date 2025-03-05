'use client'

import { useState, useEffect } from 'react';
import '../css/circle.css'

export default function WhyManaopiliWheel() {
    const [rotation, setRotation] = useState(0); // Current rotation
    const [targetRotation, setTargetRotation] = useState(0); // Target rotation
    const [isRotating, setIsRotating] = useState(false); // State to track if the rotation is happening
    // Labels and their corresponding rotation angles
    const labels = {
        savings: -110,
        experience: -40,
        customerCentric: -200,
        transform: 30,
        technical: -250,
    };
    // Function to start rotating to a target
    const rotateToTarget = (newRotation) => {
        const currentRotation = rotation % 360; // Normalize current rotation
        const diff = (newRotation - currentRotation + 540) % 360 - 180; // Calculate shortest path to target
        setTargetRotation(rotation + diff); // Set the target rotation to the current rotation + the shortest difference
        setIsRotating(true); // Start rotating
    };
    // Effect to smoothly rotate toward the target rotation
    useEffect(() => {
        if (isRotating && rotation !== targetRotation) {
            const step = (targetRotation - rotation) / 10; // Small steps to smooth the transition
            const timeout = setTimeout(() => {
                setRotation((prevRotation) =>
                    Math.abs(prevRotation - targetRotation) < 1
                        ? targetRotation
                        : prevRotation + step
                );
            }, 30);
            return () => clearTimeout(timeout); // Clean up the timeout
        } else {
            setIsRotating(false); // Stop rotating when target is reached
        }
    }, [rotation, targetRotation, isRotating]);

    return (
        <section className="pb-20 ">
            <div className='container mx-auto gap'>
                <div className='flex justify-center items-center md:gap-2 gap-0 px-3  '>
                    <h2 className="text-5xl font-normal text-[#e2e2e2] text-center pb-2">Why Mana'O Pili?</h2>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className="circle_container">
                        <div className="outer-circle"></div>
                        <div
                            className="inner-circle"
                            style={{ transform: `rotate(${rotation}deg)` }}
                        ></div>
                        <div className="center-circle"></div>
                        <div className="center-logo">
                            <img src='./Logo_white.png' alt="Logo" width="50" height="50" />
                        </div>
                        <div className="outer-circle-dot">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Savings label */}
                        <div
                            className="label savings cursor-pointer hover:text-yellow-text"
                            onMouseEnter={() => rotateToTarget(labels.savings)} // Rotate to the target angle for Savings
                            onTouchStart={() => rotateToTarget(labels.savings)} // Handle mobile touch
                        >
                            Savings
                        </div>

                        <div className="outer-circle-dot2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Experience label */}
                        <div
                            className="label experience cursor-pointer hover:text-yellow-text"
                            onMouseEnter={() => rotateToTarget(labels.experience)} // Rotate to the target angle for Experience
                            onTouchStart={() => rotateToTarget(labels.experience)} // Handle mobile touch
                        >
                            Experience
                        </div>

                        <div className="outer-circle-dot3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Customer-Centric label */}
                        <div
                            className="label customer-centric cursor-pointer hover:text-yellow-text"
                            onMouseEnter={() => rotateToTarget(labels.customerCentric)} // Rotate to the target angle for Customer-Centric
                            onTouchStart={() => rotateToTarget(labels.customerCentric)} // Handle mobile touch
                        >
                            Customer <br /> Centric
                        </div>

                        <div className="outer-circle-dot4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Transform label */}
                        <div
                            className="label transform cursor-pointer hover:text-yellow-text"
                            onMouseEnter={() => rotateToTarget(labels.transform)} // Rotate to the target angle for Transform
                            onTouchStart={() => rotateToTarget(labels.transform)} // Handle mobile touch
                        >
                            Transform <br />
                            in Place
                        </div>

                        <div className="outer-circle-dot5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                            </svg>
                        </div>

                        {/* Technical label */}
                        <div
                            className="label technical cursor-pointer hover:text-yellow-text"
                            onMouseEnter={() => rotateToTarget(labels.technical)} // Rotate to the target angle for Technical
                            onTouchStart={() => rotateToTarget(labels.technical)} // Handle mobile touch
                        >
                            Technical <br />
                            Expertise
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}