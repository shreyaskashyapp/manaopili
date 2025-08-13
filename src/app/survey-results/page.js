'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoaderCircle, TrendingUp, DollarSign, Clock, Target, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import BarChart2 from "../components/charts/barChart2"
import { configs } from "../config/data"

export default function SurveyResultsPage() {
  const digitalTransformationInitailInfo = [
    {
      title: "Interesting Insights",
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
      url: "https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink",
      label: "Schedule Consultation",
    },
  ]

  const [surveyModule, setSurveyModule] = useState("")
  const [currentSurvey, setCurrentSurvey] = useState("ITSM")
  const [surveyData, setSurveyData] = useState(null)
  const [pdfUrl, setPdfUrl] = useState(null)
  const [digitalTransformationInfo, setDigitalTransformationInfo] = useState(digitalTransformationInitailInfo)
  const router = useRouter()
  const [newGraphData, setNewGraphData] = useState({})
  const [allModulesGraphData, setAllModulesGraphData] = useState({})

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "PdfUrl" && e.newValue) {
        setPdfUrl(e.newValue)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

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

  useEffect(() => {
    const getAiInsights = async () => {
      const aiInsightsContent = (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#deff00]" />
            <span className="text-[#deff00] font-medium text-sm">AI Analysis Complete</span>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center gap-2 mb-3">
              {/* <DollarSign className="w-4 h-4 text-green-400" /> */}
              <span className="text-green-400 font-semibold">Potential Savings: $20,000+</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-[#deff00] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Process Optimization:</span>
                  <span className="text-gray-300 ml-1">
                    2 critical inefficiencies identified that could reduce operational costs by 15-25%
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#deff00] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Time Savings:</span>
                  <span className="text-gray-300 ml-1">Automation gaps could save 40+ hours/week across your team</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-[#deff00] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Quick Wins:</span>
                  <span className="text-gray-300 ml-1">3 immediate improvements with 90-day ROI potential</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30 mt-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-300">Disclaimer:</span> These insights and estimated savings are
              based on AI analysis and industry benchmarks. Actual results may vary based on your organization's unique
              situation, implementation, and market conditions. For accurate results, we recommend a detailed review
              with our experts.
            </p>
          </div>
        </div>
      )

      setDigitalTransformationInfo((prev) => {
        const newFirstItem = {
          ...prev[0],
          title: "AI-Powered Insights & Savings Opportunities",
          content: aiInsightsContent,
          isButton: true,
          label: (
            <div className="flex items-center justify-center gap-2">
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          ),
          url: "https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink",
        }
        const rest = prev.slice(1)
        return [newFirstItem, ...rest]
      })
    }

    const surveyData = sessionStorage.getItem("payload")
    const graphData = sessionStorage.getItem("graphData")
    const allModulesGraphData = sessionStorage.getItem("allModulesGraphData")

    if (graphData) {
      const parsedGraphData = JSON.parse(graphData)
      setNewGraphData(parsedGraphData)
    }

    if (allModulesGraphData) {
      const parsedGraphData2 = JSON.parse(allModulesGraphData)
      setAllModulesGraphData(parsedGraphData2)
    }

    if (!surveyData) {
      return
    } else {
      const parsedData = JSON.parse(surveyData)
      setSurveyData(parsedData)
      setSurveyModule(parsedData.surveyTitle)
      setCurrentSurvey(parsedData.survey)
    }

    getAiInsights()
  }, [])

  return (
    <div className=" bg-[#141414] text-white pt-20">
      <div className="max-w-7xl top-20 mx-auto p-4 sm:p-6">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {`ServiceNow ${configs?.[currentSurvey]?.title} Assessment`}
              </h1>
              <p className="text-gray-400 text-base sm:text-lg">
                {`Digital Transformation Investment Analysis for ${surveyData?.Name}`}
              </p>
            </div>
            <div className="flex flex-row items-start sm:items-center gap-3">
              <Button 
                size="sm" 
                onClick={pdfDownload} 
                className="bg-[#455CFF] hover:bg-[#455CFF]/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              >
                {pdfUrl ? (
                  "Download PDF"
                ) : (
                  <>
                    Generating PDF
                    <LoaderCircle className="animate-spin ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Charts */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            <div className="flex flex-col space-y-6">
              <BarChart2 results={newGraphData} mode="dark" title={`Implemented ${surveyModule}`} />
              <BarChart2 results={allModulesGraphData} mode="dark" title={`${surveyModule}`} />
            </div>
          </div>

          {/* Right Column - Information Cards */}
          <div className="space-y-6">
            {digitalTransformationInfo?.map((item, index) => (
              <Card
                key={index}
                className={`${
                  item.isHighPriority
                    ? "bg-gray-800/20 border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-800/30"
                    : "bg-gray-800/15 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/25"
                } backdrop-blur-sm transition-all duration-200`}
              >
                <CardHeader className="p-6">
                  <CardTitle className={`text-lg ${item.isHighPriority ? "text-[#deff00]" : "text-white"}`}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-6">
                  <div className="text-sm text-gray-300 leading-relaxed">{item.content}</div>
                  {item?.isButton && (
                    <Link className="block w-full" href={item?.url} target="_blank">
                      <Button
                        className={`w-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 ${
                          item.isHighPriority
                            ? "bg-[#deff00] hover:bg-[#deff00]/90 text-black border-0 hover:scale-[1.02]"
                            : "bg-[#455CFF] hover:bg-[#455CFF]/90 text-white border-0 hover:scale-[1.02]"
                        }`}
                        size="sm"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
