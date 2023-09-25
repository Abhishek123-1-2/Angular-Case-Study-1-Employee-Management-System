import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./login/login.module').then(p=>p.LoginModule)},
  {path:'login',loadChildren:()=>import('./login/login.module').then(p=>p.LoginModule)},
  {path:'empform',loadChildren:()=>import('./empform/empform.module').then(p=>p.EmpformModule)},
  {path:'welcome',loadChildren:()=>import('./welcome/welcome.module').then(p=>p.WelcomeModule),canActivate:[AuthGuard]},
  {path:'**',loadChildren:()=>import('./pagenotfound/pagenotfound.module').then(p=>p.PageNotFoundModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
