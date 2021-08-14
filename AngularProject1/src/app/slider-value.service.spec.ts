import { TestBed } from '@angular/core/testing';

import { SliderValueService } from './slider-value.service';

describe('SliderValueService', () => {
  let service: SliderValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
