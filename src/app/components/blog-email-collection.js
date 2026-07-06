import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowDownIcon } from 'lucide-react';
import LoadingIndicator from './loader';
import { sampleCompanies } from '../../../constant';
import HeroSection from './hero-section';


const BlogsEmailCollection = ({ onGettingEmail, title = 'Access Expert Insights', subtitle = 'Fill out your email address to access our articles.' }) => {
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const filteredCompanies = searchTerm
        ? sampleCompanies.filter(company =>
            company.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];


    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (!email || !organization) {
            alert("Please fill out all fields.");
            return;
        }
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}data-collection`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, organization }),
            });
            if (response.ok) {
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('organisationName', organization);
                onGettingEmail(email, organization);
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        finally {
            setIsLoading(false)
        }
    };

    const data = {
        title: "Expert Guides",
        description: (
            <>
                Explore our latest blogs and videos for <span className='text-[#455CFF]'>expert tips, best practices, and insights</span> on maximizing ServiceNow.
            </>
        )
    }

    return (
        <div className=" ">
            {isLoading && <LoadingIndicator size="large" color="lime" />}
            <HeroSection data={data} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className='flex justify-center items-center w-full py-6 px-2 h-full'>
                <Card className="border border-white/10 w-full max-w-3xl bg-white/[0.03] backdrop-blur-xl rounded-2xl pt-4 pb-10 px-4">
                    <CardHeader className="space-y-3 text-center relative">
                        <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">{title}</h2>
                        <CardDescription className="text-zinc-400 text-base">
                            {subtitle}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4 px-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="email" className="text-sm pb-2 text-white flex items-center gap-2">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white/[0.03] border-white/10 focus:border-[#455CFF] focus:ring-[#455CFF]/40 text-white rounded-lg"
                                />
                            </div>
                            <div className="relative" ref={dropdownRef}>
                                <Label htmlFor="organization" className="text-sm pb-2 text-white flex items-center gap-2">Organization Name</Label>
                                <Input
                                    id="organization"
                                    type="text"
                                    placeholder="Search Organization Name*"
                                    value={searchTerm || organization}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setOrganization(e.target.value)
                                        setSearchTerm(value);
                                        if (!value) setOrganization(""); // Clear organization if input is emptied
                                        setIsDropdownOpen(true);
                                    }}
                                    onFocus={() => setIsDropdownOpen(true)}
                                    className="bg-white/[0.03] border-white/10 focus:border-[#455CFF] focus:ring-[#455CFF]/40 text-white rounded-lg"
                                />
                                {isDropdownOpen && filteredCompanies.length > 0 && (
                                    <div className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-60 overflow-y-auto">
                                        {filteredCompanies.map((company, index) => (
                                            <div
                                                key={index}
                                                className="p-3 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setOrganization(company);
                                                    setSearchTerm("");
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                {company}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Button

                                type="submit"
                                className="w-full rounded-full border border-white/20 bg-white/[0.06] text-white font-medium backdrop-blur-md ring-1 ring-inset ring-white/10 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 hover:ring-[#455CFF]/30"
                            >
                                NEXT
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BlogsEmailCollection;