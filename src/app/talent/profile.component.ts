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
  languagesArray;
  native;
  fluent;
  activeItem: number = 0;

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
      this.sectorsCount = (this.talentDetail.expertise.length);
      for(let lang of this.talentDetail.languages) {          
         this.languagesArray = lang;
      }
      this.native = this.languagesArray.native;
      this.fluent = this.languagesArray.fluent;
     

    } else {
      this.talentDetail = {
                            "talentid": "5000", 
                            "firstname": "Test", 
                            "lastname": "candidate", 
                            "email": "testcandidate@premiergp.com", 
                            "phonenumber": "123456789",
                            "address" : "Hume+House,+Pembroke+Road,+Ballsbridge,+Ireland",
                            "description": "I have spent the last six years developing my skills as a customer service manager for Megacompany Inc., where I have won several performance awards and been promoted twice. I love managing teams and solving customer problems.", 
                            "jobtitle": "Customer Service Representative",
                            "expertise" : [{
                                "sector":"Customer Service", 
                                "jobtitle":"Customer Service Representative",
                                "experience":"Some - A few experience"  
                             },
                             {
                                "sector":"Office Support", 
                                "jobtitle":"Office Support Manager",
                                "experience":"Little - A few experience"  
                             },
                             {
                                "sector":"Call Centre", 
                                "jobtitle":"Call Centre Executive",
                                "experience":"Some - A few experience"  
                             }],
                              "languages" : [{
                                  "native": ["German"],
                                  "fluent": ["French","English"]
                              }],
                              "location" : "Dublin",
                              "distance" : "20KM",
                              "profileimage": "/assets/images/talents/default.jpg"
                          };
   }
  }

  viewPrevious(newValue: number) {
    if (this.activeItem === newValue || newValue < 0) {
      this.activeItem = 0;
    }
    else {
      this.activeItem = newValue;
    }
  }

  viewNext(newValue: number) {
    if (this.activeItem === newValue || newValue >= this.sectorsCount) {
      this.activeItem = 0;
    }
    else {
      this.activeItem = newValue;
    }
  }
}
