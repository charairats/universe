
import { Component, Input } from '@angular/core';
import { LucideAngularModule, MapPin, Phone, Mail, Linkedin, Facebook, Github } from 'lucide-angular';


@Component({
  selector: 'app-card-contacts',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card-contacts.html',
  styleUrl: './card-contacts.css'
})
export class CardContacts {
  @Input() address: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() linkedin?: string;
  @Input() facebook?: string;
  @Input() github?: string;

  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
  readonly Facebook = Facebook;
  readonly Github = Github;
}

