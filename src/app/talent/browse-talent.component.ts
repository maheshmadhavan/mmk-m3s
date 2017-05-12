import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { googlemaps } from 'googlemaps';

import { BrowseTalent } from '../models/browse-talent.model';
import { BrowseTalentService } from '../services/browse-talent.service'; 

@Component({
  templateUrl: './browse-talent.component.html',
  styleUrls : ['./browse-talent.component.css']
})
export class BrowseTalentComponent implements OnInit {
  browsetalents: BrowseTalent[] = [];

  constructor(private browseTalentService: BrowseTalentService, private router: Router) { }

  ngOnInit() {
  	this.browsetalents = this.browseTalentService.getBrowseTalents();
    this.browseTalentService.browseTalentChanged
      .subscribe(
          (talents: BrowseTalent[]) => {
            this.browsetalents = talents;
          }
        );
  }

  range(value: number) {
    let a = []; 
    for(let i = 0; i < value; ++i) { 
      a.push(i+1) 
    } 
    return a; 
  }

  filterTalent() {
    this.router.navigate(['/talent/talent-filter']);
  }

}
