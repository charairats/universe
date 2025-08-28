import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  open = signal(false);
  toggle() { this.open.update(v => !v); }
  close() { this.open.set(false); }
}
