/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuestService } from './guest.service';

describe('GuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestService]
    });
  });

  it('should ...', inject([GuestService], (service: GuestService) => {
    expect(service).toBeTruthy();
  }));
});
