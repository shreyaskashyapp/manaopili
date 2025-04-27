import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RatingDimension } from "./rating-dimension"

export function ModuleRatingForm({ 
  moduleName, 
  moduleSlug,
  category, 
  ratings, 
  onRatingChange 
}) {
  const dimensions = ['people', 'process', 'technology']

  const handleDimensionChange = (dimension, value) => {
    onRatingChange({
      ...ratings,
      [dimension]: ratings[dimension] === value ? null : value
    })
  }

  return (
    <Card className="w-full bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full" data-module-slug={moduleSlug}>
      <CardHeader className="border-b border-gray-800 pb-4">
        <CardTitle className="space-y-2">
          <span className="text-lg text-white font-medium line-clamp-1">{moduleName}</span>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-[#455CFF] border border-blue-500/20 inline-block">
            {category}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {dimensions.map((dimension) => (
          <RatingDimension
            key={dimension}
            dimension={dimension}
            value={ratings[dimension]}
            onChange={(value) => handleDimensionChange(dimension, value)}
          />
        ))}
        <div className="space-y-2">
          <Label htmlFor="comments" className="text-base font-medium text-[#455CFF]">
            Comments
          </Label>
          <Textarea
            id="comments"
            value={ratings.comments}
            onChange={(e) => handleDimensionChange('comments', e.target.value)}
            placeholder="Add any additional comments..."
            className="min-h-[80px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 resize-none"
          />
        </div>
      </CardContent>
    </Card>
  )
}

