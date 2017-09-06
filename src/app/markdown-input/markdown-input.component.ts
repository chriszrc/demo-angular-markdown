import { Component, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { MarkdownTranslationService } from "../service/markdown-translation.service";

@Component({
  selector: 'markdown-input',
  templateUrl: './markdown-input.component.html',
  styleUrls: ['./markdown-input.component.css']
})
export class MarkdownInputComponent implements OnInit {

  translatedMarkdown:Observable<string>;
  private markdownText = new Subject<string>();
  @Input('mi-placeholder') placeHolderText: string = "Try me :)";

  constructor(
    private markdownTranslationService: MarkdownTranslationService
  ){}

  ngOnInit() {
    this.translatedMarkdown = this.markdownText
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if new text is same as previous
      .switchMap((term) => {
        console.log(term);
        return term   // switch to new observable each time
        // return the translation observable
        ? this.markdownTranslationService.translate(term)
        // or the observable of empty string if its empty
        : Observable.of<string>("")
      })
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of("");
      });
  }

  translateMarkdown(markdown: string): void {
    // Push markdown text into the observable stream.
    this.markdownText.next(markdown);
  }

}
