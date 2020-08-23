import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/modules/farmer/home/home.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },

];


@NgModule({
  imports: [
      RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
      RouterModule
  ]
})
export class HomeRoutingModule { }
