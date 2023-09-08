import { shuffleArray } from "./shuffleArray";
import { duplicateCard } from "./duplicateCard";
import { Card } from '../types/Card'; // Certifique-se de importar o tipo correto

export async function processCardData(data: Card[], difficulty: string): Promise<Card[]> {
  // Embaralhar as cartas recebidas
  const shuffledData = shuffleArray(data.slice());

  // Determinar a quantidade de cartas com base na dificuldade
  let numCardsToSelect = 0;
  if (difficulty === 'easy') {
    numCardsToSelect = 6;
  } else if (difficulty === 'medium') {
    numCardsToSelect = 8;
  } else if (difficulty === 'hard') {
    numCardsToSelect = 12;
  }

  // Selecionar a quantidade de cartas com base na dificuldade
  const selectedCards = shuffledData.slice(0, numCardsToSelect);

  // Duplicar as cartas selecionadas
  const duplicatedCards = duplicateCard(selectedCards);

  return duplicatedCards;
}


