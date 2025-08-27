import { Component, signal } from '@angular/core';
import { AboutMe } from '../app/about-me/about-me';
import { NavBar } from '../app/components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [AboutMe, NavBar],
  template: `
    <!-- <app-about-me></app-about-me> -->
     <app-nav-bar></app-nav-bar>
    <main>
      <app-about-me></app-about-me>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('universe');
}
