import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Sector } from '../models/sector.model';

@Injectable()
export class SectorService {
  sectorChanged = new Subject<Sector[]>();
  private sectors: Sector[] = [];
  
  constructor(private http: Http) {
    this.getSectorsJson();
  }

  getSectorsJson() {
    this.http.get("./src/assets/jsons/sectors.json")
             .map(
                (response: Response) => {
                  const sectors: Sector[] = response.json();
                  for(let sector of sectors) {
                    if(!sector) {
                      console.log(sector);
                    }
                  }
                  return sectors;
                }
              )
             .subscribe(
               (sectors: Sector[]) => {                 
                 this.setSectors(sectors);
               }
              );

  }

  setSectors(sectors: Sector[]) {
    this.sectors = sectors;
    this.sectorChanged.next(this.sectors.slice());
  }

  getSectors() {   
  	return this.sectors.slice();
  }
}