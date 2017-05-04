import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BrowseTalent } from '../models/browse-talent.model';

@Injectable()
export class BrowseTalentService {
  browseTalentChanged = new Subject<BrowseTalent[]>();
  private browseTalents: BrowseTalent[] = [];
  
  constructor(private http: Http) {
    this.getBrowseTalentsJson();
  }

  getBrowseTalentsJson() {
    this.http.get("assets/jsons/browse-talents.json")
             .map(
                (response: Response) => {
                  const browseTalents: BrowseTalent[] = response.json();
                  for(let browseTalent of browseTalents) {
                    if(!browseTalent) {
                      console.log(browseTalent);
                    }
                  }
                  return browseTalents;
                }
              )
             .subscribe(
               (browseTalents: BrowseTalent[]) => {                 
                 this.setBrowseTalents(browseTalents);
               }
              );

  }

  setBrowseTalents(browseTalents: BrowseTalent[]) {
    this.browseTalents = browseTalents;
    this.browseTalentChanged.next(this.browseTalents.slice());
  }

  getBrowseTalents() {   
  	return this.browseTalents.slice();
  }
}