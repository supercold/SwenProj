import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HomeComponent } from './home/home.component';
import { HousekeepingreportComponent } from './housekeepingreport/housekeepingreport.component';
import { HousekeepingreportCreateComponent } from './housekeepingreport-create/housekeepingreport-create.component';
import { HousekeepingreportDetailComponent } from './housekeepingreport-detail/housekeepingreport-detail.component';
import { HousekeepingreportEditComponent } from './housekeepingreport-edit/housekeepingreport-edit.component';
import { GuestsinroomreportComponent } from './guestsinroomreport/guestsinroomreport.component';
import { GuestsinroomreportCreateComponent } from './guestsinroomreport-create/guestsinroomreport-create.component';
import { GuestsinroomreportEditComponent } from './guestsinroomreport-edit/guestsinroomreport-edit.component';
import { GuestsinroomreportDetailComponent } from './guestsinroomreport-detail/guestsinroomreport-detail.component';
import { RoomstatusreportComponent } from './roomstatusreport/roomstatusreport.component';
import { RoomstatusreportCreateComponent } from './roomstatusreport-create/roomstatusreport-create.component';
import { RoomstatusreportEditComponent } from './roomstatusreport-edit/roomstatusreport-edit.component';
import { RoomstatusreportDetailComponent } from './roomstatusreport-detail/roomstatusreport-detail.component';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { YearlyComponent } from './yearly/yearly.component';
import { DailyCreateComponent } from './daily-create/daily-create.component';
import { DailyEditComponent } from './daily-edit/daily-edit.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';
import { WeeklyCreateComponent } from './weekly-create/weekly-create.component';
import { WeeklyEditComponent } from './weekly-edit/weekly-edit.component';
import { WeeklyDetailComponent } from './weekly-detail/weekly-detail.component';
import { MonthlyCreateComponent } from './monthly-create/monthly-create.component';
import { MonthlyEditComponent } from './monthly-edit/monthly-edit.component';
import { MonthlyDetailComponent } from './monthly-detail/monthly-detail.component';
import { YearlyCreateComponent } from './yearly-create/yearly-create.component';
import { YearlyEditComponent } from './yearly-edit/yearly-edit.component';
import { YearlyDetailComponent } from './yearly-detail/yearly-detail.component';
import { DailyService } from 'app/daily.service';
import { GuestService } from 'app/guest.service';
import { HousekeepingreportService } from 'app/housekeepingreport.service';
import { MonthlyService } from 'app/monthly.service';
import { RoomstatusreportService } from 'app/roomstatusreport.service';
import { WeeklyService } from 'app/weekly.service';
import { YearlyService } from 'app/yearly.service';
import { RoomoccupancyComponent } from './roomoccupancy/roomoccupancy.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserserviceService } from 'app/userservice.service';
import { FeedbackService } from 'app/feedback.service';

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
    ReportsComponent,
    HomeComponent,
    HousekeepingreportComponent,
    HousekeepingreportCreateComponent,
    HousekeepingreportDetailComponent,
    HousekeepingreportEditComponent,
    GuestsinroomreportComponent,
    GuestsinroomreportCreateComponent,
    GuestsinroomreportEditComponent,
    GuestsinroomreportDetailComponent,
    RoomstatusreportComponent,
    RoomstatusreportCreateComponent,
    RoomstatusreportEditComponent,
    RoomstatusreportDetailComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
    DailyCreateComponent,
    DailyEditComponent,
    DailyDetailComponent,
    WeeklyCreateComponent,
    WeeklyEditComponent,
    WeeklyDetailComponent,
    MonthlyCreateComponent,
    MonthlyEditComponent,
    MonthlyDetailComponent,
    YearlyCreateComponent,
    YearlyEditComponent,
    YearlyDetailComponent,
    RoomoccupancyComponent,
    RoomsComponent,
    FeedbackComponent,
    SignupComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers:
   [StaffService, 
    BookingService, 
    ScheduleService,
    DailyService,
    GuestService,
    HousekeepingreportService,
    MonthlyService,
    RoomstatusreportService,
    WeeklyService,
    YearlyService,
    UserserviceService,
    FeedbackService,
    {provide: LocationStrategy, 
      useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
