import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {

  perfilForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    edad: new FormControl(0),
    direccion: new FormGroup({
      calle: new FormControl(''),
      codPostal: new FormControl(''),
      localidad: new FormControl(''),
      provincia: new FormControl('')
    })
  })

  onSubmit() {
    console.log(this.perfilForm.value);
    console.log('direccion -> ',this.perfilForm.value.direccion);
    this.perfilForm.reset();
  }

  actualiza() {
    this.perfilForm .patchValue({
      nombre: 'Juanito',
      direccion: {
        localidad: 'Dos Hermanas'
      }
    })
  }
}
