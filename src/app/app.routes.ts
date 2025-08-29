import { Routes } from '@angular/router';
import { ProjectDetail } from './projects/project-detail/project-detail';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'projects/:slug', component: ProjectDetail },
    { path: '**', redirectTo: '' }
];
