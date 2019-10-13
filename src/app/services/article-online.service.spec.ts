import { TestBed } from '@angular/core/testing';

import { ArticleOnlineService } from './article-online.service';

describe('ArticleOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleOnlineService = TestBed.get(ArticleOnlineService);
    expect(service).toBeTruthy();
  });
});
