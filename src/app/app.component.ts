import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { FlashCardCategory } from './models/flash-card-category.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    FlashCardComponent,
    CategorySelectComponent,
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedCategory: FlashCardCategory | null = null;
  isReversed = false;

  onCategorySelected(event: { category: FlashCardCategory; isReversed: boolean }) {
    this.selectedCategory = event.category;
    this.isReversed = event.isReversed;
  }

  resetCategory() {
    this.selectedCategory = null;
  }
}
