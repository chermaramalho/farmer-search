
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '@app/modules/farmer/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { useHash: true } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


