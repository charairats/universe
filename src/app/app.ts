import { Component, signal } from '@angular/core';
import { NavBar } from '../app/components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet, Footer],
  template: `

     <app-nav-bar></app-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('universe');
}
