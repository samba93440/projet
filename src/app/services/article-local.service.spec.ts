import { TestBed } from '@angular/core/testing';

import { ArticleLocalService } from './article-local.service';

describe('ArticleLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleLocalService = TestBed.get(ArticleLocalService);
    expect(service).toBeTruthy();
  });
});
