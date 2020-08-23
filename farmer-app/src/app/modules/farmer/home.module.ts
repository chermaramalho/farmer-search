import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxSocialShareModule } from 'ngx-social-share';
import { CoreModule } from '@app/core/core.module';
import { SharedModule} from '@app/shared/shared.module';

import { HomeComponent } from '@app/modules/farmer/home/home.component';
import { FarmerSearchComponent } from '@app/modules/farmer/farmerSearch/farmer-search.component';
import { HomeRoutingModule } from '@app/modules/farmer/home-routing.module';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  declarations: [
    HomeComponent,
    FarmerSearchComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSocialShareModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class HomeModule { }
