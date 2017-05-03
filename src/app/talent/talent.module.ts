import { NgModule } from '@angular/core';

import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';
import { SectorComponent } from './sector.component';

@NgModule({
  imports: [
    TalentRoutingModule
  ],
  declarations: [ 
  	TalentComponent,
  	SectorComponent
  ]
})
export class TalentModule { }
