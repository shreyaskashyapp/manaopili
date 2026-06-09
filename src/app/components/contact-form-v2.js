'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactFormV2({ formFields, serviceOptions, title = "Connect with us", buttonText = "Get Started Now" }) {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}contact-leads`, formData)
            if (res?.status === 200) {
                setSubmitSuccess(true)
            }
        } catch (err) {
            console.error("Form submission failed", err.message)
            setError("Something went wrong. Please try again or email us directly.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className='bg-white/[0.03] border-white/10 ring-1 ring-white/[0.06] backdrop-blur-xl w-full rounded-2xl shadow-2xl shadow-black/50 flex flex-col p-2'>
            {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 px-6 text-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[#deff00] flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl text-white font-normal">You&apos;re on the list</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                </div>
            ) : (
                <>
                    <CardHeader className='text-white text-xl pb-2'>
                        {title}
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                {formFields.map((item) => (
                                    <div key={item.id} className={`flex flex-col ${item.id === 'message' ? 'md:col-span-full' : ''} gap-2`}>
                                        <Label className='text-[#deff00]'>{item.label}{item.isRequired ? "*" : ''}</Label>
                                        {item.isSelection ? (
                                            <Select onValueChange={(value) => setFormData({ ...formData, [item.id]: value })}>
                                                <SelectTrigger className="bg-white/[0.02] text-white border-white/15 focus:ring-[#deff00]/40 focus:border-[#deff00]/50">
                                                    <SelectValue placeholder="Select Service" className="placeholder:text-zinc-200" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-blue-200">
                                                    {serviceOptions.map((opt, idx) => (
                                                        <SelectItem key={idx} value={opt.value}>{opt.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input
                                                onChange={(e) => setFormData({ ...formData, [item.id]: e.target.value })}
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                required={item.isRequired}
                                                className='bg-white/[0.02] placeholder:text-zinc-500 text-sm text-white border-white/15 focus-visible:ring-[#deff00]/40 focus-visible:border-[#deff00]/50 transition-colors'
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            {error && (
                                <p className="text-red-400 text-sm">{error}</p>
                            )}
                            <Button
                                type='submit'
                                disabled={isLoading}
                                className="w-full bg-[#deff00] font-semibold text-black tracking-wide shadow-[0_0_30px_-4px_rgba(222,255,0,0.5)] hover:bg-white hover:shadow-[0_0_38px_-2px_rgba(222,255,0,0.65)] transition-all disabled:opacity-60"
                            >
                                {isLoading ? "Submitting…" : buttonText}
                            </Button>
                        </form>
                    </CardContent>
                </>
            )}
        </Card>
    )
}
