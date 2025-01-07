import { Routes } from '@angular/router';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

export const routes: Routes = [

    {path: 'FormDinamico', component: FormDinamicoComponent},
    {path: 'FormUsuario',component: PerfilUsuarioComponent},
];
