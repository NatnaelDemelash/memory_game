export const Card = ({ card, onClick }) => {
    return (
        <div 
            className="aspect-square rounded-md bg-white shadow-xs hover:shadow-sm transition-shadow duration-200 flex items-center justify-center cursor-pointer" 
            onClick={() => onClick(card)}  
        >
            {!card.isFlipped ? (
                <div className="text-6xl text-gray-300">  {/* Made text lighter */}
                    ?
                </div>
            ) : (
                <div className="text-6xl">
                    {card.value}
                </div>
            )}
        </div>
    )
}