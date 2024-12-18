import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil2fbComponent } from './perfil2fb.component';

describe('Perfil2fbComponent', () => {
  let component: Perfil2fbComponent;
  let fixture: ComponentFixture<Perfil2fbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil2fbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfil2fbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
