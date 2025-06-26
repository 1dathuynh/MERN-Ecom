import { useState } from "react"
import { Star } from "lucide-react"

export default function Rating({ max = 5, value = 0, onChange }) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(value)

  const handleClick = (val) => {
    setSelected(val)
    onChange?.(val) 
  }

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        const isFilled = hovered >= starValue || selected >= starValue

        return (
          <button
            key={starValue}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            className="transition transform hover:scale-110"
          >
            <Star
              className={`w-3.5 cursor-pointer h-3.5 ${
                isFilled ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
