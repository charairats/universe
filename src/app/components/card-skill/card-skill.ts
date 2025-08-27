import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-skill',
  imports: [CommonModule],
  templateUrl: './card-skill.html',
  styleUrl: './card-skill.css'
})
export class CardSkill {
  @Input() title: string = '';
  @Input() items: string[] = [];
}
