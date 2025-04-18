'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";

const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired:true },
    { id: "email", label: "Email", type: "email", placeholder: "Your email",isRequired:true  },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company",isRequired:true  },
    { id: "message", label: "Message", type: "message", placeholder: "Your message" }
];

export default function ContactForm() {
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post('https://manaopili-dashboard.vercel.app/api/lead-collection', formData);
      
            if (res?.data?.message === 'saved') {
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
                <div className="bg-zinc-900 text-white p-8 max-w-3xl mx-auto rounded-lg text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="h-24 w-24 rounded-full bg-[#DEFF00] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
                    <p className="text-lg mb-8 text-gray-300">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                    <Button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-white text-black py-3 px-6 rounded-md font-medium inline-block mt-4 hover:bg-[#deff00] transition-colors"
                    >
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <Card className="w-full max-w-3xl border-none shadow-3xl bg-zinc-900 rounded-lg px-2">
                    <CardHeader className="py-8">
                        <h2 className="text-3xl font-medium text-white">Connect With Our Team</h2>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {formFields.map((field) => (
                                <div key={field.id} className="space-y-2">
                                    <Label htmlFor={field.id} className="text-white text-base">
                                        {field.label}{field.isRequired?" * ":" "}
                                    </Label>
                                    {field.type === "message" ? (
                                        <Textarea
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            className="bg-zinc-900  border-gray-600 focus:border-[#deff00] focus:ring-[#deff00] text-white placeholder:text-gray-400"
                                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                        />
                                    ) : (
                                        <Input
                                            id={field.id}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="bg-zinc-900 border-gray-600 py-6 focus:border-[#deff00] focus:ring-[#deff00] text-white placeholder:text-gray-400"
                                            required
                                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                        />
                                    )}
                                </div>
                            ))}
                            <Button
                                type="submit"
                                className="w-full bg-white hover:bg-[#deff00] text-black font-medium transition-all"
                            >
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}