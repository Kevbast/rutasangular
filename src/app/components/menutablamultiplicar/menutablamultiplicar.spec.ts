import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menutablamultiplicar } from './menutablamultiplicar';

describe('Menutablamultiplicar', () => {
  let component: Menutablamultiplicar;
  let fixture: ComponentFixture<Menutablamultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Menutablamultiplicar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menutablamultiplicar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
