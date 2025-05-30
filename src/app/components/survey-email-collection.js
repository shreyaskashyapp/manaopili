import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from 'react';
import HeroSection from './hero-section';
import LoadingIndicator from './loader';
import { sampleCompanies } from "../../../constant";


export default function SurveyEmailCollection({ onGettingEmail, title = 'Ready to take our Digital TRiP survey?', subtitle = 'Fill out your email address to access our survey.' }) {
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef(null);

    const filteredCompanies = searchTerm
        ? sampleCompanies.filter(company =>
            company.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        if (!email || !organization) {
            alert("Please fill out all fields.");
            return;
        }
        try {
            const response = await fetch('https://manaopili-dashboard.vercel.app/api/data-collection', {
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
        }finally{
            setIsLoading(false)
        }

    };
    const data = {
        title: 'Digital Trip Survey',
        description:
            (
                <>
                    <span className='text-[#deff00]'>The Digital Trip Technology Survey</span> assesses your organization&apos;s capabilities and uncovers digital transformation opportunities across core business processes. Once completed, you&apos;ll receive a <span className='text-[#deff00]'>personalized report</span> via email, offering insights into growth and maturity levels, comparative benchmarks, and visual analytics to support <span className='text-[#deff00]'>strategic decision-making</span>.

                </>
            )
    }
    return (
        <div>
            {isLoading && <LoadingIndicator size='large' color='lime' />}
            <HeroSection bgColor={`from-[#455CFF] to-[#141414]`} data={data} height={`[70vh]`} />
            <div className="flex flex-col justify-center items-center w-full px-2 py-10 ">
                <Card className="w-full max-w-3xl border-none bg-zinc-900 rounded-lg p-10">
                    <CardHeader className="py-6 text-center">
                        <h2 className="md:text-5xl text-3xl font-medium text-white">{title}</h2>
                        <p className="text-lg text-[#deff00] mt-4">{subtitle}</p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="email" className="text-white">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-zinc-900 border-gray-600 focus:border-[#deff00] focus:ring-[#deff00] text-white"
                                />
                            </div>

                            <div className="relative" ref={dropdownRef}>
                                <Label htmlFor="organization" className="text-white">Organization Name</Label>
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
                                    className="bg-zinc-900 border-gray-600 focus:border-[#deff00] focus:ring-[#deff00] text-white"
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
                                className="w-full bg-white hover:bg-[#deff00] text-black font-medium transition-all"
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

