import { Card } from "../types/Card";
import { initialCardState } from "../utils/initialCardState";
import { shuffleArray } from "../utils/shuffleArray";


export const useGameReset = (

    selectedTheme: string, 
    selectedDifficulty: string,
    setCards: (cards: Card[]) => void, // Provide state setters as parameters
    setFlippedCards: (flippedCards: number[]) => void,
    setMatchedPairs: (matchedPairs: string[]) => void,
    setClickCount: (clickCount: number) => void,
    setMatchCount: (matchCount: number) => void,
    setMatchedPairsSet: (matchedPairsSet: Set<string>) => void,
    setPermanentlyFlippedCards: (permanentlyFlippedCards: string[]) => void,
    setIsGameOver: (isGameOver: boolean) => void
    ) => {
        
    const resetGame = async () => {
    try {
        const newCards = await initialCardState(selectedTheme, selectedDifficulty);
        setCards(shuffleArray(newCards));
        setFlippedCards([]);
        setMatchedPairs([]);
        setClickCount(0);
        setMatchCount(0);
        setMatchedPairsSet(new Set());
        setPermanentlyFlippedCards([]);
        setIsGameOver(false);
    } catch (error) {
        console.error("Error resetting game:", error);
    }
    };

    return { resetGame };
};
