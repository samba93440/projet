import { TestBed } from '@angular/core/testing';

import { UsersOnlineService } from './users-online.service';

describe('UsersOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersOnlineService = TestBed.get(UsersOnlineService);
    expect(service).toBeTruthy();
  });
});
