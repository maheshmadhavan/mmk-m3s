import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

import { BrowseTalent } from '../models/browse-talent.model';
import { BrowseTalentService } from '../services/browse-talent.service'; 

@Component({
  templateUrl: './browse-talent.component.html',
  styleUrls : ['./browse-talent.component.css']
})
export class BrowseTalentComponent implements OnInit {
  browsetalents: BrowseTalent[] = [];
  @ViewChild('filterModal') public filterModal:ElementRef;
  selectedStarIndex = 0;

  constructor(private browseTalentService: BrowseTalentService) { }

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

  clickableStarRange(value: number) {
    let a = []; 
    for(let i = value; i > 0; i--) { 
      a.push(i) 
    } 
    return a; 
  }

  selectedStar(starIndex: number) {
    this.selectedStarIndex = starIndex;
    console.log(this.selectedStarIndex);
  }
}
