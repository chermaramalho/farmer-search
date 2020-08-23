import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
/* module de Structure */
import { SharedModule } from './shared/shared.module';
/* Module da Aplication */
import { HomeModule } from '@app/modules/farmer/home.module';
import { CoreModule } from './core/core.module';
/* Component */
import { AppComponent } from './app.component';
/* Services */
import { FarmerService } from '@app/core/services/farme.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    HomeModule,
    RouterModule,
    AppRoutingModule /*This module should always be the last one of the import*/
  ],
  providers: [FarmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
