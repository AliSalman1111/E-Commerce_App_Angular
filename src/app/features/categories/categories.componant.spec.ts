import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponant } from './categories.componant';

describe('CategoriesComponant', () => {
  let component: CategoriesComponant;
  let fixture: ComponentFixture<CategoriesComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
