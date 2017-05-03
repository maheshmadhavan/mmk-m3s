import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Talent } from '../shared/talent.model';
import { TalentService } from '../services/talent.service'; 

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit { 
  talentId;
  passedTalent;
  talents: Talent[] =[];
  talentDetails : Talent[] = [];

  constructor( private talentService: TalentService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.talentId = this.route.params.subscribe(params => {
    this.passedTalent = params['talentid']; 
   
  });
   this.talents = this.talentService.getAllTalents();
   
     this.talentDetails = this.getTalent(this.passedTalent);
    this.talentService.talentChanged.subscribe(
      (talents: Talent[]) => {
            this.talents = talents;
            console.log(this.talents);
            this.talentDetails = this.getTalent(this.passedTalent);
          }
        );
        
  console.log(this.talentDetails);
 

  }
   getTalent(talent:string){ 
    return this.talents.filter(t => t.talentid === talent);         
  }
}
