import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBanner {
  @Input() name: string = '';
  @Input() subtitle: string = '';
}
