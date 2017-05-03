import { Component, OnInit } from '@angular/core';

import { Sector } from '../models/sector.model';
import { SectorService } from '../services/sector.service'; 

@Component({
  templateUrl: './sector.component.html'
})
export class SectorComponent implements OnInit {
  sectors: Sector[] = [];

  constructor(private sectorService: SectorService) { }

  ngOnInit() {
  	this.sectors = this.sectorService.getSectors();
    this.sectorService.sectorChanged
      .subscribe(
          (sectors: Sector[]) => {
            this.sectors = sectors;
          }
        );
  }

}
