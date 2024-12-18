import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil2fb',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil2fb.component.html',
  styleUrl: './perfil2fb.component.css',
})
export class Perfil2fbComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  data: any;

  profileForm = this.fb.group({
    nombre: ['Josemaria', Validators.required],
    apellidos: [''],
    email: ['', [Validators.required, Validators.email]],
    direccion: this.fb.group({
      calle: [''],
      localidad: [''],
      provincia: [''],
      codPostal: [''],
    }),
  });

  ngOnInit() {

  }

  onSubmit() {
    this.data = this.profileForm.value;
    console.log(this.data);

    console.log('onSubmit llamado -> ', this.profileForm.status);
  }
}
