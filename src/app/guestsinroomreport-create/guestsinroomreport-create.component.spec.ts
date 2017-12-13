/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestsinroomreportCreateComponent } from './guestsinroomreport-create.component';

describe('GuestsinroomreportCreateComponent', () => {
  let component: GuestsinroomreportCreateComponent;
  let fixture: ComponentFixture<GuestsinroomreportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsinroomreportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsinroomreportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
