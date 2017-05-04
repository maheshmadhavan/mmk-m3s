import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Talent } from '../models/talent.model';
import { TalentService } from '../services/talent.service'; 

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit { 
  talentId;
  passedTalent;
  talents: Talent[] =[];
  talentDetails : Talent[] = [];
  talentDetail;
  sectorsCount;

  constructor( private talentService: TalentService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.talentId = this.route.params.subscribe(params => {
      this.passedTalent = params['talentid']; 
     
    });

    this.talents = this.talentService.getAllTalents();   
    this.talentDetails = this.talents;
    this.getTalent(this.passedTalent);
    this.talentService.talentChanged.subscribe(
      (talents: Talent[]) => {
            this.talents = talents;
            this.talentDetails = this.talents;
            this.getTalent(this.passedTalent);
          }
        );
    
  }

  getTalent(talent:string){
    let talentDetailArray = this.talentDetails.filter(t => t.talentid === talent);
    if(talentDetailArray.length > 0) {
      this.talentDetail = talentDetailArray[0];
      this.sectorsCount = (this.talentDetail.sectors.length);
      for(let lang of this.talentDetail.languages) {
        console.log(lang.fluent);

      }

    } else {
      this.talentDetail = {
                            "talentid": "5000", 
                            "firstname": "Test", 
                            "lastname": "candidate", 
                            "email": "testcandidate@premiergp.com", 
                            "phonenumber": "123456789",
                            "description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer tristique, diam a porttitor interdum, orci risus ultricies sapien, eget feugiat turpis mauris nec lorem. In eget sem accumsan, volutpat sem ", 
                            "usertype": "talent", 
                            "shift": "General", 
                            "status": "Active",
                            "jobtitle": "Customer Service Representative",
                            "sectors": [
                                  "Customer Service",
                                  "Office Support",
                                  "Call Centre"
                              ],
                              "experience": "Some - A few experience",
                              "languages" : [{
                                  "Native": ["German","English"],
                                  "Fluent": ["French","English"]
                              }],
                              "location" : "Dublin",
                              "distance" : "40KM",
                              "profileimage": "/assets/images/profiles/1x.jpg"
                          };
    }
    //console.log(this.talentDetail.languages);    
  }
}
