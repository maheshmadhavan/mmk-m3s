import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { P404Component } from './pages/404.component';
import { AuthGuard } from './auth-guard.service';
import { CreateTalentComponent } from './talent/create-talent.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: 'pages', 
    component: SimpleLayoutComponent,   
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },  
  {
    path: 'talent',    
    component: FullLayoutComponent,
    data: {
      title: 'Talent'
    },
    children: [
      {
        path: '',
        loadChildren: './talent/talent.module#TalentModule',
      },    
     
    ]
  },
   {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
  }, 
  // {
  //   path: 'client/create-talent',
  //   canActivate: [AuthGuard],
  //   component: CreateTalentComponent,
  //   data: {
  //     title: 'Talent-Create'
  //   }
  // },

  {
    path: 'client/create-talent',
    canActivate: [AuthGuard],    
    component: FullLayoutComponent,
    data: {
      title: 'Talent-Create'
    },
    children: [
             {
        path: '',        
        component: CreateTalentComponent,
        data: {

                title: 'Talent-Create'

              }
            },
      ]
  },

  {path : '**',redirectTo: '404'}   
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
