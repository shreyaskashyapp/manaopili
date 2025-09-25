'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function ContactFormV2({formFields,serviceOptions}) {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitSuccess,setSubmitSuccess]=useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true) 
        try {
            const res = await axios.post('https://backend-manaopili.onrender.com/contact-leads', formData)
            if (res?.status === 200) {
               setSubmitSuccess(true)
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
            {isLoading && <LoadingIndicator size="large" color="[#deff00]" />}
            {submitSuccess? (
                <div className="bg-blue-200/10 border border-blue-200 text-white p-8 max-w-3xl mx-auto rounded-lg text-center">
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
            ):
            <Card className='bg-gray-400/10 border-gray-100/20 w-full h-full rounded-xl shadow-[#141414]/40 shadow-md max-w-3xl flex flex-col p-2 '>
                <CardHeader className='text-white text-2xl'>
                    Connect with us
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {formFields.map((item) => (
                                <div key={item.id} className={`flex flex-col ${item.id === 'message' ? 'md:col-span-full' : ''} gap-2`}>
                                    <Label className='text-[#deff00]'>{item.label}{item.isRequired ? "*" : ''}</Label>
                                    {item.isSelection ? (
                                            <Select onValueChange={(value) => setFormData({ ...formData, [item.id]: value })}> 
                                                <SelectTrigger className="bg-transparent  text-white border-gray-100/40">
                                                    <SelectValue placeholder="Select Service" className="placeholder:text-zinc-200 "/>
                                                </SelectTrigger>
                                                <SelectContent className="bg-blue-200">
                                                {serviceOptions.map((item,idx)=>(
                                                    <SelectItem key={idx} value={item.value}>{item.label}</SelectItem>
                                                ))}
                                                </SelectContent>
                                            </Select>
                                    ) :
                                        <Input onChange={(e) => setFormData({ ...formData, [item.id]: e.target.value })} type={item.text} placeholder={item.placeholder} required={item.isRequired} className='bg-transparent placeholder:text-zinc-200 text-sm text-white border-gray-100/40'></Input>
                                    }
                                </div>
                            ))}
                        </div>
                        {/* <div className="bg-gradient-to-r from-transparent to-green-400/10 border border-white/20 rounded-lg p-4">
                            <p className="text-white text-sm">
                                <span className="font-semibold text-[#deff00]">Fast Response Guarantee:</span>{" "}
                                {"We'll contact you within 2 business hours to discuss your digital transformation needs."}
                            </p>
                        </div> */}
                        <Button type='submit' className="w-full bg-blue-200 font-semibold hover:bg-[#deff00] text-black transition-all">Get Started Now </Button>
                    </form>
                </CardContent>
            </Card>}
        </div>
    )
}