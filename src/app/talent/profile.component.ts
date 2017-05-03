import { Component, OnInit } from '@angular/core';

//import { Profile } from '../models/sector.model';
//import { SectorService } from '../services/sector.service'; 

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  //sectors: Sector[] = [];

  constructor() { }

  ngOnInit() {
  	// this.sectors = this.sectorService.getSectors();
    // this.sectorService.sectorChanged
    //   .subscribe(
    //       (sectors: Sector[]) => {
    //         this.sectors = sectors;
    //       }
    //     );
  }

}
