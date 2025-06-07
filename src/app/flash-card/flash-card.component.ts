import { Component } from '@angular/core';
import { FlashCard } from '../models/flash-card.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  imports: [ 
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  flashCard: FlashCard = {
    frontTitle: 'Dog',
    backTitle: 'หมา',
    backImage: 'https://placedog.net/400/250'
  };

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
