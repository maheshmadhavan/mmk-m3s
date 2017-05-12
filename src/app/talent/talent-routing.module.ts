import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentComponent } from './talent.component';
import { SectorComponent } from './sector.component';
import { BrowseTalentComponent } from './browse-talent.component';
import { ProfileComponent } from './profile.component';
import { FilterComponent } from './filter.component'

const routes: Routes = [
  {
    path: '',
    component: SectorComponent,
    data: {
      title: 'Choose Sectors'
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
    path: 'browse-talents',
    component: BrowseTalentComponent,
    data: {
      title: 'Browse Talents'
    }
  },
  {
    path: 'profile/:talentid',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    }
  },
  {
    path: 'talent-filter',
    component: FilterComponent,
    data: {
      title: 'Talent Filter'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule {}
