import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsStore } from '../projects.store';
import type { Project } from '../projects.model';
import { slugify } from '../../shared/slugify';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private store = inject(ProjectsStore);
  private location = inject(Location);
  private router = inject(Router);

  project?: Project;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const list = this.store.all();
    this.project = list.find(p => slugify(p.title) === slug);
  }

  goBack() {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}
