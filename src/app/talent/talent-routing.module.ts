import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentComponent } from './talent.component';
import { SectorComponent } from './sector.component';

const routes: Routes = [
  {
    path: '',
    component: TalentComponent,
    data: {
      title: 'Talent'
    }
  },
  {
    path: 'sector',
    component: SectorComponent,
    data: {
      title: 'Choose Sectors'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule {}
