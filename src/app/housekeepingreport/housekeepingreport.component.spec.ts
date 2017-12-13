/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousekeepingreportComponent } from './housekeepingreport.component';

describe('HousekeepingreportComponent', () => {
  let component: HousekeepingreportComponent;
  let fixture: ComponentFixture<HousekeepingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousekeepingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
