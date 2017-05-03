import { NgModule } from '@angular/core';

import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';
import { SectorComponent } from './sector.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    TalentRoutingModule
  ],
  declarations: [ 
  	TalentComponent,
  	SectorComponent,
    ProfileComponent
  ]
})
export class TalentModule { }
