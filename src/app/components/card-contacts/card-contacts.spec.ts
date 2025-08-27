import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContacts } from './card-contacts';

describe('CardContacts', () => {
  let component: CardContacts;
  let fixture: ComponentFixture<CardContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
