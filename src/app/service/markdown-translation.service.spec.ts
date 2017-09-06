import { TestBed, inject } from '@angular/core/testing';

import { MarkdownTranslationService } from './markdown-translation.service';

describe('MarkdownTranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownTranslationService]
    });
  });

  it('should be created', inject([MarkdownTranslationService], (service: MarkdownTranslationService) => {
    expect(service).toBeTruthy();
  }));
});
