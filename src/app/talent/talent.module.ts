import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
/* import { IonRangeSliderModule } from "ng2-ion-range-slider"; */

import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';
import { SectorComponent } from './sector.component';
import { BrowseTalentComponent } from './browse-talent.component';
import { ProfileComponent } from './profile.component';
import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    TalentRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
   /* IonRangeSliderModule */
  ],
  declarations: [ 
  	TalentComponent,
  	SectorComponent,
  	BrowseTalentComponent,
    ProfileComponent,
    FilterComponent
  ]
})
export class TalentModule { }
