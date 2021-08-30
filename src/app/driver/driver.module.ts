import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import {HttpClientModule} from '@angular/common/http';
//prime Ng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
// components

import { RegistrationComponent } from './pages/registration/registration.component';
import { DriverRoutingModule } from './driver-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    RegistrationComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    DriverRoutingModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class DriverModule { }
