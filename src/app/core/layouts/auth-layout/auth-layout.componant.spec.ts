import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutComponant } from './auth-layout.componant';

describe('AuthLayoutComponant', () => {
  let component: AuthLayoutComponant;
  let fixture: ComponentFixture<AuthLayoutComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayoutComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
