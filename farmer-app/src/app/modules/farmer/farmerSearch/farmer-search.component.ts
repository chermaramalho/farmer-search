import { AppModule } from './../../../app.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farmer, Address, Document } from '@app/core/model/farme.interface';
import { FarmerService } from '@app/core/services/farme.service';
import { FarmerSearchAbstractProvider } from '@app/core/services/farme.service.provider';

@Component({
  selector: 'app-farmer-search',
  templateUrl: './farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss'],
  providers: [FarmerService]
})
export class FarmerSearchComponent implements OnInit {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() partnerSelectedEvent: EventEmitter<any> = new EventEmitter();

  constructor(public farmerService: FarmerService) { }
  ngOnInit() {}

  searchFarme(search: string) {
    this.partnerSelectedEvent.emit(search);
  }


}
