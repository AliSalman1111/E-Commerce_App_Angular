import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponant } from './main-layout.componant';

describe('MainLayoutComponant', () => {
  let component: MainLayoutComponant;
  let fixture: ComponentFixture<MainLayoutComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
