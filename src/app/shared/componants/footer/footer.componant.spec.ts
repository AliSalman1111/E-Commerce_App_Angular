import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponant } from './footer.componant';

describe('FooterComponant', () => {
  let component: FooterComponant;
  let fixture: ComponentFixture<FooterComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
