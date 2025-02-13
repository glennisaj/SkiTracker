import { Circle, Square, Diamond } from "lucide-react"

type DifficultyLevel = "Green" | "Blue" | "Black" | "Double Black"

interface SkiDifficultyRatingProps {
  difficulty: DifficultyLevel
}

export function SkiDifficultyRating({ difficulty }: SkiDifficultyRatingProps) {
  const getIcon = (level: DifficultyLevel) => {
    switch (level) {
      case "Green":
        return <Circle className="text-green-500 fill-green-500" />
      case "Blue":
        return <Square className="text-blue-500 fill-blue-500" />
      case "Black":
        return <Diamond className="text-black fill-black" />
      case "Double Black":
        return (
          <div className="flex">
            <Diamond className="text-black fill-black" />
            <Diamond className="text-black fill-black -ml-1" />
          </div>
        )
    }
  }

  return (
    <div className="flex items-center space-x-1">
      {getIcon(difficulty)}
      <span className="text-sm font-medium">{difficulty}</span>
    </div>
  )
}

