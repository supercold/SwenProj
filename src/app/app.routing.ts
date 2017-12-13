import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffCreateComponent } from 'app/staff-create/staff-create.component';
import { StaffDetailComponent } from 'app/staff-detail/staff-detail.component';
import { StaffEditComponent } from 'app/staff-edit/staff-edit.component';
import { BookingComponent } from 'app/booking/booking.component';
import { BookingDetailComponent } from 'app/booking-detail/booking-detail.component';
import { BookingCreateComponent } from 'app/booking-create/booking-create.component';
import { BookingEditComponent } from 'app/booking-edit/booking-edit.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { ScheduleDetailComponent } from 'app/schedule-detail/schedule-detail.component';
import { ScheduleCreateComponent } from 'app/schedule-create/schedule-create.component';
import { ScheduleEditComponent } from 'app/schedule-edit/schedule-edit.component';
import { ReportsComponent } from 'app/reports/reports.component';
import { HomeComponent } from 'app/home/home.component';
import { DailyEditComponent } from 'app/daily-edit/daily-edit.component';
import { DailyCreateComponent } from 'app/daily-create/daily-create.component';
import { DailyDetailComponent } from 'app/daily-detail/daily-detail.component';
import { DailyComponent } from 'app/daily/daily.component';
import { WeeklyComponent } from 'app/weekly/weekly.component';
import { WeeklyDetailComponent } from 'app/weekly-detail/weekly-detail.component';
import { WeeklyCreateComponent } from 'app/weekly-create/weekly-create.component';
import { WeeklyEditComponent } from 'app/weekly-edit/weekly-edit.component';
import { MonthlyComponent } from 'app/monthly/monthly.component';
import { MonthlyDetailComponent } from 'app/monthly-detail/monthly-detail.component';
import { MonthlyCreateComponent } from 'app/monthly-create/monthly-create.component';
import { MonthlyEditComponent } from 'app/monthly-edit/monthly-edit.component';
import { YearlyEditComponent } from 'app/yearly-edit/yearly-edit.component';
import { YearlyCreateComponent } from 'app/yearly-create/yearly-create.component';
import { YearlyDetailComponent } from 'app/yearly-detail/yearly-detail.component';
import { YearlyComponent } from 'app/yearly/yearly.component';
import { GuestsinroomreportComponent } from 'app/guestsinroomreport/guestsinroomreport.component';
import { GuestsinroomreportCreateComponent } from 'app/guestsinroomreport-create/guestsinroomreport-create.component';
import { GuestsinroomreportDetailComponent } from 'app/guestsinroomreport-detail/guestsinroomreport-detail.component';
import { GuestsinroomreportEditComponent } from 'app/guestsinroomreport-edit/guestsinroomreport-edit.component';
import { RoomstatusreportComponent } from 'app/roomstatusreport/roomstatusreport.component';
import { RoomstatusreportDetailComponent } from 'app/roomstatusreport-detail/roomstatusreport-detail.component';
import { RoomstatusreportCreateComponent } from 'app/roomstatusreport-create/roomstatusreport-create.component';
import { RoomstatusreportEditComponent } from 'app/roomstatusreport-edit/roomstatusreport-edit.component';
import { HousekeepingreportComponent } from 'app/housekeepingreport/housekeepingreport.component';
import { HousekeepingreportDetailComponent } from 'app/housekeepingreport-detail/housekeepingreport-detail.component';
import { HousekeepingreportCreateComponent } from 'app/housekeepingreport-create/housekeepingreport-create.component';
import { HousekeepingreportEditComponent } from 'app/housekeepingreport-edit/housekeepingreport-edit.component';
import { RoomoccupancyComponent } from 'app/roomoccupancy/roomoccupancy.component';
import { RoomsComponent } from 'app/rooms/rooms.component';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';
import { FeedbackComponent } from 'app/feedback/feedback.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reports', component: ReportsComponent},
  { path: '', redirectTo: 'staffs', pathMatch: 'full' },
  { path: 'staffs', component: StaffComponent },
  { path: 'staff-details/:id', component: StaffDetailComponent },
  { path: 'staff-create', component: StaffCreateComponent },
  { path: 'staff-edit/:id', component: StaffEditComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'booking-details/:id', component: BookingDetailComponent },
  { path: 'booking-create', component: BookingCreateComponent },
  { path: 'booking-edit/:id', component: BookingEditComponent },
  { path: 'schedules', component: ScheduleComponent },
  { path: 'schedule-details/:id', component: ScheduleDetailComponent },
  { path: 'schedule-create', component: ScheduleCreateComponent },
  { path: 'schedule-edit/:id', component: ScheduleEditComponent },
  { path: 'dailys', component: DailyComponent },
  { path: 'daily-details/:id', component: DailyDetailComponent },
  { path: 'daily-create', component: DailyCreateComponent },
  { path: 'daily-edit/:id', component: DailyEditComponent },
  { path: 'weeklys', component: WeeklyComponent },
  { path: 'weekly-details/:id', component: WeeklyDetailComponent },
  { path: 'weekly-create', component: WeeklyCreateComponent },
  { path: 'weekly-edit/:id', component: WeeklyEditComponent },
  { path: 'monthlys', component: MonthlyComponent },
  { path: 'monthly-details/:id', component: MonthlyDetailComponent },
  { path: 'monthly-create', component: MonthlyCreateComponent },
  { path: 'monthly-edit/:id', component: MonthlyEditComponent },
  { path: 'yearlys', component: YearlyComponent },
  { path: 'yearly-details/:id', component: YearlyDetailComponent },
  { path: 'yearly-create', component: YearlyCreateComponent },
  { path: 'yearly-edit/:id', component: YearlyEditComponent },
  { path: 'guests', component: GuestsinroomreportComponent },
  { path: 'guest-details/:id', component: GuestsinroomreportDetailComponent },
  { path: 'guest-create', component: GuestsinroomreportCreateComponent },
  { path: 'guest-edit/:id', component: GuestsinroomreportEditComponent },
  { path: 'statuss', component: RoomstatusreportComponent },
  { path: 'status-details/:id', component: RoomstatusreportDetailComponent },
  { path: 'status-create', component: RoomstatusreportCreateComponent },
  { path: 'status-edit/:id', component: RoomstatusreportEditComponent },
  { path: 'housekeepings', component: HousekeepingreportComponent },
  { path: 'housekeeping-details/:id', component: HousekeepingreportDetailComponent },
  { path: 'housekeeping-create', component: HousekeepingreportCreateComponent },
  { path: 'housekeeping-edit/:id', component: HousekeepingreportEditComponent },
  { path: 'roomoccupancy', component: RoomoccupancyComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'feedback', component: FeedbackComponent}
  
  
  
  
  
  // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);