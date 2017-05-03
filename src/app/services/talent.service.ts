import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
import { Talent } from '../shared/talent.model';

export class TalentService {

private talent: Talent[] = [];

getOneTalent(talentIndex: string) {
    return this.talent[talentIndex];
  } 
}