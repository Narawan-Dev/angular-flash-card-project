import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { mockCategories } from '../mock/mock-categories';
import { FlashCardCategory } from '../models/flash-card-category.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-category-select',
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent {
  categories = mockCategories;
  isReversed = false;

  @Output() categorySelected = new EventEmitter<{ category: FlashCardCategory; isReversed: boolean }>();

  ngOnInit(): void {
    // ดึงค่าจาก localStorage เมื่อคอมโพเนนต์โหลด
    const savedIsReversed = localStorage.getItem('isReversed');
    if (savedIsReversed !== null) {
      this.isReversed = JSON.parse(savedIsReversed); // แปลงค่ากลับเป็น boolean
    }
  }

  selectCategory(category: FlashCardCategory) {
    this.categorySelected.emit({ category, isReversed: this.isReversed });
  }

  saveReverseState(): void {
    localStorage.setItem('isReversed', JSON.stringify(this.isReversed));
  }
}
