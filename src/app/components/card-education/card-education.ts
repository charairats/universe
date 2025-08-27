import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-education',
  imports: [CommonModule],
  templateUrl: './card-education.html',
  styleUrl: './card-education.css'
})
export class CardEducation {
  @Input() degree: string = '';
  @Input() institution: string = '';
  @Input() duration: string = '';
}
