import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegistroComponent } from './components/header/registro/registro.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path:'', redirectTo: 'index', pathMatch:'full'},
  { path:'header', component: HeaderComponent},
  { path:'login', component: LoginComponent},
  { path:'registro', component: RegistroComponent},
  { path:'main', component: MainComponent},
  /* {path:'**', component: PageNotFoundComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
