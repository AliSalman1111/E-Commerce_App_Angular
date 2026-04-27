import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponant } from './products.componant';

describe('ProductsComponant', () => {
  let component: ProductsComponant;
  let fixture: ComponentFixture<ProductsComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
