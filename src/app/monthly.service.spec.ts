/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonthlyService } from './monthly.service';

describe('MonthlyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthlyService]
    });
  });

  it('should ...', inject([MonthlyService], (service: MonthlyService) => {
    expect(service).toBeTruthy();
  }));
});
