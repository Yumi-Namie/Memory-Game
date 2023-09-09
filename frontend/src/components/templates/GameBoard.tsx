import { useState, useEffect } from "react";
import "./GameBoard.css";
import MemoryCard from "../molecules/MemoryCard";
import ScoreBoard from "../organisms/ScoreBoard";
import { useGame } from "../../context/GameContext";
import { initialCardState } from "../../utils/initialCardState";
import { Card } from "../../types/Card";
import { shuffleArray } from "../../utils/shuffleArray";
import ResultModal from "../organisms/Modal";

export default function GameBoard() {
  const gameContext = useGame();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState<number>(0);
  const [matchCount, setMatchCount] = useState<number>(0);
  const [matchedPairsSet, setMatchedPairsSet] = useState<Set<string>>(new Set());
  const [permanentlyFlippedCards, setPermanentlyFlippedCards] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);




  const { selectedTheme, selectedDifficulty } = gameContext || {};

  useEffect(() => {
    const updateCards = async () => {
      if (selectedTheme && selectedDifficulty) {
        const newCards = await initialCardState(selectedTheme, selectedDifficulty);
        console.log("New cards:", newCards);
        setCards(shuffleArray(newCards));
      }
    };
    updateCards();
  }, [selectedTheme, selectedDifficulty]);


  const handleCardClick = (cardIndex: number) => {
    console.log("Card clicked:", cardIndex);
    console.log("Before click - flippedCards:", flippedCards);

    if (matchedPairs.includes(cards[cardIndex].name) || flippedCards.includes(cardIndex)) {
      return;
    }
  
    if (flippedCards.length < 2) {
      setClickCount(prevCount => prevCount + 1);
  
      const updatedCards = cards.map((card, index) => {
        if (index === cardIndex) {
          console.log("Setting flipped to true for card:", card.name);
          return { ...card, flipped: true };
        }
        console.log("aqui o card: " + card.flipped)
        return card;
      });
      setCards(updatedCards);
  
      const updatedFlippedCards = [...flippedCards, cardIndex];
      setFlippedCards(updatedFlippedCards);
    }
  };


  useEffect(() => {
    if (flippedCards.length === 2) {
      const matched = checkMatchingPairs();

      if (!matched) {
        setTimeout(() => {
          setCards(prevCards => {
            const updatedCards = prevCards.map((card, index) => {
              if (flippedCards.includes(index)) {
                return { ...card, flipped: false };
              }
              return card;
            });
            setFlippedCards([]);
            return updatedCards;
          });
        }, 1200);
      } else {
        setMatchedPairsSet(prevSet => new Set([...prevSet, cards[flippedCards[0]].name]));
        setPermanentlyFlippedCards(prevFlippedCards => [...prevFlippedCards, cards[flippedCards[0]].name]);
        setFlippedCards([]);
        
      }
    }
  }, [flippedCards, cards]);
  

  const checkMatchingPairs = () => {
    const card1 = cards[flippedCards[0]];
    const card2 = cards[flippedCards[1]];
  
    if (card1.name === card2.name && !matchedPairsSet.has(card1.name)) {
      setMatchCount(prevCount => prevCount + 1);
      return true;
    }
  
    return false;
  };

  useEffect(() => {
    const allCardsFlipped = cards.every(card => card.flipped);
    console.log("all cards flipped ?" + allCardsFlipped);
    setIsGameOver(allCardsFlipped);
  }, [cards]);

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
  
   useEffect(() => {
    resetGame();
  }, [selectedTheme, selectedDifficulty]);


  return (
    
      <div data-testid="game-board" className="container flex flex-col justify-center items-center">
        <div className="counters">
          <ScoreBoard clickCount={clickCount} matchCount={matchCount}  />
        </div>

        <div className="w-full flex justify-center items-center">
          <ul className=" grid grid-cols-4 md:grid-cols-8 md:gap-2 ">
            {cards.map((card, index) => (
              <MemoryCard
                key={index}
                card={card}
                flipped={
                  flippedCards.includes(index) ||
                  permanentlyFlippedCards.includes(card.name)
                }
                onClick={() => handleCardClick(index)}
              />
            ))}
          </ul>
        </div>
      

        {isGameOver && (
          <ResultModal
            isOpen={isGameOver}
            clickCount={clickCount}
            matchCount={matchCount}
            onRestart={resetGame}
            onClose={() => {
              setIsGameOver(false);
            }}
          />
        )}
        
      </div>
    
  );
}
