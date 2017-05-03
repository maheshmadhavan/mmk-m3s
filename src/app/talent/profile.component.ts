import { Component, OnInit } from '@angular/core';

import { Talent } from '../shared/talent.model';
import { TalentService } from '../services/talent.service'; 

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  talentDetails: Talent[] = [];

  constructor( private talentService: TalentService) { }

  ngOnInit() {
  	// this.sectors = this.sectorService.getSectors();
    // this.sectorService.sectorChanged
    //   .subscribe(
    //       (sectors: Sector[]) => {
    //         this.sectors = sectors;
    //       }
    //     );
  }
   showTalent(talentId:string){ 
    this.talentDetails = this.talentService.getOneTalent("5000");   
    console.log(this.talentDetails);         
  }

 

}
