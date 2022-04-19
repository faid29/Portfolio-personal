import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/header/login/login-form/login-form.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterFormComponent } from './components/header/login/register-form/register-form.component';
import { MainComponent } from './components/main/main.component';
import { PersonaEducacionesComponent } from './components/main/persona-educaciones/persona-educaciones.component';
import { PersonaIdiomasComponent } from './components/main/persona-idiomas/persona-idiomas.component';
import { PersonaLaboralesComponent } from './components/main/persona-laborales/persona-laborales.component';
import { PersonaProfesionesComponent } from './components/main/persona-profesiones/persona-profesiones.component';
import { PersonaProyectosComponent } from './components/main/persona-proyectos/persona-proyectos.component';
import { PersonaSkillsComponent } from './components/main/persona-skills/persona-skills.component';
import { PersonaComponent } from './components/main/persona/persona.component';
import { PersonaGuardService as guard } from './guards/persona-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'persona', component: PersonaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'profesion', component: PersonaProfesionesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'laboral', component: PersonaLaboralesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'educacion', component: PersonaEducacionesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'idioma', component: PersonaIdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'skill', component: PersonaSkillsComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'proyecto', component: PersonaProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },

  /* {path:'**', component: PageNotFoundComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
