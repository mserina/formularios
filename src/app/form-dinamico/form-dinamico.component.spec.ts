import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDinamicoComponent } from './form-dinamico.component';

describe('FormDinamicoComponent', () => {
  let component: FormDinamicoComponent;
  let fixture: ComponentFixture<FormDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
