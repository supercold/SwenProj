import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StaffService } from './staff.service';
import { StaffComponent } from './staff/staff.component';  
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing } from 'app/app.routing';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffCreateComponent } from './staff-create/staff-create.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StaffDetailComponent,
    StaffCreateComponent,
    StaffEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StaffService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
