'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", placeholder: "Your email" },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company" },
    { id: "message", label: "Message", type: "message", placeholder: "Your message" }
];

export default function ContactForm() {
    const [formData,setFormData]=useState({})
    
    async function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        try {
            const res = await axios.post('https://manaopili-dashboard.vercel.app/api/contact-form', formData);
      
            if(res?.status === 200) {
              setSubmitSuccess(true);
            } else {
              setError('Failed to submit application. Please try again later.');
            }
          } catch (err) {
            console.error('Error submitting application:', err);
            setError('An error occurred while submitting your application. Please try again later.');
          } finally {
            setIsLoading(false);
          }
        }
    
    return (
        <div className="flex justify-center items-center w-full py-6 px-4">
            <Card className="w-full max-w-3xl border-none shadow-3xl bg-zinc-900 rounded-lg" >
                <CardHeader className="py-6">
                    <div className="">
                        <h2 className="text-3xl font-bold text-white">Connect With Our Team</h2>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {formFields.map((field) => (
                            <div key={field.id} className="space-y-2">
                                <Label htmlFor={field.id} className="text-white">
                                    {field.label}
                                </Label>

                                {field.type === "message" ? (
                                    <Textarea
                                        id={field.id}
                                        placeholder={field.placeholder}
                                        className="bg-zinc-900 border-gray-600 focus:border-[#deff00] focus:ring-[#deff00] text-white"
                                        onChange={(e)=>setFormData({...formData,[field.id ]:e.target.value})}
                                    />
                                ) : (
                                    <Input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="bg-zinc-900 border-gray-600 focus:border-[#deff00] focus:ring-[#deff00] text-white"
                                        required
                                        onChange={(e)=>setFormData({...formData,[field.id]:e.target.value})}
                                    />
                                )}
                            </div>
                        ))}
                        <Button
                            type="submit"
                            className="w-full bg-[#deff00] hover:bg-[#c8e600] text-black font-medium transition-all"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}