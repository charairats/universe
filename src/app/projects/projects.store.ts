import { Injectable, signal } from '@angular/core';
import type { Project } from './projects.model'

@Injectable({ providedIn: 'root' })
export class ProjectsStore {
    private _all = signal<Project[]>([]);
    all = this._all.asReadonly();

    set(list: Project[]) { this._all.set(list); }
}
