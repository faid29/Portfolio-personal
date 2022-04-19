import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
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
import { PersonaProyectosComponent } from './components/main/persona-proyectos/persona-proyectos.component';
import { FormProyectoComponent } from './components/main/persona-proyectos/form-proyecto/form-proyecto.component';
import { ProyectoComponent } from './components/main/persona-proyectos/proyecto/proyecto.component';
import { FormPersonaComponent } from './components/main/form-persona/form-persona.component';
import { PersonaComponent } from './components/main/persona/persona.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './components/header/login/register-form/register-form.component';
import { LoginFormComponent } from './components/header/login/login-form/login-form.component';
import { interceptorProvider } from './interceptors/persona-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PerfilFotoComponent,
    LoginComponent,
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
    SkillComponent,
    PersonaProyectosComponent,
    FormProyectoComponent,
    ProyectoComponent,
    FormPersonaComponent,
    PersonaComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule, // required animations module
  ],
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
