import { Injectable } from '@angular/core';
import * as marked from 'marked';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MarkdownTranslationService {

  constructor() { }

  translate(markdown: string): Observable<string> {
    return Observable.of(marked(markdown));
  }

}
