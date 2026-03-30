import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalidad } from './personalidad';

describe('Personalidad', () => {
  let component: Personalidad;
  let fixture: ComponentFixture<Personalidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
