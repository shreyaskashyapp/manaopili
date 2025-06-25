'use client'
import { useEffect } from "react";

export default function ActivateServer() {
    useEffect(() => {
        async function turnOn() {
            const response = await fetch('https://backend-manaopili.onrender.com/')
            console.log("Server activated.")
            const now = new Date();
            console.log("Current time:", now.toLocaleTimeString());
        }
        turnOn()

    }, [])
    return null
}
