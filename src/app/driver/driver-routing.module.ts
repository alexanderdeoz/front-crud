import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes : Routes=[
  {
    path:'',
    children:[
      {path:'list',component:ListComponent},
      {path:'registro',component:RegistrationComponent},
      {path:'**',redirectTo:'registro'},
    ]
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DriverRoutingModule { }
