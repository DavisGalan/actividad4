import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './componentes/login1/login1.component';
import { Login2Component } from './componentes/login2/login2.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroEstudiantesComponent } from './componentes/registro-estudiantes/registro-estudiantes.component';
import { RegistroProfesoresComponent } from './componentes/registro-profesores/registro-profesores.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component },
  { path: 'registro-estudiantes', component: RegistroEstudiantesComponent },
  { path: 'registro-profesores', component: RegistroProfesoresComponent },
  { path: '**', component: Page404Component, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
