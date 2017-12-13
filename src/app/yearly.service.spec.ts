/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YearlyService } from './yearly.service';

describe('YearlyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YearlyService]
    });
  });

  it('should ...', inject([YearlyService], (service: YearlyService) => {
    expect(service).toBeTruthy();
  }));
});
