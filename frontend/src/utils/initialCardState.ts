import axios from "axios";
import { processCardData } from "./processCardData";
import { Card } from "../types/Card";
import { BASE_URL } from "../service/axiosgame";

export async function initialCardState(theme = "heroes", difficulty = "easy"): Promise<Card[]> {
  try {
    const response = await axios.get(`${BASE_URL}/card/theme/${theme}`);
    const cardData = response.data;
    console.log("fetch initial: " + response.data)

    const processedCards = await processCardData(cardData, difficulty);

    console.log(processedCards)
    return processedCards;
  } catch (error) {
    console.log(error);
    return [];
  }
}
