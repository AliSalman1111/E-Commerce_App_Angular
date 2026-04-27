import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponant } from './cart.componant';

describe('CartComponant', () => {
  let component: CartComponant;
  let fixture: ComponentFixture<CartComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
