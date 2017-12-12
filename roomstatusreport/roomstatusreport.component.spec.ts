/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomstatusreportComponent } from './roomstatusreport.component';

describe('RoomstatusreportComponent', () => {
  let component: RoomstatusreportComponent;
  let fixture: ComponentFixture<RoomstatusreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomstatusreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomstatusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
