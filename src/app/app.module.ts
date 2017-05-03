import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
//services
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { LeaveService } from './services/leave.service';
import { HolidayService } from './services/holiday.service';
import { ReportService } from './services/report.service';
import { LogsService } from './services/logs.service';
import { SectorService } from './services/sector.service';
import { BrowseTalentService } from './services/browse-talent.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES
    
  ],
  providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthenticationService,
    UserService,
    ProjectService,
    LeaveService,
    HolidayService,
    ReportService,
    LogsService,
    SectorService,
    BrowseTalentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
