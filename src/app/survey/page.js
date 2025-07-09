'use client'
import { SurveyForm } from '@/app/components/form/survey-form'
import { CATEGORIES, findSum, getLengthFromModules, getNumberOfZeros, parseResults, parseToGraph } from '@/lib/utils'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { usePDF } from 'react-to-pdf'
import BarGraph from '../components/charts/barchart'
import { Multiplechart } from '../components/charts/multiplechart'
import convertHtmlToBase64 from '../components/htmlToBase64'
import { PDFHeader } from '../components/pdf-components/pdf-header'
import Staller from '../components/staller'
import SurveyEmailCollection from '../components/survey-email-collection'
import SurveyInstructions from '../components/survey-instruction'
import { configs, fallbackConfig } from '../config/data'
import SurveyCompletionMessage from '../components/surveyCompletionMessage'


const surveyData = {
  info: {
    title: "Survey Instructions",
    description: "Please fill out the survey to help us improve our services. Your feedback is valuable to us."
  },
  scores: [
    {
      level: 0,
      title: "None",
      description: "Not implemented"
    },
    {
      level: 1,
      title: "Initial",
      description: "Mostly manual driven activities."
    },
    {
      level: 2,
      title: "Managed",
      description: "Basic repeatable activities. Use of templates, and limited workflow."
    },
    {
      level: 3,
      title: "Defined",
      description: "Workflow driven activities"
    },
    {
      level: 4,
      title: "Quantitative",
      description: "Advanced automation and reporting."
    },
    {
      level: 5,
      title: "Optimizing",
      description: "Continuously improving, aligned with business, and enabled with automation and AI"
    }
  ],
  bulletPoints: [
    {
      title: "People/Resources",
      description: "Staffing, training, and adoption"
    },
    {
      title: "Process",
      description: "Documentation and workflow standardization"
    },
    {
      title: "Technology",
      description: "ServiceNow implementation and configuration"
    }
  ]
};


export default function Survey() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [formData, setFormData] = useState(null);
  const [pdfError, setPdfError] = useState(false)
  const router = useRouter();


  const multiplechartRef = useRef(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

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
    const rawData = parseResults(results, 'CSM', configs?.[surveyModule])
    const sum = CATEGORIES(configs?.[surveyModule]).map(category => findSum(results, category))

    setFormData(results)

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
    storeData(barData, overallBarData, implementedBarData);
  }

  useEffect(() => {
    if (barGraphData.length > 0) {
      setTimeout(() => setIsGraphsReady(true), 500)
    }
  }, [barGraphData])

  const getPdf = async () => {

    const allRefsReady =
      multiplechartRef.current &&
      chart1Ref.current &&
      chart2Ref.current

    if (allRefsReady) {
      const multipleChart = await convertHtmlToBase64(multiplechartRef.current);
      const barChart1 = await convertHtmlToBase64(chart1Ref.current);
      const barChart2 = await convertHtmlToBase64(chart2Ref.current);

      const graphData = {
        multipleChart,
        barChart1,
        barChart2
      }

      const payload = {
        graphData,
        Email: sessionStorage.getItem("email"),
        Name: sessionStorage.getItem('organisationName'),
        survey: configs?.[surveyModule]?.title,
        data: formData
      }



      try {
        setGeneratingPdf(true)
        const res = await axios.post('https://backend-manaopili.onrender.com/generate-pdf', payload, {
          responseType: 'arraybuffer', // <-- Important to handle raw binary PDF response
        });

        const blob = new Blob([res.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Survey_Results.pdf';
        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        link.remove();
        router.push('/survey-list')
      }
      catch (err) {
        const surveyDataPayload = {
          ...payload,
          'status': 'error',
          'error': err.message
        }
        await axios.post('https://manaopili-dashboard.vercel.app/api/survey-data-collection', surveyDataPayload);
        console.error("PDF failed to download", err);
        setPdfError(true)
      }
      finally {
        setGeneratingPdf(false)
      }
    }
    else {
      console.log("All refs are not ready yet")
    }
  }

  const storeData = (barData, overallBarData, implementedBarData) => {
    const surveyResults = {
      barGraphData: [barData, overallBarData, implementedBarData],
      email: sessionStorage.getItem("email"),
      organisationName: sessionStorage.getItem('organisationName'),
      surveyTitle: configs?.[surveyModule]?.title,
      modules: configs?.[surveyModule]?.types
    };
    console.log("Storing survey results in localStorage", surveyResults);
    localStorage.setItem('surveyResults', JSON.stringify(surveyResults));

  }

  useEffect(() => {
    if (targetRef.current && isGraphsReady) {
      const htmlContent = targetRef.current.innerHTML
      getPdf(htmlContent)
      setPdfDownloaded(true)
    }
  }, [isGraphsReady, multiplechartRef.current, chart1Ref.current, chart2Ref.current])


  useEffect(() => {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('organisationName')) {
      setHasSubmitted(true);
    }
  }, []);



  return (
    <div>
      {hasSubmitted ? (
        <main className="min-h-screen py-16 flex justify-center">
          {generatingPdf &&
            <Staller
              messages={["Calculating Scores", "Processing Data", "Drawing Graphs", "Generating PDF", "Almost Done!"]}
              disclaimer="Please do not close the page. An email with the scores will also be sent to you."
              size="large"
              color="indigo"
            />}
          {configs?.[surveyModule] ? <div className="container py-10">
            <div className="text-center mb-12 space-y-4">
              <div className='flex justify-center'>
                <h1 className="text-4xl font-bold text-[#455CFF]">
                  {configs?.[surveyModule]?.title}
                </h1>
                <div className='absolute md:right-20 right-[30px]'>
                  <SurveyInstructions data={surveyData} />
                </div>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {configs?.[surveyModule]?.subtitle}
              </p>
            </div>
            <SurveyForm
              config={configs?.[surveyModule]}
              onComplete={handleSubmit}
            />
            <div
              className={`opacity-0 gap-4 fixed pointer-events-none ${pdfDownloaded ? '' : ''}`}
              style={{ width: '800px', height: 'auto' }}
              ref={targetRef}
            >
              {barGraphData?.map((item, index) => (
                Array.isArray(item[0]) ?
                  <div className='flex flex-col' key={`survey-element-${index}`}>
                    <div className="">
                      <PDFHeader />
                    </div>
                    <div ref={multiplechartRef}>
                      <Multiplechart
                        data={item}
                        modules={configs?.[surveyModule]?.types}
                      />
                    </div>
                  </div>
                  :
                  <div ref={index === 1 ? chart1Ref : chart2Ref} key={`survey-element-${index}`}>
                    <BarGraph
                      key={index}
                      data={item}
                      index={index}
                      modules={configs?.[surveyModule]?.types}
                    />
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
      {
        pdfError &&
        <SurveyCompletionMessage />
      }
    </div>
  )
}
