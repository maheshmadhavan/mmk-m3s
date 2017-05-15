import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { googlemaps } from 'googlemaps';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

import { BrowseTalent } from '../models/browse-talent.model';
import { BrowseTalentService } from '../services/browse-talent.service'; 

@Component({
  templateUrl: './filter.component.html',
  styleUrls : ['./browse-talent.component.css']
})
export class FilterComponent implements OnInit {  
  browsetalents: BrowseTalent[] = [];
  experienceSlider;
  salarySlider;
  mapOptions;
  filterMap;
  filterPlaces;
  filterApiError;
  filterApiStatus;
  filterMarker;
  filterResult;
  filterMarkers = [];
  lat = 53.331038;
  lng = -6.233250;
  location = "Dublin";
  address = "Hume House,Pembroke Road,Ballsbridge,Ireland";
  @ViewChild('filterModal') public filterModal:ElementRef;

  constructor(private browseTalentService: BrowseTalentService) { }

  ngOnInit() {
    document.querySelector('body').classList.add('modal-open');

    this.browsetalents = this.browseTalentService.getBrowseTalents();
    this.browseTalentService.browseTalentChanged
      .subscribe(
          (talents: BrowseTalent[]) => {
            this.browsetalents = talents;
          }
        );
      
    this.experienceSlider = {
      "min" : 0,
      "max" : 10,
      "from" : 0,
      "from_shadow" : false,
      "to" : 1,
      "to_shadow" : false,
      "grid" : true,
      "grid_num" : 10,
      "prefix" : "Experience: ",
      "postfix" : " Years",
      "max_postfix" : "+ "
    };

    this.salarySlider = {
      "min" : 15,
      "max" : 120,
      "from" : 15,
      "from_shadow" : false,
      "to" : 20,
      "to_shadow" : false,
      "grid" : true,
      "grid_num" : 8,
      "prefix" : "€",
      "postfix" : "k",
      "max_postfix" : "+"
    };

    this.mapOptions = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 13,
        disableDefaultUI: true    
    };

    this.filterMap = new google.maps.Map(
       document.getElementById("mapFilter"), this.mapOptions
    );

    this.filterPlaces = new google.maps.places.PlacesService(this.filterMap);
    this.createMarker();
  }

  createMarker() {
    this.filterMarker = new google.maps.Marker({
      map: this.filterMap,
      position: new google.maps.LatLng(this.lat, this.lng),
      title: this.location
    });
    this.filterMarker.content = '<div class="infoWindowContent">' + this.address + '</div>';
    
   this.filterMarkers.push(this.filterMarker);
  }

  update(slider, event) {
    console.log("Slider updated: " + slider.name);
    slider.onUpdate = event;
  }

  finish(slider, event) {
    console.log("Slider finished: " + slider.name);
    slider.onFinish = event;
  }
}