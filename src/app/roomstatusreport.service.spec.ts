/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomstatusreportService } from './roomstatusreport.service';

describe('RoomstatusreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomstatusreportService]
    });
  });

  it('should ...', inject([RoomstatusreportService], (service: RoomstatusreportService) => {
    expect(service).toBeTruthy();
  }));
});
