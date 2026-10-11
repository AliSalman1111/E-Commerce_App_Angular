import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductComponant } from './popular-product.componant';

describe('PopularProductComponant', () => {
  let component: PopularProductComponant;
  let fixture: ComponentFixture<PopularProductComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularProductComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
