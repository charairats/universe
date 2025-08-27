import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEducation } from './card-education';

describe('CardEducation', () => {
  let component: CardEducation;
  let fixture: ComponentFixture<CardEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
