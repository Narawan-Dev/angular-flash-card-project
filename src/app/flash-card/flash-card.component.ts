import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isShowDescription: boolean = false;
  @Output() resetCategory = new EventEmitter<void>();

  remainingCards: FlashCard[] = [];
  forgottenCards: FlashCard[] = [];
  currentCard!: FlashCard;
  isFlipped = false;
  isForgotten = false;
  isCardVisible = true;

  voices: SpeechSynthesisVoice[] = [];

  ngOnInit(): void {
    // โหลดเสียงเมื่อคอมโพเนนต์ถูกสร้าง
    if ('speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();

      // รอให้เสียงถูกโหลด (สำหรับบางเบราว์เซอร์ เช่น Safari)
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices();
      };
    }

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

  getFrontDescription(card: FlashCard): string {
    return this.isReversed ? (card.backDescription ? "(" + card.backDescription + ")" : '') : (card.frontDescription ? "(" + card.frontDescription + ")" : '');
  }
  
  getBackDescription(card: FlashCard): string {
    return this.isReversed ? (card.frontDescription ? "(" + card.frontDescription + ")" : '') : (card.backDescription ? "(" + card.backDescription + ")" : '') ;
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
    this.isCardVisible = true;
  }

  remember(): void {
    if (this.isFlipped) {
      this.isFlipped = false;
      this.isCardVisible = false;
    }

    setTimeout(() => {
      this.remainingCards = this.remainingCards.filter(card => card !== this.currentCard);
      this.pickRandomCard();
    }, 100);
  }

  dontRemember(): void {
    if (this.isFlipped) {
      this.isFlipped = false;
      this.isCardVisible = false;
    }

    setTimeout(() => {
      this.forgottenCards.push(this.currentCard);
      this.remainingCards = this.remainingCards.filter(card => card !== this.currentCard);
      this.pickRandomCard();
    }, 100);
  }

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  speakText(text: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // กำหนดภาษา
      if (/[\u0E00-\u0E7F]/.test(text)) {
        utterance.lang = 'th-TH';
      } else {
        utterance.lang = 'en-US';
      }

      // เลือกเสียงที่ตรงกับภาษา
      utterance.voice = this.voices.find(voice => voice.lang === utterance.lang) || null;

      // พูดข้อความ
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Web Speech API ไม่รองรับในเบราว์เซอร์นี้');
    }
  }

  onResetCategory() {
    this.resetCategory.emit(); // ส่ง Event เมื่อกดปุ่ม "arrow_back"
  }
}
