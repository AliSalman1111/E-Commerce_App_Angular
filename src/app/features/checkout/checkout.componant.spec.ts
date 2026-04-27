import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponant } from './checkout.componant';

describe('CheckoutComponant', () => {
  let component: CheckoutComponant;
  let fixture: ComponentFixture<CheckoutComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
