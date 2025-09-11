'use client'
import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Building, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import LoadingIndicator from './loader';

const formFields = [
    { 
        id: "name", 
        label: "Name", 
        type: "text", 
        placeholder: "Enter your full name", 
        isRequired: true,
        icon: User
    },
    { 
        id: "email", 
        label: "Email", 
        type: "email", 
        placeholder: "Enter your email address", 
        isRequired: true,
        icon: Mail
    },
    { 
        id: "company", 
        label: "Company Name", 
        type: "text", 
        placeholder: "Enter your company name", 
        isRequired: true,
        icon: Building
    },
    { 
        id: "message", 
        label: "Message", 
        type: "message", 
        placeholder: "Tell us about your project or inquiry...",
        isRequired: false,
        icon: MessageCircle
    }
];

export default function ContactForm() {
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        const newErrors = {};
        formFields.forEach(field => {
            if (field.isRequired && !formData[field.id]?.trim()) {
                newErrors[field.id] = `${field.label} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        try {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitSuccess(true);
            setFormData({});
        } catch (err) {
            console.error('Error submitting application:', err);
        } finally {
            setIsLoading(false);
        }
    }

    const handleInputChange = (fieldId, value) => {
        setFormData({ ...formData, [fieldId]: value });
        // Clear error when user starts typing
        if (errors[fieldId]) {
            setErrors({ ...errors, [fieldId]: '' });
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            {isLoading && <LoadingIndicator size="large" color="lime" />}
            
            {submitSuccess ? (
                <div className="relative">
                    {/* Neon border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#deff00] via-[#00ff88] to-[#deff00] rounded-2xl blur-sm opacity-75 animate-pulse"></div>
                    <div className="relative p-12 max-w-md mx-auto rounded-2xl text-center border border-zinc-800">
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#deff00] rounded-full blur-lg opacity-50 animate-pulse"></div>
                                <div className="relative h-20 w-20 rounded-full bg-gradient-to-r from-[#deff00] to-[#00ff88] flex items-center justify-center">
                                    <CheckCircle className="h-10 w-10 text-black" strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                            Message Sent!
                        </h1>
                        <p className="text-lg mb-8 text-zinc-300 leading-relaxed">
                            Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                        </p>
                        <Button
                            onClick={() => setSubmitSuccess(false)} 
                            className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-8 rounded-lg border border-zinc-600 hover:border-[#deff00]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#deff00]/10"
                        >
                            Send Another Message
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-2xl relative">
                    {/* Animated neon border */}
                    <Card className="relative border-none bg-zinc-900/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                        {/* Header with gradient background */}
                        <div className="relative pt-8">
                            <CardHeader className="relative p-0">
                                <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mb-2">
                                    Connect With Our Team
                                </h2>
                                <p className="text-center text-zinc-400 text-base">
                                    Let us discuss your project and bring your vision to life
                                </p>
                            </CardHeader>
                        </div>

                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {formFields.map((field) => {
                                    const Icon = field.icon;
                                    return (
                                        <div key={field.id} className="group">
                                            <Label
                                                htmlFor={field.id} 
                                                className="text-zinc-200 font-medium flex items-center gap-1 mb-3"
                                            >
                                                <Icon className="w-4 h-4 mr-1 text-[#deff00]" />
                                                {field.label}
                                                {field.isRequired && (
                                                    <span className="text-[#deff00] text-sm">*</span>
                                                )}
                                            </Label>
                                            
                                            <div className="relative">
                                                {field.type === "message" ? (
                                                    <Textarea
                                                        id={field.id}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.id] || ''}
                                                        className={`transition-all duration-200 hover:border-[#deff00]/50 bg-transparent border-gray-600 group-focus-within:border-[#deff00] ${errors[field.id] ? 'border-red-500 ring-red-500/20' : ''}`}
                                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                        rows={4}
                                                    />
                                                ) : (
                                                    <Input
                                                        id={field.id}
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.id] || ''}
                                                        required={field.isRequired}
                                                        className={`transition-all duration-200 hover:border-[#deff00]/50 bg-transparent border-gray-600 group-focus-within:border-[#deff00] ${errors[field.id] ? 'border-red-500 ring-red-500/20' : ''}`}
                                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                    />
                                                )}
                                                
                                                {errors[field.id] && (
                                                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                                        <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                                                        {errors[field.id]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                                
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-lg h-14 rounded-lg border border-zinc-600 hover:border-[#deff00]/50 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#deff00]/10"
                                        disabled={isLoading}
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}