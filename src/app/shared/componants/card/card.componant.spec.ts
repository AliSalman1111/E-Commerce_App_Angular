import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponant } from './card.componant';

describe('CardComponant', () => {
  let component: CardComponant;
  let fixture: ComponentFixture<CardComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
