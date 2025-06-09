import { Component, Input } from '@angular/core';
import { FlashCard } from '../models/flash-card.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlashCardCategory } from '../models/flash-card-category.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [ 
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  @Input() category!: FlashCardCategory;
  @Input() isReversed: boolean = false;

  remainingCards: FlashCard[] = [];
  forgottenCards: FlashCard[] = [];
  currentCard!: FlashCard;
  isFlipped = false;
  isForgotten = false;

  ngOnInit(): void {
    // Clone cards เพื่อไม่กระทบต้นฉบับ
    this.remainingCards = [...this.category.cards];
    this.pickRandomCard();
  }

  getFrontTitle(card: FlashCard): string {
    return this.isReversed ? card.backTitle : card.frontTitle;
  }

  getBackTitle(card: FlashCard): string {
    return this.isReversed ? card.frontTitle : card.backTitle;
  }

  getBackImage(card: FlashCard): string {
    return card.backImage;
  }

  getDescription(card: FlashCard): string {
    return "(" + card.description + ")" || '';
  }

  pickRandomCard(): void {
    // หาก remainingCards หมด ให้ดึง forgottenCards กลับมา
    if (this.remainingCards.length === 0 && this.forgottenCards.length > 0) {
      this.isForgotten = true;
      this.remainingCards = [...this.forgottenCards];
      this.forgottenCards = []; // ล้าง forgottenCards
    }

    const total = this.remainingCards.length;
      if (total === 0) {
        return; // ไม่มีการ์ดเหลือ
    }

    const index = Math.floor(Math.random() * total);
    this.currentCard = this.remainingCards[index];
    this.isFlipped = false;
  }

  remember(): void {
    // ลบ card นี้ออกจาก remainingCards
    this.remainingCards = this.remainingCards.filter(card => card !== this.currentCard);
    this.pickRandomCard();
  }

  dontRemember(): void {
    // ย้าย card นี้ไปยัง forgottenCards
    this.forgottenCards.push(this.currentCard);
    this.remainingCards = this.remainingCards.filter(card => card !== this.currentCard);
    this.pickRandomCard();
  }

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
}
