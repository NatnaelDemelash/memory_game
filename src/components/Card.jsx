export const Card = ({ card }) => {
    return (
        <div className="aspect-square rounded-md bg-white shadow-xs hover:shadow-sm transition-shadow duration-200 flex items-center justify-center cursor-pointer">
            <div className="text-6xl">
                {card}
            </div>
        </div>
    )
}