import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentComponent } from './talent.component';
import { SectorComponent } from './sector.component';
import { ProfileComponent } from './profile.component';

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
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule {}
