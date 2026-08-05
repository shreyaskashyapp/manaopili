'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import YellowArrow from "./yellow-arrow";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";

const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired:true },
    { id: "email", label: "Email", type: "email", placeholder: "Your email",isRequired:true  },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company",isRequired:true  },
    { id: "message", label: "Message", type: "message", placeholder: "Your message" }
];

const fieldClass =
    "border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500 rounded-lg transition-colors duration-200 hover:border-white/20 focus:border-[#455CFF] focus:ring-[#455CFF]/40 focus-visible:ring-[#455CFF]/40";

export default function ContactForm() {
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}contact-leads`, formData);

            if (res?.status === 200) {
                setSubmitSuccess(true);
            } else {
                console.error('Failed to submit application.');
            }
        } catch (err) {
            console.error('Error submitting application:', err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center w-full px-4 pb-6">
            {isLoading && <LoadingIndicator size="large" color="lime" />}
            {submitSuccess ? (
                <div className="w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 text-center text-white">
                    <div className="mb-8 flex justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#455CFF]/40 bg-[#455CFF]/15">
                            <Check className="h-9 w-9 text-[#455CFF]" strokeWidth={3} />
                        </div>
                    </div>
                    <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Message Sent!</h1>
                    <p className="text-base md:text-lg mb-10 text-zinc-400 leading-relaxed max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm tracking-wide text-white backdrop-blur-md ring-1 ring-inset ring-white/10 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15"
                    >
                        Send Another Message
                        <YellowArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                    </button>
                </div>
            ) : (
                <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-10 md:px-12 md:py-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-white">Connect With Our Team</h2>
                    <p className="mt-2 text-sm text-zinc-500">We usually respond within one business day.</p>
                    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                        {formFields.map((field) => (
                            <div key={field.id} className="space-y-2.5">
                                <Label htmlFor={field.id} className="text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                                    {field.label}{field.isRequired ? <span className="text-[#deff00]"> *</span> : null}
                                </Label>
                                {field.type === "message" ? (
                                    <Textarea
                                        id={field.id}
                                        placeholder={field.placeholder}
                                        rows={4}
                                        className={fieldClass}
                                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                    />
                                ) : (
                                    <Input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className={`${fieldClass} py-6`}
                                        required
                                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] py-3.5 text-sm md:text-base tracking-wide text-white backdrop-blur-md ring-1 ring-inset ring-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 hover:ring-[#455CFF]/30"
                        >
                            Submit
                            <YellowArrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
