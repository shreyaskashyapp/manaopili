"use client"

import { use, useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { configs, fallbackConfig, modulesComingSoon } from "../config/data"
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

    if (surveyModule in modulesComingSoon) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] mt-0 text-white text-center">
                <h1 className="text-[48px] font-bold  md:text-[62px]">
                    {modulesComingSoon?.[surveyModule]?.title}
                </h1>
                <p className="text-[26px] text-gray-400 max-w-2xl mx-auto md:text-[28px]">
                    {modulesComingSoon?.[surveyModule]?.subtitle}
                </p>
            </div>
        )
    }

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
    console.log(surveyModule)

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
        sessionStorage.setItem('rawData', JSON.stringify(moduleRatings));
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
                const res = await axios.post('https://backend-manaopili.onrender.com/generate-pdf', payload, {
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
            {configs?.[surveyModule] ? (
                <div>
                    {isLoading && <LoadingIndicator size='large' color='blue' />}
                    {hasSubmitted ? (
                        <div className="">
                            <div className="min-h-screen bg-[#141414] text-zinc-50 flex flex-col items-center py-20 px-2 md:px-6">
                                <Card className="w-full md:max-w-7xl lg:max-w-9xl bg-transparent border-none text-zinc-50">
                                    <CardHeader className="text-center pb-6 pt-0">
                                        <CardTitle>
                                            <h2 className="text-3xl font-bold text-[#455CFF]">{configs?.[surveyModule]?.title}</h2>
                                        </CardTitle>
                                        <p className="text-zinc-400 mt-2">{configs?.[surveyModule]?.subtitle}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-sm text-zinc-400">
                                                <span>Progress</span>
                                                <span>{Math.round(progress)}%</span>
                                            </div>
                                            <Progress value={progress} className="h-2 bg-zinc-800" />
                                        </div>
                                        <Tabs value={currentTier.name} onValueChange={handleTabChange} className="w-full px-2 md:px-4">
                                            <TabsList className="grid w-full grid-cols-3 bg-gradient-to-b from-[#141414] to-zinc-900 shadow-lg  p-1">
                                                {configs?.[surveyModule]?.types.map(
                                                    (
                                                        tierType,
                                                        index, // Use types for TabsTrigger
                                                    ) => (
                                                        <TabsTrigger
                                                            key={index}
                                                            value={tiersData[index]?.name || tierType} // Use tier name from tiersData if available, otherwise type
                                                            className="data-[state=active]:bg-[#455CFF] data-[state=active]:text-white text-zinc-400  py-2 px-2 text-sm font-medium transition-colors"
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
                                                        {/* <p className="text-zinc-400 mb-4 text-center text-sm">
                                                    {tier.modules.length} modules in {tier.name}
                                                </p> */}
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2">
                                                            {tier.modules.map((module, index) => (
                                                                <Card key={module.slug} className={`md:hover:scale-[1.01] group relative py-3 px-4 border bg-gradient-to-br from-[#141414] to-zinc-900 shadow-lg rounded-xl  transition-all duration-200 ${moduleRatings[tier.name]?.[module.slug] == null ? "border-none" : "border-[#455cff]"}`}>
                                                                    <CardContent className="flex flex-col p-0 gap-3">
                                                                        <div className="flex justify-between items-center gap-2">
                                                                            <div className="flex items-center gap-2 overflow-hidden">
                                                                                <h2 className="font-semibold tracking-wider text-sm md:text-lg text-zinc-300 text-left truncate hover:truncate-none">
                                                                                    {module.name}
                                                                                </h2>
                                                                            </div>
                                                                            <div>
                                                                                {moduleRatings[tier.name]?.[module.slug] && (
                                                                                    <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                                                                                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#455CFF]" />
                                                                                    </div>)
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex space-x-1">
                                                                            {[0, 1, 2, 3, 4, 5].map((rating) => (

                                                                                <Button
                                                                                    key={rating}
                                                                                    variant="outline"
                                                                                    size="icon"
                                                                                    className={`md:w-9 md:h-9 w-7 h-7 rounded-full text-sm font-medium transition-colors
                                                              ${moduleRatings[tier.name]?.[module.slug] === rating
                                                                                            ? "bg-[#455CFF] text-white border-[#455CFF] shadow-blue-500/25   hover:text-[#455CFF] hover:bg-transparent"
                                                                                            : "bg-transparent text-zinc-300 border-zinc-700 hover:text-[#455CFF] hover:bg-transparent hover:border-[#455CFF]"
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
                                                            <Label htmlFor={`comments-${tier.name}`} className="text-zinc-300 border-zinc-800 mb-2 block">
                                                                Comments for {tier.name} (Optional)
                                                            </Label>
                                                            <Textarea
                                                                id={`comments-${tier.name}`}
                                                                placeholder="Add any additional comments here..."
                                                                value={tierComments[tier.name] || ""}
                                                                onChange={handleCommentChange}
                                                                className="bg-gradient-to-br from-[#141414] to-zinc-900 border-zinc-800 text-zinc-50 placeholder:text-zinc-500 focus:border-[#455CFF]"
                                                                rows={3}
                                                            />
                                                        </div>
                                                    </TabsContent>
                                                ),
                                            )}
                                        </Tabs>
                                        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-zinc-800 px-4">
                                            <Button
                                                variant="outline"
                                                onClick={handlePreviousTier}
                                                disabled={currentTierIndex === 0}
                                                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700 w-full sm:w-auto"
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
            ) : (
                <div><h2>Module not found</h2></div>
            )}

        </div>
    )
}
