import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegistroComponent } from './components/header/registro/registro.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './components/main/acerca-de/acerca-de.component';
import { PerfilFotoComponent } from './components/main/acerca-de/perfil-foto/perfil-foto.component';
import { PerfilProfesionComponent } from './components/main/acerca-de/perfil-profesion/perfil-profesion.component';
import { ExpLaboralComponent } from './components/main/exp-laboral/exp-laboral.component';
import { InfoLaboralComponent } from './components/main/exp-laboral/info-laboral/info-laboral.component';
import { EducacionComponent } from './components/main/educacion/educacion.component';
import { InfoEducacionComponent } from './components/main/educacion/info-educacion/info-educacion.component';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AcercaDeComponent,
    PerfilFotoComponent,
    PerfilProfesionComponent,
    ExpLaboralComponent,
    InfoLaboralComponent,
    EducacionComponent,
    InfoEducacionComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
