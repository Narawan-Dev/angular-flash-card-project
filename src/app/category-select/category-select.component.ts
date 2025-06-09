import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { mockCategories } from '../mock/mock-categories';
import { FlashCardCategory } from '../models/flash-card-category.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-category-select',
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    FlexLayoutModule
  ],
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent {
  categories = mockCategories;
  isReversed = false;
  isShowDescription = false;

  @Output() categorySelected = new EventEmitter<{ category: FlashCardCategory; isReversed: boolean; isShowDescription: boolean }>();

  ngOnInit(): void {
    const savedIsReversed = localStorage.getItem('isReversed');
    if (savedIsReversed !== null) {
      this.isReversed = JSON.parse(savedIsReversed);
    }

    const savedIsShowDescription = localStorage.getItem('isShowDescription');
    if (savedIsShowDescription !== null) {
      this.isShowDescription = JSON.parse(savedIsShowDescription);
    }
  }

  selectCategory(category: FlashCardCategory) {
    this.categorySelected.emit({ category, isReversed: this.isReversed, isShowDescription: this.isShowDescription });
  }

  saveReverseState(): void {
    localStorage.setItem('isReversed', JSON.stringify(this.isReversed));
  }

  getCategoryName(category: FlashCardCategory): string {
    return this.isReversed ? category.backCategoryName : category.frontCategoryName;
  }

  saveDescriptionState(): void {
    localStorage.setItem('isShowDescription', JSON.stringify(this.isShowDescription));
  }
}
