import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffCreateComponent } from 'app/staff-create/staff-create.component';
import { StaffDetailComponent } from 'app/staff-detail/staff-detail.component';
import { StaffEditComponent } from 'app/staff-edit/staff-edit.component';

const appRoutes: Routes = [
  
  { path: '', redirectTo: 'staffs', pathMatch: 'full' },
  { path: 'staffs', component: StaffComponent },
  { path: 'staff-details/:id', component: StaffDetailComponent },
  { path: 'staff-create', component: StaffCreateComponent },
  { path: 'staff-edit/:id', component: StaffEditComponent }
  // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);