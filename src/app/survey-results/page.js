'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import BarGraph from '../components/charts/barchart';
import { Multiplechart } from "../components/charts/multiplechart";
import { useRouter } from "next/navigation";

import { configs } from "../config/data";

export default function SurveyResultsPage() {

    const [barGraphData, setBarGraphData] = useState([]);
    const [surveyModule, setSurveyModule] = useState('');
    const [currentSurvey, setCurrentSurvey] = useState('ITSM');
    const [surveyData, setSurveyData] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null)
    const router = useRouter();


    useEffect(()=>{
        const interval=setInterval(()=>{
            const url=sessionStorage.getItem('PdfUrl')
            if (url){
                setPdfUrl(url)
                clearInterval(interval)
            }
        },2000)
        return ()=> clearInterval(interval)
    })

    const pdfDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Survey_Results.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    const digitalTransformationInfo = [
        {
            title: "How to Use These Scores",
            content: <>
                Your scores reflect current Digital Transformation investment levels. Lower scores are common without <span className="text-[#deff00]">Service Improvement Programs (SIPs)</span> or <span className="text-[#deff00]">Continual Service Improvement (CSI)</span> initiatives.<br /><br /> Organizations rarely exceed scores of 3-4 without significant investment across all three areas. Use these results for <span className="text-[#deff00]">strategic planning</span> and <span className="text-[#deff00]">identifying improvement opportunities.</span>
            </>
        },
        {
            title: "Next Steps",
            content:
                <>
                    Use this report to prioritize improvement areas. Schedule a complimentary expert consultation to discuss your <span className="text-[#deff00]">Digital Transformation roadmap</span>.{` Mana'o Pili offers tailored recommendation plans focused on specific processes or modules.`}</>,
            isButton: true,
            label: "Schedule Consultation"
        },
    ];

    useEffect(() => {

        const surveyData = sessionStorage.getItem('surveyResults');

        if (!surveyData) {
            router.push('/survey-list');
            return;
        }
        else {
            const parsedData = JSON.parse(surveyData);
            setSurveyData(parsedData);
            setBarGraphData(parsedData.barGraphData);
            setSurveyModule(parsedData.modules);
            setCurrentSurvey(parsedData.survey);
        }
    }, []);
    return (
        <div className=" bg-[#141414] text-white pt-20">
            <div className="max-w-7xl top-20 mx-auto p-4 sm:p-6">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{`ServiceNow ${configs?.[currentSurvey]?.title} Assessment`}</h1>
                            <p className="text-gray-400 text-base sm:text-lg">{`Digital Transformation Investment Analysis for ${surveyData?.organisationName}`} </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <Badge className="bg-[#deff00]/20 text-[#deff00] border-[#deff00]/30 hover:bg-[#deff00]/30 w-fit">
                                {`${configs?.[currentSurvey]?.title} Assessment Results`}
                            </Badge>
                            <Button size="sm" onClick={pdfDownload} className="bg-[#455CFF] hover:bg-[#455CFF]/80 text-white w-fit">
                                {pdfUrl?"Download PDF":(<>Generating PDF<LoaderCircle className="animate-spin"/></>)}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
                    {/* Left Column - Charts */}
                    <div className="xl:col-span-2 space-y-6 sm:space-y-8">
                        {/* <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800">
                            <CardHeader className="p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-lg sm:text-xl text-white">Product Suite Investment Scores</CardTitle>
                                        <p className="text-sm text-gray-400 mt-1">
                                            ServiceNow ITSM implementation scores across different product tiers
                                        </p>
                                    </div>
                                    <TrendingUp className="w-5 h-5 text-[#455CFF] flex-shrink-0" />
                                </div>
                            </CardHeader>
                        </Card> */}

                        <div className="flex flex-col space-y-6">
                            {barGraphData?.map((item, index) => (
                                Array.isArray(item[0]) ?
                                    <div className='flex flex-col' key={`survey-element-${index}`}>
                                        <div className="">
                                        </div>
                                        <div>
                                            <Multiplechart
                                                data={item}
                                                modules={surveyModule}
                                                mode="dark"
                                                currentModule={currentSurvey}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <div key={`survey-element-${index}`}>
                                        <BarGraph
                                            key={index}
                                            data={item}
                                            index={index}
                                            modules={surveyModule}
                                            mode="dark"
                                        />
                                    </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Information Cards */}
                    <div className="space-y-6">
                        {digitalTransformationInfo.map((item, index) => (
                            <Card key={index} className="bg-[#deff00]/10 backdrop-blur-sm border border-[#deff00]/20 shadow-lg shadow-[#deff00]/10">
                                <CardHeader className="p-6">
                                    <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 pt-0 space-y-4">
                                    <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>
                                    {item?.isButton &&
                                        <Button className="w-full text-sm bg-[#455CFF] hover:bg-[#455CFF]/80 text-white" size="sm">
                                            {item.label}
                                        </Button>}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
