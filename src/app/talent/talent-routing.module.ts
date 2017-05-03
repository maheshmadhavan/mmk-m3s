import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentComponent } from './talent.component';
import { SectorComponent } from './sector.component';
import { BrowseTalentComponent } from './browse-talent.component';
import { ProfileComponent } from './profile.component';

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
