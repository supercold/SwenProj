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
import { BookingService } from 'app/booking.service';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingCreateComponent } from './booking-create/booking-create.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleService } from 'app/schedule.service';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StaffDetailComponent,
    StaffCreateComponent,
    StaffEditComponent,
    BookingComponent,
    BookingDetailComponent,
    BookingCreateComponent,
    BookingEditComponent,
    ScheduleComponent,
    ScheduleDetailComponent,
    ScheduleCreateComponent,
    ScheduleEditComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StaffService, BookingService, ScheduleService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
