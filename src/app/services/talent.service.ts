import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Talent } from '../shared/talent.model';

@Injectable()
export class TalentService {
  talentChanged = new Subject<Talent[]>();
  private talents: Talent[] = [];//require('../shared/talent.json');

  constructor(private http: Http) {
    this.getTalentsJson();   
  }

  getTalentsJson() {
      this.http.get("./src/app/shared/talent.json")
              .map(
                  (response: Response) => {
                    const talents: Talent[] = response.json();
                    for(let talent of talents) {
                      if(!talent) {
                      // console.log(project);
                      }
                    }
                    return talents;
                  }
                )
              .subscribe(
                (talents: Talent[]) => {                 
                  this.setTalents(talents);
                });
    }
  setTalents(talents: Talent[]) {
   // console.log(talents);
    this.talents = talents;
    this.talentChanged.next(this.talents.slice());
  }


  getAllTalents() {  
    return this.talents.slice(); 
  }
}