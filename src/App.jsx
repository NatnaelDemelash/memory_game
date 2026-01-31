import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";

const cardValues = [
    "🚗", "✈️", "🚲", "🚀", "🚁", "🚂", "🚢", "🛵",
    "🚗", "✈️", "🚲", "🚀", "🚁", "🚂", "🚢", "🛵"
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto"> {/* Reduced max-width for 4×4 */}
        <GameHeader score={4} moves={15} />
        
        {/* 4×4 Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-8">
          {cardValues.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}