import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PageNotFoundRoutingModule } from './pagenotfound.routing-module';



@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,PageNotFoundRoutingModule,ReactiveFormsModule
  ]
})
export class PageNotFoundModule { }