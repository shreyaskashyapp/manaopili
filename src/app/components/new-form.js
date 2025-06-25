'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import LoadingIndicator from "./loader";

const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired: true },
    { id: "email", label: "Email", type: "email", placeholder: "Your email", isRequired: true },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company", isRequired: true },
    { id: "message", label: "Message", type: "message", placeholder: "Your message" }
];

export default function NewForm() {
    const [formData,setFormData]=useState({})
    const [isLoading,setIsLoading]=useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        try{
            const res=await axios.post('https://manaopili-dashboard.vercel.app/api/lead-collection', formData)
            if (res?.status===200){
                setFormData({})
            }
        }
        catch(err){
            console.error("Form submission failed",err.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="h-full w-full mx-auto flex justify-center">
        {isLoading && <LoadingIndicator size="large" color="lime" />}
            <Card className='bg-blue-900/30 border-none w-full max-w-3xl flex flex-col  '>
                <CardHeader className='text-zinc-300 text-2xl'>
                    Connect with us
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        {formFields.map((item) => (
                            <div key={item.id} className="flex flex-col py-3 gap-2">
                                <Label className='text-zinc-400'>{item.label}{item.isRequired?"*":''}</Label>
                                <Input onChange={(e)=>setFormData({...formData,[item.id]:e.target.value})} type={item.text} placeholder={item.placeholder} required={item.isRequired} className='bg-transparent text-zinc-300 border-zinc-600'></Input>
                            </div>
                        ))}
                        <Button type='submit' className="w-full bg-white hover:bg-[#deff00] text-black font-medium transition-all">Submit bro</Button>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}