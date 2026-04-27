import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponant } from './notfound.componant';

describe('NotfoundComponant', () => {
  let component: NotfoundComponant;
  let fixture: ComponentFixture<NotfoundComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
