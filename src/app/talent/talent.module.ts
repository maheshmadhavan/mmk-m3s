import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';
import { SectorComponent } from './sector.component';
import { BrowseTalentComponent } from './browse-talent.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    TalentRoutingModule,
    CommonModule
  ],
  declarations: [ 
  	TalentComponent,
  	SectorComponent,
  	BrowseTalentComponent,
    ProfileComponent
  ]
})
export class TalentModule { }
