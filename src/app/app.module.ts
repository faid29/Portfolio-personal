import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegistroComponent } from './components/header/registro/registro.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilFotoComponent } from './components/main/perfil-foto/perfil-foto.component';
import { PersonaProfesionesComponent } from './components/main/persona-profesiones/persona-profesiones.component';
import { ProfesionComponent } from './components/main/persona-profesiones/profesion/profesion.component';
import { FormProfesionComponent } from './components/main/persona-profesiones/form-profesion/form-profesion.component';
import { FormLaboralComponent } from './components/main/persona-laborales/form-laboral/form-laboral.component';
import { PersonaLaboralesComponent } from './components/main/persona-laborales/persona-laborales.component';
import { LaboralComponent } from './components/main/persona-laborales/laboral/laboral.component';
import { PersonaEducacionesComponent } from './components/main/persona-educaciones/persona-educaciones.component';
import { FormEducacionComponent } from './components/main/persona-educaciones/form-educacion/form-educacion.component';
import { EducacionComponent } from './components/main/persona-educaciones/educacion/educacion.component';
import { PersonaIdiomasComponent } from './components/main/persona-idiomas/persona-idiomas.component';
import { FormIdiomaComponent } from './components/main/persona-idiomas/form-idioma/form-idioma.component';
import { IdiomaComponent } from './components/main/persona-idiomas/idioma/idioma.component';
import { PersonaSkillsComponent } from './components/main/persona-skills/persona-skills.component';
import { FormSkillComponent } from './components/main/persona-skills/form-skill/form-skill.component';
import { SkillComponent } from './components/main/persona-skills/skill/skill.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PerfilFotoComponent,
    LoginComponent,
    RegistroComponent,
    PersonaProfesionesComponent,
    ProfesionComponent,
    FormProfesionComponent,
    FormLaboralComponent,
    PersonaLaboralesComponent,
    LaboralComponent,
    PersonaEducacionesComponent,
    FormEducacionComponent,
    EducacionComponent,
    PersonaIdiomasComponent,
    FormIdiomaComponent,
    IdiomaComponent,
    PersonaSkillsComponent,
    FormSkillComponent,
    SkillComponent
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
