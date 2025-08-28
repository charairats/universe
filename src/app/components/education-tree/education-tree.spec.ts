import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTree } from './education-tree';

describe('EducationTree', () => {
  let component: EducationTree;
  let fixture: ComponentFixture<EducationTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
