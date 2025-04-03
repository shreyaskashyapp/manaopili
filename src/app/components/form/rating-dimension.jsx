import { RatingButton } from "./rating-button"
import { Label } from "@/components/ui/label"

export function RatingDimension({ dimension, value, onChange }) {
  return (
    <div className="space-y-2">
      <Label className="text-base font-medium text-[#455CFF] capitalize">
        {dimension}
      </Label>
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5].map((rating) => (
          <RatingButton
            key={rating}
            value={rating}
            isSelected={value === rating}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}

