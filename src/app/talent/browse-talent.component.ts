import { Component, OnInit } from '@angular/core';

import { BrowseTalent } from '../models/browse-talent.model';
import { BrowseTalentService } from '../services/browse-talent.service'; 

@Component({
  templateUrl: './browse-talent.component.html'
})
export class BrowseTalentComponent implements OnInit {
  browsetalents: BrowseTalent[] = [];

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

}
