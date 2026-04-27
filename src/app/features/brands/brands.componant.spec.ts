import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponant } from './brands.componant';

describe('BrandsComponant', () => {
  let component: BrandsComponant;
  let fixture: ComponentFixture<BrandsComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
