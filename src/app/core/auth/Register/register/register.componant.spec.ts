import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponant } from './register.componant';

describe('RegisterComponant', () => {
  let component: RegisterComponant;
  let fixture: ComponentFixture<RegisterComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
