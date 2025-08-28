import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Education, TimelineItem } from './education.model';

@Component({
  selector: 'app-education-tree',
  imports: [],
  templateUrl: './education-tree.html',
  styleUrl: './education-tree.css'
})



export class EducationTree {
  @Input({ required: true }) educations: Education[] = [];

  items: TimelineItem[] = [];

  private readonly BORDER_VARIANTS = [
    // Aurora Neon
    'bg-gradient-to-tr from-cyan-400/90 via-emerald-400/85 to-lime-300/90',
    // Candy Pop
    'bg-gradient-to-tr from-fuchsia-400/90 via-rose-400/85 to-amber-300/90',
    // Glacier Bright
    'bg-gradient-to-tr from-sky-400/90 via-cyan-300/85 to-indigo-400/90',
    // Sunset Neon
    'bg-gradient-to-tr from-orange-400/90 via-amber-300/85 to-rose-400/90',
  ] as const;

  private readonly GLOW_SHADOWS = [
    'shadow-[0_0_40px_rgba(16,185,129,.35)]',   // emerald/cyan
    'shadow-[0_0_40px_rgba(244,114,182,.40)]',  // fuchsia/rose
    'shadow-[0_0_40px_rgba(56,189,248,.35)]',   // sky/cyan
    'shadow-[0_0_40px_rgba(251,146,60,.35)]',   // orange/amber
  ] as const;

  private readonly SIZE_CLASSES = [
    'w-48 h-48 md:w-56 md:h-56',
    'w-52 h-52 md:w-60 md:h-60',
    'w-56 h-56 md:w-64 md:h-64',
  ] as const;

  ngChangesCount = 0;

  ngOnChanges(_: SimpleChanges): void {
    this.items = (this.educations || []).map((edu) => {
      const key = `${edu.institution}|${edu.duration}|${edu.degree}`;
      const h = this.hash(key);
      const sizeIdx = h % this.SIZE_CLASSES.length;
      const colorIdx = (h >> 3) % this.BORDER_VARIANTS.length;

      return {
        key,
        edu,
        sizeClass: this.SIZE_CLASSES[sizeIdx],
        borderClass: this.BORDER_VARIANTS[colorIdx],
        glowClass: this.GLOW_SHADOWS[colorIdx],   // ⬅️ เพิ่มบรรทัดนี้
      };
    });
  }

  private hash(s: string): number {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return (h >>> 0);
  }

}
