import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HomeComponent } from './componentes/home/home.component';
import { Login1Component } from './componentes/login1/login1.component';
import { Login2Component } from './componentes/login2/login2.component';
import { RegistroEstudiantesComponent } from './componentes/registro-estudiantes/registro-estudiantes.component';
import { RegistroProfesoresComponent } from './componentes/registro-profesores/registro-profesores.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Page404Component } from './componentes/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HomeComponent,
    Login1Component,
    Login2Component,
    RegistroEstudiantesComponent,
    RegistroProfesoresComponent,
    MenuComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
