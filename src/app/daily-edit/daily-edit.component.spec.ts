/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailyEditComponent } from './daily-edit.component';

describe('DailyEditComponent', () => {
  let component: DailyEditComponent;
  let fixture: ComponentFixture<DailyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
