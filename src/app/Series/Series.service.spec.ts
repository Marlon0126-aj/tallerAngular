/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SeriesService } from './Series.service';

describe('Service: Series', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService]
    });
  });

  it('should ...', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
