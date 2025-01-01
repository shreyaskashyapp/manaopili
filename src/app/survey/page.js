'use client'
import { SurveyForm } from '@/app/components/form/survey-form'
import { csmSurveyConfig } from '../config/csm-survey'
import { CATEGORIES, findSum, getLengthFromModules, getNumberOfZeros, parseResults, parseToGraph } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import BarGraph from '../components/charts/barchart'
import { usePDF } from 'react-to-pdf'
import { Multiplechart } from '../components/charts/multiplechart'
import { PDFHeader } from '../components/pdf-components/pdf-header'
import { PDFFooter } from '../components/pdf-components/pdf-footer'

export default function Survey() {
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
      value: overall_module_sum[key] / getLengthFromModules(csmSurveyConfig),
      fill: 'red',
      title: 'Overall'
    }))

    const implementedBarData = Object.keys(overall_module_sum).map(key => ({
      name: key,
      value: overall_module_sum[key] / (getLengthFromModules(csmSurveyConfig) - getNumberOfZeros(results, key)),
      fill: 'hsl(var(--chart-1) / 0.8)',
      title: 'Implemented Investment Scores'
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
      generatePdf()
    }
  }, [isGraphsReady])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-14 flex justify-center">
      <div className="container py-10">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {csmSurveyConfig.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Evaluate your ServiceNow CSM implementation across People, Process, and Technology dimensions
          </p>
        </div>
        <SurveyForm
          config={csmSurveyConfig}
          onComplete={handleSubmit}
        />
        <div
          className="flex flex-col gap-4 fixed pointer-events-none"
          style={{ width: '800px', height: 'auto' }}
          ref={targetRef}
        >
          {barGraphData?.map((item, index) => (
            Array.isArray(item[0]) ?
              <div className='flex flex-col gap-8'>
                <PDFHeader />
                <Multiplechart data={item} />
                <PDFFooter />
              </div>
              :
              <div className='flex flex-col gap-8'>
                <PDFHeader />
                <BarGraph key={index} data={item} />
                <PDFFooter/>
              </div>
          ))}
        </div>
      </div>
    </main>
  )
}