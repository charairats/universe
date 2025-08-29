import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';
import { Project } from '../../projects/projects.model';
import { slugify } from '../../shared/slugify';

@Component({
  selector: 'app-card-projects',
  imports: [LucideAngularModule, RouterLink, RouterModule],
  templateUrl: './card-projects.html',
  styleUrl: './card-projects.css'
})
export class CardProjects {
  @Input({ required: true }) projects!: Project[];
  slugify = slugify;

  readonly Github = Github;
  readonly ExternalLink = ExternalLink;


}
