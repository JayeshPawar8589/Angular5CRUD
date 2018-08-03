import { TestBed, inject } from '@angular/core/testing';

import { TestuserService } from './testuser.service';

describe('TestuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestuserService]
    });
  });

  it('should be created', inject([TestuserService], (service: TestuserService) => {
    expect(service).toBeTruthy();
  }));
});
