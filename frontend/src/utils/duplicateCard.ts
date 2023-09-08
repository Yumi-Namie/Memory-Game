import {Card} from '../types/Card' 

export const duplicateCard = (cards: Card[]) : Card[] => {
    const duplicatedCards: Card[] = []

    cards.forEach((card) => {
        const newCard = {...card}; 
        duplicatedCards.push(newCard); 
    })

    return cards.concat(duplicatedCards); 
}



