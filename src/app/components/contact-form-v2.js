'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function ContactFormV2({formFields}) {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post('', formData)
            if (res?.status === 200) {
                setFormData({})
            }
        }
        catch (err) {
            console.error("Form submission failed", err.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="h-full w-full mx-auto flex justify-center">
            {isLoading && <LoadingIndicator size="large" color="lime" />}
            <Card className='bg-gray-200/10 border-gray-400 w-full h-full max-w-3xl flex flex-col p-4 '>
                <CardHeader className='text-white text-2xl'>
                    Quick Connect
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {formFields.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2">
                                    <Label className='text-[#deff00]'>{item.label}{item.isRequired ? "*" : ''}</Label>
                                    {item.isSelection ? (
                                            <Select onValueChange={(value) => setFormData({ ...formData, [item.id]: value })}> 
                                                <SelectTrigger className="bg-transparent  text-white border-gray-400">
                                                    <SelectValue placeholder="Select Service" className="placeholder:text-zinc-200"/>
                                                </SelectTrigger>
                                                <SelectContent className="bg-blue-200">
                                                    <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                                    <SelectItem value="strategy-roadmap">ServiceNow Strategy & Roadmap Consulting Services</SelectItem>
                                                    <SelectItem value="implementation">ServiceNow Implementation Services</SelectItem>
                                                    <SelectItem value="custom-app-dev">ServiceNow Custom Application Development (AppEngine) Services</SelectItem>
                                                    <SelectItem value="managed-services">ServiceNow Managed Services</SelectItem>
                                                    <SelectItem value="careers">Careers with Mana'o Pili</SelectItem>
                                                </SelectContent>
                                            </Select>
                                    ) :
                                        <Input onChange={(e) => setFormData({ ...formData, [item.id]: e.target.value })} type={item.text} placeholder={item.placeholder} required={item.isRequired} className='bg-transparent placeholder:text-zinc-200 text-sm text-white border-gray-400'></Input>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="bg-gradient-to-r from-transparent to-green-400/10 border border-white/20 rounded-lg p-4">
                            <p className="text-white text-sm">
                                <span className="font-semibold text-[#deff00]">Fast Response Guarantee:</span>{" "}
                                {"We'll contact you within 2 business hours to discuss your digital transformation needs."}
                            </p>
                        </div>
                        <Button type='submit' className="w-full bg-gradient-to-r from-yellow-400 to-green-400 font-semibold bg-blue-200 hover:bg-[#deff00] text-black transition-all">Get Started Now </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}