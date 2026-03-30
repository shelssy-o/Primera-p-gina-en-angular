import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infancia } from './infancia';

describe('Infancia', () => {
  let component: Infancia;
  let fixture: ComponentFixture<Infancia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infancia],
    }).compileComponents();

    fixture = TestBed.createComponent(Infancia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
