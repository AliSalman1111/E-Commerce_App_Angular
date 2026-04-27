import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponant } from './navbar.componant';

describe('NavbarComponant', () => {
  let component: NavbarComponant;
  let fixture: ComponentFixture<NavbarComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
