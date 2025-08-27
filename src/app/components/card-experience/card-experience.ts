
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-experience',
  imports: [CommonModule],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.css'
})
export class CardExperience {
  @Input() title: string = '';
  @Input() company: string = '';
  @Input() duration: string = '';
  @Input() descriptions: string[] = [];
}
