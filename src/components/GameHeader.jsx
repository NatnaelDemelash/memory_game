export const GameHeader = ({score, moves}) => {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-10">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Title Section */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center shadow-inner">
                            <span className="text-2xl">🧠</span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
                                Memory Game
                            </h1>
                            <p className="text-gray-500 text-sm mt-1">Match all pairs with minimal moves</p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex gap-8">
                        {/* Score */}
                        <div className="text-center">
                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                                Score
                            </div>
                            <div className="text-3xl font-bold text-gray-800">
                                {score}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px bg-gray-200"></div>

                        {/* Moves */}
                        <div className="text-center">
                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                                Moves
                            </div>
                            <div className="text-3xl font-bold text-gray-800">
                                {moves}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}