import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yo } from './yo';

describe('Yo', () => {
  let component: Yo;
  let fixture: ComponentFixture<Yo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yo],
    }).compileComponents();

    fixture = TestBed.createComponent(Yo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
