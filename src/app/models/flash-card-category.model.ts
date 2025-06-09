import { FlashCard } from "./flash-card.model";

export interface FlashCardCategory {
    frontCategoryName: string;
    backCategoryName: string;
    cards: FlashCard[];
}