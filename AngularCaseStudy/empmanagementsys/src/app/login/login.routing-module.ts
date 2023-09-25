import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { AuthGuard } from "../auth.guard";





const loginroutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent}
]
@NgModule({
imports:[RouterModule.forChild(loginroutes)],
providers:[AuthGuard],
exports:[RouterModule]
}
)

export class LoginRoutingModule{}