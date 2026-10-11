import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderComponant } from './main-slider.componant';

describe('MainSliderComponant', () => {
  let component: MainSliderComponant;
  let fixture: ComponentFixture<MainSliderComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSliderComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSliderComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
