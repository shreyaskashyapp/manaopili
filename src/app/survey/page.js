'use client'
import { SurveyForm } from '@/app/components/form/survey-form'
import { CATEGORIES, findSum, getLengthFromModules, getNumberOfZeros, parseResults, parseToGraph } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePDF } from 'react-to-pdf'
import BarGraph from '../components/charts/barchart'
import { Multiplechart } from '../components/charts/multiplechart'
import { PDFFooter } from '../components/pdf-components/pdf-footer'
import { PDFHeader } from '../components/pdf-components/pdf-header'
import SurveyText from '../components/pdf-components/survey-text'
import { configs } from '../config/data'
import { fallbackConfig } from '../config/data'
import SurveyEmailCollection from '../components/survey-email-collection'

export default function Survey() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const handleEmail = (email, organizationName) => {

    setHasSubmitted(true)
  }

  const params = useSearchParams();

  const surveyModule = params.get('survey')


  const { toPDF, targetRef } = usePDF({
    filename: 'survey-results.pdf',
    method: 'blob'
  })
  const [barGraphData, setBarGraphData] = useState([])
  const [isGraphsReady, setIsGraphsReady] = useState(false)

  const handleSubmit = (results) => {
    const rawData = parseResults(results, 'CSM')
    const sum = CATEGORIES.map(category => findSum(results, category))

    const overall_module_sum = sum.reduce((acc, curr) => ({
      people: acc.people + curr.people,
      process: acc.process + curr.process,
      technology: acc.technology + curr.technology
    }))

    const overallBarData = Object.keys(overall_module_sum).map(key => ({
      name: key,
      value: overall_module_sum[key] / getLengthFromModules(configs?.[surveyModule]),
      fill: 'red',
      title: `Aggregated Scores for All ${configs?.[surveyModule]?.title}`
    }))

    const implementedBarData = Object.keys(overall_module_sum).map(key => ({
      name: key,
      value: overall_module_sum[key] / (getLengthFromModules(configs?.[surveyModule]) - getNumberOfZeros(results, key)),
      fill: 'hsl(var(--chart-1) / 0.8)',
      title: `Aggregated Scores For All Implemented ${configs?.[surveyModule]?.title}`
    }))

    const barData = parseToGraph(rawData)
    setBarGraphData([barData, overallBarData, implementedBarData])
  }

  useEffect(() => {
    if (barGraphData.length > 0) {
      setTimeout(() => setIsGraphsReady(true), 500)
    }
  }, [barGraphData])

  useEffect(() => {
    if (targetRef.current && isGraphsReady) {
      const generatePdf = async () => {
        const blob = await toPDF()
      }
      setPdfDownloaded(true)
      generatePdf()
    }
  }, [isGraphsReady])

  useEffect(() => {
    if (sessionStorage.getItem('email') &&
      sessionStorage.getItem('organisationName')) {
      setHasSubmitted(true);
    }
  }, [])


  return (
    <div>
      {hasSubmitted ? (
        <main className="min-h-screen py-16 flex justify-center">
          {configs?.[surveyModule] ? <div className="container py-10">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl font-bold text-[#455CFF]">
                {configs?.[surveyModule]?.title}
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {configs?.[surveyModule]?.subtitle}
              </p>
            </div>
            <SurveyForm
              config={configs?.[surveyModule]}
              onComplete={handleSubmit}
            />
            <div
              className={`flex flex-col gap-4 fixed pointer-events-none ${pdfDownloaded ? 'hidden' : ''}`}
              style={{ width: '800px', height: 'auto' }}
              ref={targetRef}
            >
              {barGraphData?.map((item, index) => (
                Array.isArray(item[0]) ?
                  <div className='flex flex-col' key={`survey-element-${index}`}>
                    <div className="relative top-0 left-0 right-0">
                      <PDFHeader />
                    </div>
                    <Multiplechart
                      data={item} />
                  </div>
                  :
                  <div className={`flex flex-col gap-14`} key={`survey-element-${index}`}>
                    <BarGraph
                      key={index}
                      data={item}
                      index={index}
                    />
                    {index === (barGraphData.length - 1) && (
                      <>
                        <SurveyText />
                        <div className="relative bottom-0">
                          <PDFFooter />
                        </div>
                      </>
                    )}

                  </div>
              ))}
            </div>
          </div> :
            fallbackConfig?.[surveyModule] ? (
              <div className="flex flex-col items-center justify-center h-[80vh] mt-0 text-white text-center">
                <h1 className="text-[48px] font-bold  md:text-[62px]">
                  {fallbackConfig?.[surveyModule]?.title}
                </h1>
                <p className="text-[26px] text-gray-400 max-w-2xl mx-auto md:text-[28px]">
                  {fallbackConfig?.[surveyModule]?.subtitle}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[80vh] mt-0 text-white text-center">
                <h2 className="text-4xl mb-6">Oops! Survey not found</h2>
                <p className="text-md">The requested survey could not be found.</p>
              </div>
            )
          }
        </main>
      ) :
        <SurveyEmailCollection onGettingEmail={handleEmail} />}
    </div>
  )
}