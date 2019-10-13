import { TestBed } from '@angular/core/testing';

import { CommentairesOnlineService } from './commentaires-online.service';

describe('CommentairesOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentairesOnlineService = TestBed.get(CommentairesOnlineService);
    expect(service).toBeTruthy();
  });
});
