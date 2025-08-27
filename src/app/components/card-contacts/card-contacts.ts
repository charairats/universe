
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-contacts',
  imports: [],
  templateUrl: './card-contacts.html',
  styleUrl: './card-contacts.css'
})
export class CardContacts {
  @Input() address: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
}

