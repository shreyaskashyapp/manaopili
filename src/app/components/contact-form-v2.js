'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactFormV2({ formFields, serviceOptions }) {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}contact-leads`, formData)
            if (res?.status === 200) {
                setSubmitSuccess(true)
            }
        } catch (err) {
            console.error("Form submission failed", err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full">
            {isLoading && <LoadingIndicator size="large" color="[#deff00]" />}

            {submitSuccess ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-[#deff00] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                        Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-white text-black hover:bg-[#deff00] font-medium transition-colors"
                    >
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                    <p className="text-white font-semibold text-xl mb-6" style={{ letterSpacing: "-0.01em" }}>
                        Connect with us
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            {formFields.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex flex-col gap-1.5 ${item.id === 'message' ? 'md:col-span-full' : ''}`}
                                >
                                    <Label className="text-xs text-zinc-300 font-medium tracking-wide">
                                        {item.label}{item.isRequired ? ' *' : ''}
                                    </Label>

                                    {item.isSelection ? (
                                        <Select onValueChange={(value) => setFormData({ ...formData, [item.id]: value })}>
                                            <SelectTrigger className="bg-white/5 border-white/15 text-white hover:border-[#deff00]/50 focus:border-[#deff00] transition-colors h-10 text-sm">
                                                <SelectValue placeholder="Select service" className="text-zinc-400" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a2e] border-white/10">
                                                {serviceOptions.map((opt, idx) => (
                                                    <SelectItem key={idx} value={opt.value} className="text-zinc-300 focus:bg-white/10 focus:text-zinc-300 text-sm">
                                                        {opt.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    ) : item.type === 'message' ? (
                                        <textarea
                                            onChange={(e) => setFormData({ ...formData, [item.id]: e.target.value })}
                                            placeholder={item.placeholder}
                                            required={item.isRequired}
                                            rows={3}
                                            className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-300 hover:border-[#deff00]/50 focus:border-[#deff00] focus:outline-none transition-colors resize-none"
                                        />
                                    ) : (
                                        <Input
                                            onChange={(e) => setFormData({ ...formData, [item.id]: e.target.value })}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            required={item.isRequired}
                                            className="bg-white/5 border-white/15 text-white placeholder:text-zinc-300 hover:border-[#deff00]/50 focus:border-[#deff00] transition-colors h-10 text-sm"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#deff00] text-black font-semibold hover:bg-[#deff00]/80 transition-all mt-1"
                        >
                            Get Started
                        </Button>
                    </form>
                </div>
            )}
        </div>
    )
}
