import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesComponant } from './detailes.componant';

describe('DetailesComponant', () => {
  let component: DetailesComponant;
  let fixture: ComponentFixture<DetailesComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailesComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailesComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
