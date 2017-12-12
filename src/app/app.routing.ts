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

const appRoutes: Routes = [
  
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
  { path: 'reports', component: ReportsComponent}
  
  // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);