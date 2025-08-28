import { Component, Input } from '@angular/core';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';
import { Project } from './project.model';

@Component({
  selector: 'app-card-projects',
  imports: [LucideAngularModule],
  templateUrl: './card-projects.html',
  styleUrl: './card-projects.css'
})
export class CardProjects {
  @Input({ required: true }) projects!: Project[];

  readonly Github = Github;
  readonly ExternalLink = ExternalLink;


}
