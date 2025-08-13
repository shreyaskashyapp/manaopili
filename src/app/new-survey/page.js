"use client"

import { use, useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { configs, fallbackConfig } from "../config/data"
import BarChart from "../components/charts/barChart2"
import SurveyEmailCollection from "../components/survey-email-collection"
import BarChart2 from "../components/charts/barChart2"
import axios from "axios"
import convertHtmlToBase64 from "../components/htmlToBase64"
import LoadingIndicator from "../components/loader"

export default function SurveyPage() {
    const params = useSearchParams()
    const surveyModule = params.get("survey")
    const graphRef = useRef(null)
    const graphRef2 = useRef(null)

    // Dynamically get tiersData from configs based on surveyModule
    const tiersData = configs?.[surveyModule]?.categories

    const [currentTierIndex, setCurrentTierIndex] = useState(0)
    const [moduleRatings, setModuleRatings] = useState({})
    const [tierComments, setTierComments] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [results, setResults] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [barGraphReady, setBarGraphReady] = useState(false);
    const [allModulesResults, setAllModulesResults] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const currentTier = tiersData[currentTierIndex]
    const totalTiers = tiersData.length
    const progress = ((currentTierIndex + 1) / totalTiers) * 100
    const router = useRouter()

    const handleEmail = (email, organizationName) => {
        setHasSubmitted(true)
    }

    const handleRatingChange = (moduleSlug, rating) => {
        setModuleRatings((prevRatings) => ({
            ...prevRatings,
            [currentTier.name]: {
                ...(prevRatings[currentTier.name] || {}),
                [moduleSlug]: rating,
            },
        }))
        // console.log(moduleRatings)

        // console.log([moduleSlug], rating)
    }

    const handleCommentChange = (e) => {
        setTierComments((prevComments) => ({
            ...prevComments,
            [currentTier.name]: e.target.value,
        }))
    }

    const calulateImplementedScores = (tierName) => {
        const ratingsForTier = moduleRatings[tierName]

        if (!ratingsForTier) return null
        let totalScore = 0
        let ratedModulesCount = 0
        // Use the dynamically loaded tiersData for module iteration
        for (const mod of tiersData.find((t) => t.name === tierName)?.modules || []) {
            const rating = ratingsForTier[mod.slug] // Access module.name
            if (rating !== null && rating !== undefined) {
                totalScore += rating
                ratedModulesCount++
            }
        }
        return ratedModulesCount > 0 ? totalScore / ratedModulesCount : null
    }

    const calculateAllModulesScores = (tierName) => {
        const ratingsForTier = moduleRatings[tierName]
        let totalScore = 0
        const modulesForTier = tiersData.find((t) => t.name === tierName)?.modules || 0
        const totalModules = modulesForTier.length
        for (const mod of modulesForTier) {
            const rating = ratingsForTier?.[mod.slug]
            if (rating !== null && rating !== undefined) {
                totalScore += rating
            }
        }
        return totalScore / totalModules
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        console.log(moduleRatings);
        const calculatedImplementedResults = {}
        const calculatedAllModulesResults = {}
        tiersData.forEach((tier) => {
            calculatedImplementedResults[tier.name] = calulateImplementedScores(tier.name)
            calculatedAllModulesResults[tier.name] = calculateAllModulesScores(tier.name)
        })
        setResults(calculatedImplementedResults)
        setAllModulesResults(calculatedAllModulesResults)
        setSubmitted(true)
        // console.log(calculatedImplementedResults)
    }

    const handleNextTier = () => {
        if (currentTierIndex < totalTiers - 1) {
            setCurrentTierIndex(currentTierIndex + 1)
        }
    }

    const handlePreviousTier = () => {
        if (currentTierIndex > 0) {
            setCurrentTierIndex(currentTierIndex - 1)
        }
    }

    const handleTabChange = (value) => {
        // Find the index based on the 'name' property of the category
        const index = tiersData.findIndex((tier) => tier.name === value)
        if (index !== -1) {
            setCurrentTierIndex(index)
        }
    }

    const generatePdf = async () => {
        sessionStorage.setItem('graphData', JSON.stringify(results));
        sessionStorage.setItem('allModulesGraphData', JSON.stringify(allModulesResults));
        // console.log("Storing Graph results in localStorage", results);
        if (graphRef.current) {
            const barChart = await convertHtmlToBase64(graphRef.current)
            const barChart2 = await convertHtmlToBase64(graphRef2.current)
            console.log(barChart)
            const payload = {
                barChart,
                barChart2,
                Email: sessionStorage.getItem("email"),
                Name: sessionStorage.getItem('organisationName'),
                surveyTitle: configs?.[surveyModule]?.title,
                data: results,
                survey: surveyModule
            }
            sessionStorage.setItem('payload', JSON.stringify(payload));
            setIsLoading(false)
            router.push('/survey-results')


            try {
                const res = await axios.post('http://localhost:3000/generate-pdf', payload, {
                    responseType: 'arraybuffer',
                });
                const blob = new Blob([res.data], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                localStorage.setItem('PdfUrl', url)
                window.dispatchEvent(
                    new StorageEvent("storage", {
                        key: "PdfUrl",
                        newValue: url,
                    })
                );
            }
            catch (err) {
                const surveyDataPayload = {
                    ...payload,
                    'status': 'error',
                    'error': err.message
                }
                await axios.post('https://manaopili-dashboard.vercel.app/api/survey-data-collection', surveyDataPayload);
                console.error("PDF failed to download", err);
            }
            finally {
                console.log("successful")
            }
        }
        else {
            console.log("Ref not ready")
        }
    }


    useEffect(() => {
        if (sessionStorage.getItem('email') && sessionStorage.getItem('organisationName')) {
            setHasSubmitted(true);
        }
    }, []);

    useEffect(() => {
        if (submitted && graphRef.current && results) {
            setTimeout(() => {
                generatePdf()
            }, 500)
        }
    }, [graphRef.current, results])

    return (
        <div>
            {isLoading && <LoadingIndicator size='large' color='blue' />}
            {hasSubmitted ? (
                <div className="">
                    <div className="min-h-screen bg-[#141414] text-gray-50 flex flex-col items-center py-20 px-2 md:px-6">
                        <Card className="w-full max-w-7xl bg-transparent border-none text-gray-50">
                            <CardHeader className="text-center pb-6 pt-0">
                                <CardTitle>
                                    <h2 className="text-3xl font-bold text-[#455CFF]">{configs?.[surveyModule]?.title}</h2>
                                </CardTitle>
                                <p className="text-gray-400 mt-2">{configs?.[surveyModule]?.subtitle}</p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>Progress</span>
                                        <span>{Math.round(progress)}%</span>
                                    </div>
                                    <Progress value={progress} className="h-2 bg-gray-800" />
                                </div>
                                <Tabs value={currentTier.name} onValueChange={handleTabChange} className="w-full px-2 md:px-4">
                                    <TabsList className="grid w-full grid-cols-3 bg-gray-900 rounded-lg p-1">
                                        {configs?.[surveyModule]?.types.map(
                                            (
                                                tierType,
                                                index, // Use types for TabsTrigger
                                            ) => (
                                                <TabsTrigger
                                                    key={index}
                                                    value={tiersData[index]?.name || tierType} // Use tier name from tiersData if available, otherwise type
                                                    className="data-[state=active]:bg-[#455CFF] data-[state=active]:text-white text-gray-400 rounded-md py-2 px-2 text-sm font-medium transition-colors"
                                                >
                                                    {tierType}
                                                </TabsTrigger>
                                            ),
                                        )}
                                    </TabsList>
                                    {tiersData.map(
                                        (
                                            tier,
                                        ) => (
                                            <TabsContent key={tier.name} value={tier.name} className="mt-4">
                                                <p className="text-gray-400 mb-4 text-center text-sm">
                                                    {tier.modules.length} modules in {tier.name}
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {tier.modules.map((module) => (
                                                        <Card key={module.slug} className="bg-gray-900/30 border md:py-3 border-gray-800 rounded-lg ">
                                                            <CardContent className="py-3 px-2 md:px-4 flex flex-row items-center gap-2 justify-between overflow-auto">
                                                                <p className="font-normal text-sm md:text-lg x text-gray-300 text-left">
                                                                    {module.name}
                                                                </p>
                                                                <div className="flex space-x-1">
                                                                    {[0, 1, 2, 3, 4, 5].map((rating) => (

                                                                        <Button
                                                                            key={rating}
                                                                            variant="outline"
                                                                            size="icon"
                                                                            className={`md:w-10 md:h-10 w-7 h-7 rounded-full text-sm font-medium transition-colors
                                                              ${moduleRatings[tier.name]?.[module.slug] === rating
                                                                                    ? "bg-[#455CFF] text-white border-[#455CFF] shadow-blue-500/25   hover:text-[#455CFF] hover:bg-transparent"
                                                                                    : "bg-transparent text-gray-300 border-gray-700 hover:text-[#455CFF] hover:bg-transparent hover:border-[#455CFF]"
                                                                                }`}

                                                                            onClick={() =>
                                                                                handleRatingChange(
                                                                                    module.slug,
                                                                                    moduleRatings[tier.name]?.[module.slug] === rating ? null : rating,
                                                                                )

                                                                            }
                                                                        >
                                                                            {rating}
                                                                        </Button>

                                                                    ))}
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                                <div className="mt-6">
                                                    <Label htmlFor={`comments-${tier.name}`} className="text-gray-300 border-gray-800 mb-2 block">
                                                        Comments for {tier.name} (Optional)
                                                    </Label>
                                                    <Textarea
                                                        id={`comments-${tier.name}`}
                                                        placeholder="Add any additional comments here..."
                                                        value={tierComments[tier.name] || ""}
                                                        onChange={handleCommentChange}
                                                        className="bg-gray-900/50 border-gray-800 text-gray-50 placeholder:text-gray-500 focus:border-[#455CFF]"
                                                        rows={3}
                                                    />
                                                </div>
                                            </TabsContent>
                                        ),
                                    )}
                                </Tabs>
                                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-800 px-4">
                                    <Button
                                        variant="outline"
                                        onClick={handlePreviousTier}
                                        disabled={currentTierIndex === 0}
                                        className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 w-full sm:w-auto"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Previous
                                    </Button>
                                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                        <Button onClick={handleSubmit} className="bg-[#455CFF] hover:bg-[#3A4CD0] text-white w-full sm:w-auto">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Submit Survey
                                        </Button>
                                        {currentTierIndex < totalTiers - 1 && (
                                            <Button
                                                onClick={handleNextTier}
                                                className="bg-[#455CFF] hover:bg-[#3A4CD0] text-white w-full sm:w-auto"
                                            >
                                                Continue to {tiersData[currentTierIndex + 1]?.name}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <div
                            className={`opacity-0 fixed pointer-events-none`}
                            style={{ width: '800px', height: 'auto' }}
                        >
                            <div ref={graphRef}>
                                <BarChart2 results={results} title={`Implemented ${configs?.[surveyModule].title}`} />
                            </div>
                            <div ref={graphRef2}>
                                <BarChart2 results={results} title={`${configs?.[surveyModule].title}`} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : <SurveyEmailCollection onGettingEmail={handleEmail} />
            }
        </div>
    )
}
