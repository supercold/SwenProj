/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HousekeepingreportService } from './housekeepingreport.service';

describe('HousekeepingreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousekeepingreportService]
    });
  });

  it('should ...', inject([HousekeepingreportService], (service: HousekeepingreportService) => {
    expect(service).toBeTruthy();
  }));
});
