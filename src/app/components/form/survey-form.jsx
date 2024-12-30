import { useState, useMemo } from "react"
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
        people: 0,
        process: 0,
        technology: 0,
        comments: ''
      }
    }))
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState(allModules)

  const totalModules = results.length
  const cardsPerView = 3 // Number of cards to show on large screens

  const visibleModules = useMemo(() => {
    const modules = []
    for (let i = currentIndex; i < Math.min(currentIndex + cardsPerView, totalModules); i++) {
      modules.push(results[i])
    }
    return modules
  }, [currentIndex, results, totalModules])

  const handleRatingChange = (index, ratings) => {
    const updatedResults = [...results]
    updatedResults[currentIndex + index] = {
      ...updatedResults[currentIndex + index],
      ratings
    }
    setResults(updatedResults)
  }

  const handleNext = () => {
    if (currentIndex + 1 < totalModules) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onComplete(results)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <ProgressBar 
        current={currentIndex + 1}
        total={totalModules}
        category={visibleModules[0]?.category}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {visibleModules.map((module, index) => (
          <div key={`${module.name}-${currentIndex + index}`} className={index === 0 ? 'block' : 'hidden lg:block'}>
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

      <div className="flex justify-between pt-4">
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
          {currentIndex + 1 >= totalModules ? 'Complete' : 'Next'}
          {currentIndex + 1 < totalModules && (
            <ChevronRight className="w-4 h-4 ml-2" />
          )}
        </Button>
      </div>
    </div>
  )
}

