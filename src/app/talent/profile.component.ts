import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { googlemaps } from 'googlemaps';

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
  options;
  map;
  places;
  apiError;
  apiStatus;
  marker;
  place = {};
  result;
  markers = [];
  reloadCount = 0;

  constructor( private talentService: TalentService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    document.querySelector('body').classList.remove('modal-open');
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
      this.talentDetail = { "talentid": "5000", 
                            "firstname": "Demo", 
                            "lastname": "Talent", 
                            "email": "dtalent@premiergp.com", 
                            "phonenumber": "123456789",
                            "address" : "Hume House,Pembroke Road,Ballsbridge,Ireland",
                            "description": "I have spent the last six years developing my skills as a customer service manager for Megacompany Inc., where I have won several performance awards and been promoted twice. I love managing teams and solving customer problems.", 
                            "jobtitle": "Customer Service Representative",
                            "expertiselevel": "0 Years",
                            "expertise" : [{
                              "sector":"Customer Service", 
                              "jobtitle":"Customer Service Representative",
                              "experience":"Some - A few experience"  
                             }],
                             "education" : "High School Degree",
                             "contracttype" : "Permanent",
                              "languages" : [{
                                  "native": ["German"],
                                  "fluent": ["French","English"]
                              }],
                              "location" : "Dublin",
                              "distance" : "20KM",
                              "profileimage": "assets\/images\/talents\/demo-talent.jpg",
                              "locationlat" : "53.331038",
                              "locationlong" : "-6.233250",
                              "salaryexpectation" : "15k-20k",
                              "noticeperiod" : "30",
                              "cv" : "http://www.pdf995.com/samples/pdf.pdf",
                              "workvisa" : "http://www.pdf995.com/samples/pdf.pdf",
                              "linkedinurl" : "https://in.linkedin.com/",
                              "requirementmatching" : "4",
                              "educationrating" : "3",
                              "workrating" : "5",
                              "salaryrating" : "3",
                              "availabilityrating" : "5",
                              "managerscomment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, diam a porttitor interdum, orci risus ultricies sapien, eget feugiat turpis mauris nec lorem. In eget sem accumsan, volutpat sem ac, bibendum purus. In ac varius tellus.",
                              "workhistory" : [{
                                "company" : "TPC India Pvt Ltd",
                                "duration" : "18/01/2011 - 13/04/2012"
                              },
                              {
                                "company" : "EDC India Pvt Ltd",
                                "duration" : "14/04/2012 - 13/11/2015"
                              }]      
                          };
   }   

   this.options = {
        center: new google.maps.LatLng(this.talentDetail.locationlat, this.talentDetail.locationlong),
        zoom: 13,
        disableDefaultUI: true    
    }

    this.map = new google.maps.Map(
        document.getElementById("map"), this.options
    );
    this.places = new google.maps.places.PlacesService(this.map);
    this.createMarker();
  }

  createMarker() {
    this.marker = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(this.talentDetail.locationlat, this.talentDetail.locationlong),
            title: this.talentDetail.location
        });
        this.marker.content = '<div class="infoWindowContent">' + this.talentDetail.address + '</div>';
        
        this.markers.push(this.marker);
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
    if (this.activeItem === newValue || newValue > (this.talentDetail.expertise.length-1)) {
      this.activeItem = 0;
    }
    else {
      this.activeItem = newValue;
    }
  }

  range(value: number) {
    let a = []; 
    for(let i = 0; i < value; ++i) { 
      a.push(i+1) 
    } 
    return a; 
  }
}
