import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/header/login/login-form/login-form.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterFormComponent } from './components/header/login/register-form/register-form.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MainComponent } from './components/main/main.component';
import { PersonaEducacionesComponent } from './components/main/persona-educaciones/persona-educaciones.component';
import { PersonaIdiomasComponent } from './components/main/persona-idiomas/persona-idiomas.component';
import { PersonaLaboralesComponent } from './components/main/persona-laborales/persona-laborales.component';
import { PersonaProfesionesComponent } from './components/main/persona-profesiones/persona-profesiones.component';
import { PersonaProyectosComponent } from './components/main/persona-proyectos/persona-proyectos.component';
import { PersonaSkillsComponent } from './components/main/persona-skills/persona-skills.component';
import { PersonaComponent } from './components/main/persona/persona.component';
import { PersonaSoftsComponent } from './components/main/persona-softs/persona-softs.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';



const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginFormComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterFormComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'persona', component: PersonaComponent }, 
  { path: 'profesion', component: PersonaProfesionesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'laboral', component: PersonaLaboralesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'educacion', component: PersonaEducacionesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'idioma', component: PersonaIdiomasComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'skill', component: PersonaSkillsComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'soft', component: PersonaSoftsComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'proyecto', component: PersonaProyectosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
