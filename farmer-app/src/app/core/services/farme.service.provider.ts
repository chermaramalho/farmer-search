import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Farmer, Address, Document } from '@app/core/model/farme.interface';

@Injectable({
  providedIn: 'root'
})

export  abstract class FarmerSearchAbstractProvider {
  public abstract searchFarmers(params: string): Promise<Farmer[]>;
}