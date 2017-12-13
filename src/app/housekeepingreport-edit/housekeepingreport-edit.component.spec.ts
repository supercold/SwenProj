/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousekeepingreportEditComponent } from './housekeepingreport-edit.component';

describe('HousekeepingreportEditComponent', () => {
  let component: HousekeepingreportEditComponent;
  let fixture: ComponentFixture<HousekeepingreportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousekeepingreportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingreportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
