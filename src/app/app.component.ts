import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTabsModule,RouterLink, RouterLinkActive,RouterOutlet, ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo-formulario';
  name = new FormControl('');
  apellido: string = '';

  activeTabIndex = 0;  // Control de la pestaña activa

  // Inyección de dependencias: Router
  constructor(private router: Router) {}

  // ngOnInit se ejecuta después de que Angular haya inicializado la vista y las propiedades de la clase
  ngOnInit() {
    // Obtiene la URL actual para sincronizar la pestaña activa
    const currentRoute = this.router.url;

    // Si la ruta contiene 'FormUsuario', activa la segunda pestaña (índice 1)
    if (currentRoute.includes('FormUsuario')) {
      this.activeTabIndex = 1;
    }
    // Si la ruta contiene 'FormDinamico', activa la primera pestaña (índice 0)
    else if (currentRoute.includes('FormDinamico')) {
      this.activeTabIndex = 0;
    }
  }

  // Método para cambiar de pestaña y navegar a la ruta correspondiente
  onTabChange(index: number) {
    this.activeTabIndex = index;

    // Cambiar la ruta según la pestaña seleccionada
    if (index === 0) {
      this.router.navigate(['/FormDinamico']);
    } else if (index === 1) {
      this.router.navigate(['/FormUsuario']);
    }
  }
}


