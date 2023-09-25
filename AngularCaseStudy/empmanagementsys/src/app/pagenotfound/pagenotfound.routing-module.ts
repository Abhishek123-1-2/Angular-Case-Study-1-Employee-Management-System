import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound.component";





const pagenotfoundroutes:Routes=[
    {path:'**',component:PagenotfoundComponent}
]
@NgModule({
imports:[RouterModule.forChild(pagenotfoundroutes)],
exports:[RouterModule]
}
)

export class PageNotFoundRoutingModule{}