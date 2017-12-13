/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeeklyService } from './weekly.service';

describe('WeeklyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyService]
    });
  });

  it('should ...', inject([WeeklyService], (service: WeeklyService) => {
    expect(service).toBeTruthy();
  }));
});
