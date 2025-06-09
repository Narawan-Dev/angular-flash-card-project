import { FlashCard } from "./flash-card.model";

export interface FlashCardCategory {
    categoryName: string;
    cards: FlashCard[];
}