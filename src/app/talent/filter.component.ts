import { Component, OnInit } from '@angular/core';
import { googlemaps } from 'googlemaps';

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
  options;
  map;
  places;
  apiError;
  apiStatus;
  marker;
  place = {};
  result;
  markers = [];
  lat = 53.331038;
  lng = -6.233250;
  location = "Dublin";
  address = "Hume House,Pembroke Road,Ballsbridge,Ireland";

  constructor(private browseTalentService: BrowseTalentService) { }

  ngOnInit() {
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

    this.options = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 13,
        disableDefaultUI: true    
    };

    this.map = new google.maps.Map(
        document.getElementById("map"), this.options
    );

    this.places = new google.maps.places.PlacesService(this.map);
    this.createMarker();
  }

  createMarker() {
    this.marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.lat, this.lng),
      title: this.location
    });
    this.marker.content = '<div class="infoWindowContent">' + this.address + '</div>';
    
   this.markers.push(this.marker);
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