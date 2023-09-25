import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpformComponent } from './empform.component';
import { EmpFormRoutingModule } from './empform.routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import { ViewEncapsulation } from '@angular/compiler';

@NgModule({
  declarations: [EmpformComponent],
  imports: [
    CommonModule,EmpFormRoutingModule,ReactiveFormsModule,MatTableModule,MatIconModule
    ,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule
  ],providers:[],
  bootstrap:[EmpformComponent]
})
export class EmpformModule { }
