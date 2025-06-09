import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlashCardComponent } from '../flash-card/flash-card.component';
import { CategorySelectComponent } from '../category-select/category-select.component';
import { FlashCardCategory } from '../models/flash-card-category.model';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FlashCardComponent,
    CategorySelectComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: FlashCardCategory | null = null;
  isReversed = false;
  isShowDescription = false;

  onCategorySelected(event: { category: FlashCardCategory; isReversed: boolean; isShowDescription: boolean }) {
    this.selectedCategory = event.category;
    this.isReversed = event.isReversed;
    this.isShowDescription = event.isShowDescription;
  }

  resetCategory() {
    this.selectedCategory = null;
  }
}
