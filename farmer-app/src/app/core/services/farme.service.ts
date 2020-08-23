import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Farmer, Address, Document } from '@app/core/model/farme.interface';
import { FarmerSearchAbstractProvider } from '@app/core/services/farme.service.provider';


@Injectable({
  providedIn: 'root'
})
export class FarmerService implements FarmerSearchAbstractProvider {
    farmers: Farmer[] = [];
    constructor( private http: HttpClient ) {}

    public searchFarmers(name: string) {
      return new Promise<Farmer[]>((resolve, reject) => {
        this.http.get(`http://localhost:3000/api/farmer/${name}`).toPromise().then( 
          (resp: any) => {
            this.farmers = resp;
            resolve(this.farmers);
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          });
      });
    }

}

