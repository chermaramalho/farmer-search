import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farmer, Address, Document } from '@app/core/model/farme.interface';
import { FarmerService } from '@app/core/services/farme.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  farmers: Farmer[] = [];
  constructor(public farmerService: FarmerService) { }
  ngOnInit() {}

  mySelectedFarmer( params: string) {
   this.farmerService.searchFarmers(params).then(res => {
      this.farmers = res;
      console.log(this.farmers);
    });
  }
}
