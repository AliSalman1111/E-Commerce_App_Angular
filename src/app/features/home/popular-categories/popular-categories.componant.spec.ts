import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoriesComponant } from './popular-categories.componant';

describe('PopularCategoriesComponant', () => {
  let component: PopularCategoriesComponant;
  let fixture: ComponentFixture<PopularCategoriesComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCategoriesComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCategoriesComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
