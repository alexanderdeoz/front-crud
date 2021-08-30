import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'driver',
    loadChildren:()=>import('./driver/driver.module').then(m=>m.DriverModule)
  },
  {
    path:'**',
    redirectTo:'driver'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
