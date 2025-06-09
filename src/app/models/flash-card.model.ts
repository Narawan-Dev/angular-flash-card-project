export interface FlashCard {
    frontTitle: string;
    backTitle: string;
    backImage: string;
    frontDescription?: string | null;
    backDescription?: string | null;
}  