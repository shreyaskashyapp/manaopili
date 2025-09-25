"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, LoaderCircle, TrendingUp, ArrowRight, Calendar, Download, Zap, LucideTrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

import Link from "next/link"
import BarChart2 from "../components/charts/barChart2"
import { configs } from "../config/data"
import axios from "axios"
import ContactBanner from "../components/contact-banner"
import SurveyButton from "../components/surveyButton"

export default function SurveyResultsPage() {
  // Sample AI insights data - you can replace this with dynamic data later
  const sampleAiInsights = {
    title: "Achieve 15-25% Efficiency Gains and Save 20+ Hours Weekly",
    points: [
      "Process Optimization: 5 critical Inefficiencies identified that could reduce operational costs by 15-25%",
      "Time Savings: Automation gaps could save 20+ hours/week across your team",
      "Quick Wins: 3 immediate improvements with 90-day ROI potential",
    ],
    quick_wins: [
      "Quick Win 1: Description of quick win 1",
      "Quick Win 2: Description of quick win 2",
      "Quick Win 3: Description of quick win 3",
    ],
    Inefficiencies: [
      "Incident Management: Lack of standardized incident models and automated routing leads to delays.",
      "Change Management: Inconsistent change processes and limited risk assessment cause bottlenecks.",
      "Problem Management: Reactive problem resolution and insufficient root cause analysis hinder proactive prevention.",
      "Performance Analytics: Limited use of dashboards and reporting restricts visibility into key performance indicators.",
      "Process Mining: Lack of process discovery and conformance checking prevents identification of process bottlenecks.",
    ],
  }

  const [surveyModule, setSurveyModule] = useState("")
  const [currentSurvey, setCurrentSurvey] = useState("ITSM")
  const [surveyData, setSurveyData] = useState(null)
  const [pdfUrl, setPdfUrl] = useState(null)
  const [newGraphData, setNewGraphData] = useState({})
  const [allModulesGraphData, setAllModulesGraphData] = useState({})
  const [aiInsights, setAiInsights] = useState(sampleAiInsights) // Added AI insights state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "PdfUrl" && e.newValue) {
        setPdfUrl(e.newValue)
      }
    }
    window.addEventListener("storage", onStorage)

    return () => window.removeEventListener("storage", onStorage)
  }, [])

  // Helper function to parse markdown-style links
  const parseMarkdownLink = (text) => {
    const linkRegex = /\[([^\]]+)\]$$([^)]+)$$/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: text.slice(lastIndex, match.index) })
      }

      // Add the link
      parts.push({
        type: "link",
        content: match[1],
        url: match[2],
      })

      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.slice(lastIndex) })
    }

    return parts.length > 0 ? parts : [{ type: "text", content: text }]
  }

  const AIInsightsSection = ({ insights }) => {
    // Don't render if insights is empty or null
    if (!insights || Object.keys(insights).length === 0) {
      return null
    }

    const { title, points = [], quick_wins = [], Inefficiencies = [] } = insights

    // Don't render if all arrays are empty and no title
    if (!title && points.length === 0 && quick_wins.length === 0 && Inefficiencies.length === 0) {
      return null
    }

    return (
      <div className="space-y-10 max-w-7xl mx-auto">
        {/* Main Insights Card */}
        <div className="bg-gradient-to-br from-[#141414] via-zinc-900 to-[#141414]  border border-gray-800 rounded-xl p-8 mb-3 md:mb-6 backdrop-blur-sm transition-all duration-500">
          <div className="text-center mb-6">

            <p className="text-[#e2e2e2] text-md md:text-xl max-w-4xl mx-auto">{aiInsights?.title}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {points?.map((point, index) => {
              const [category, description] = point.split(": ");
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br to-zinc-900 from-zinc-900 via-[#141414] border border-gray-700/50 rounded-xl p-8 hover:border-[#455cff]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#455cff]/10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-700 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{category}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <SurveyButton
            title="Get Detailed Insights"
            url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK}
          />
        </div>

        {/* Quick Wins Section */}
        {/* {quick_wins.length > 0 && (
          <>
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <Zap className="w-7 h-7 text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Quick Wins (90-Day ROI)</h3>
              </div>
              <div className="space-y-4 max-w-4xl mx-auto">
                {quick_wins.map((win, index) => (
                  <div key={index} className="flex items-center justify-center gap-4 p-4 bg-gray-800/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-gray-300 text-center">{win}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Implementation Call
                </Button>
              </Link>
            </div>
          </>
        )} */}

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900 rounded-xl p-6 border border-gray-800 max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            <span className="font-medium text-[#455cff]">Disclaimer:</span> {`These insights and estimated savings are
            based on AI analysis and industry benchmarks. Actual results may vary based on your organization's unique
            situation, implementation, and market conditions. For accurate results, we recommend a detailed review with
            our experts.`}
          </p>
        </div>
      </div>
    )
  }

  const pdfDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a")
      link.href = pdfUrl
      link.download = "Survey_Results.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  }

  const digitalTransformationInfo = [
    {
      title: "How to use these Scores",
      content: (
        <>
          Your scores reflect current Digital Transformation investment levels. Lower scores are common without{" "}
          <span className="text-[#deff00]">Service Improvement Programs (SIPs)</span> or{" "}
          <span className="text-[#deff00]">Continual Service Improvement (CSI)</span> initiatives.
          <br />
          <br /> Organizations rarely exceed scores of 3-4 without significant investment across all three areas. Use
          these results for <span className="text-[#deff00]">strategic planning</span> and{" "}
          <span className="text-[#deff00]">identifying improvement opportunities.</span>
        </>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <>
          Use this report to prioritize improvement areas. Schedule a complimentary expert consultation to discuss your{" "}
          <span className="text-[#deff00]">Digital Transformation roadmap</span>.
          {` Mana'o Pili offers tailored recommendation plans focused on specific processes or modules.`}
        </>
      ),
      isButton: true,
      label: "Schedule Consultation",
    },
  ]

  

  useEffect(() => {
    setLoading(true)
    const surveyData = sessionStorage.getItem("payload")
    const graphData = sessionStorage.getItem("graphData")
    const allModulesGraphData = sessionStorage.getItem("allModulesGraphData")
    const aiInsightsData = sessionStorage.getItem("aiInsightsData")
    const parsedGraphData = JSON.parse(graphData)
    const parsedGraphData2 = JSON.parse(allModulesGraphData)
    setNewGraphData(parsedGraphData)
    setAllModulesGraphData(parsedGraphData2)
    if (!surveyData) {
      setLoading(false)
      return
    } else {
      const parsedData = JSON.parse(surveyData)
      setSurveyData(parsedData)
      setSurveyModule(parsedData.surveyTitle)
      setCurrentSurvey(parsedData.survey)
    }
    if (aiInsightsData) {
      try {
        setAiInsights(JSON.parse(aiInsightsData))
      } catch (error) {
        console.error("Error parsing AI insights:", error)
        // Keep using sample data if parsing fails
      }
    }
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen w-full mx-auto bg-[#141414] text-white pt-20 relative">
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70">
          <LoaderCircle className="animate-spin w-16 h-16 text-blue-500 mb-6" />
          <span className="text-lg text-white font-semibold">Loading Results...</span>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-[#455cff]/15 border border-[#455cff]/30 rounded-full px-3 py-1 mb-3 md:mb-6  backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#455cff] rounded-full animate-pulse shadow-lg shadow-[#455cff]/50"></div>
              <h2 className="text-[#455cff] text-sm font-semibold tracking-wide">Digital Transformation Analysis</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
              ServiceNow <span className="text-[#455cff]">{configs?.[currentSurvey]?.title}</span> Assessment
            </h1>
            <p className="text-gray-400 text-md md:text-lg mb-3 md:mb-6">
              Comprehensive assessment for <span className="text-[#455cff]">{surveyData?.Name}</span> with intelligent insights and actionable recommendations
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={pdfDownload}
                className="bg-[#455CFF] hover:bg-[#455CFF]/80 text-white font-semibold px-8 py-4"
              >
                {pdfUrl ? (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </>
                ) : (
                  <>
                    <LoaderCircle className="animate-spin w-5 h-5 mr-2" />
                    Generating PDF
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-20">
          {/* Performance Overview */}
          <section className="w-full">
            <div className="text-center mb-3 md:mb-6">
              {/* <div className="inline-flex items-center gap-2 text-[#455cff] font-medium mb-4">
                <LucideTrendingUp className="w-5 h-5" />
                Performance Overview
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Current ServiceNow Implementation Metrics</h2>
              <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">Comprehensive analysis of your {configs?.[currentSurvey]?.title} performance across different service tiers</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
              <div className="w-full">
                <p className="text-center text-xl py-2 text-gray-300">Aggregated Scores For All Implemented {surveyModule}</p>
                <BarChart2 results={newGraphData} mode="dark" title={`Implemented ${surveyModule}`} />
              </div>
              <div className="w-full">
                <p className="text-center text-xl py-2 text-gray-300">Aggregated Scores For All {surveyModule}</p>
                <BarChart2 results={allModulesGraphData} mode="dark" title={`${surveyModule}`} />
              </div>
            </div>
          </section>

          {/* AI Insights Section */}
          <section className="w-full">
            <div className="text-center mb-3 md:mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">AI-Powered Insights</h2>
              <p className="text-gray-400 md:text-lg text-sm max-w-4xl mx-auto">
                Intelligent analysis of your ServiceNow implementation with actionable recommendations
              </p>
            </div>
            <AIInsightsSection insights={aiInsights} />
          </section>

          {/* Areas for Improvement */}
          {aiInsights?.Inefficiencies && aiInsights.Inefficiencies.length > 0 && (
            <section className="w-full">
              <div className="text-center mb-3 md:mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Areas for Improvement
                </h2>
                <p className="text-gray-400 text-sm md:text-lg max-w-4xl mx-auto">
                  Identified Inefficiencies and optimization opportunities
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid gap-4 md:grid-cols-3">
                  {aiInsights.Inefficiencies.map((inefficiency, index) => {
                    const [category, description] = inefficiency.split(": ");
                    return (
                      <article
                        key={index}
                        className="rounded-xl p-6 bg-gradient-to-br from-zinc-900 via-[#141414] to-zinc-900 border border-gray-800 hover:border-[#455cff]/30  hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#455cff]/10 transition-all duration-300"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0" />
                          <h3 className="text-white text-xl font-medium">{category}</h3>
                        </div>
                        <p className="text-sm leading-6 text-gray-400">{description}</p>
                      </article>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center items-center pt-10">
                  <SurveyButton
                    title="Reach Out To Us"
                    url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Expert Recommendations */}
          <section className="w-full">
            <div className="text-center md:mb-6 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Expert Recommendations</h2>
              <p className="text-gray-400 text-sm md:text-lg max-w-4xl mx-auto">
                Professional guidance for your digital transformation journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {digitalTransformationInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 via-[#141414] to-zinc-900 border border-gray-800 transition-all duration-300 h-full"
                >
                  <CardHeader className="p-8 ">
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-6 flex flex-col">
                    <p className="text-gray-300 leading-relaxed">{item.content}</p>
                    {item?.isButton && (
                      <div className="flex mt-auto pt-4">
                        <Link href="https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink">
                          <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8"
                            size="lg"
                          >
                            <Calendar className="w-5 h-5 mr-2" />
                            {item.label}
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* Contact us banner */}
          <ContactBanner />
        </div>
      </div>
    </div>
  )
}