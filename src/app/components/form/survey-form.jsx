import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModuleRatingForm } from "./module-rating"
import { ProgressBar } from "./progress-bar"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function SurveyForm({ config, onComplete }) {
  const allModules = config.categories.flatMap(category =>
    category.modules.map(module => ({
      ...module,
      category: category.name,
      ratings: {
        people: null,
        process: null,
        technology: null,
        comments: ''
      }
    }))
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState(allModules)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const totalModules = results.length
  const cardsPerView = isLargeScreen ? 3 : 1

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 1024)
      }
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const visibleModules = useMemo(() => {
    const modules = []
    for (let i = currentIndex; i < Math.min(currentIndex + cardsPerView, totalModules); i++) {
      modules.push(results[i])
    }
    return modules
  }, [currentIndex, results, totalModules, cardsPerView])

  const handleRatingChange = (index, ratings) => {
    const updatedResults = [...results]
    updatedResults[currentIndex + index] = {
      ...updatedResults[currentIndex + index],
      ratings
    }
    setResults(updatedResults)
  }

  const handleNext = () => {
    if (currentIndex + cardsPerView < totalModules) {
      setCurrentIndex(currentIndex + cardsPerView)
    } else {
      onComplete(results)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - cardsPerView))
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-4 p-6">
      <ProgressBar
        current={Math.min(currentIndex + cardsPerView, totalModules)}
        total={totalModules}
        category={visibleModules[0]?.category}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {visibleModules.map((module, index) => (
          <div key={`${module.slug}-${currentIndex + index}`} className={isLargeScreen ? 'block' : (index === 0 ? 'block' : 'hidden')}>
            <ModuleRatingForm
              key={`${module.slug}-${currentIndex + index}`}
              moduleName={module.name}
              moduleSlug={module.slug}
              category={module.category}
              ratings={module.ratings}
              onRatingChange={(ratings) => handleRatingChange(index, ratings)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between ">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
        >
          {currentIndex + cardsPerView >= totalModules ? 'Complete' : 'Next'}
          {currentIndex + cardsPerView < totalModules && (
            <ChevronRight className="w-4 h-4 ml-2" />
          )}
        </Button>
      </div>
    </div>
  )
}

