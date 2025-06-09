import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  isReversed = JSON.parse(localStorage.getItem('isReversed') || 'false');
  isShowDescription = JSON.parse(localStorage.getItem('isShowDescription') || 'false');

  saveReverseState(): void {
    localStorage.setItem('isReversed', JSON.stringify(this.isReversed));
  }

  saveDescriptionState(): void {
    localStorage.setItem('isShowDescription', JSON.stringify(this.isShowDescription));
  }
}
