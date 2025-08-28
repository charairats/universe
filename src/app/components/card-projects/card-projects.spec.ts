import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjects } from './card-projects';

describe('CardProjects', () => {
  let component: CardProjects;
  let fixture: ComponentFixture<CardProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
