import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";

const cardValues = [
    "🚗", "✈️", "🚲", "🚀", "🚁", "🚂", "🚢", "🛵",
    "🚗", "✈️", "🚲", "🚀", "🚁", "🚂", "🚢", "🛵"
];

export default function App() {

  const [cards, setCards]  = useState([])

  const intializeGame = () => {
    // TODO:SHUFFLE CARDS

    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    ));

    setCards(finalCards);
  }


  useEffect(()=>{
    intializeGame()
  }, [])


  const handleCardClick = (card) => {
    // Donot allow card clic if the card is flipped or matched

    if(card.isFlipped || card.isMatched){
      return;
    }

    // update card flipped state
    const newCard = cards.map((c) => {
      if (c.id === card.id){
        return {...c, isFlipped: true}
      }else{
        return c;
      }
    })

    setCards(newCard)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto"> {/* Reduced max-width for 4×4 */}
        <GameHeader score={4} moves={15} />
        
        {/* 4×4 Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} onClick={handleCardClick}/>
          ))}
        </div>
      </div>
    </div>
  )
}