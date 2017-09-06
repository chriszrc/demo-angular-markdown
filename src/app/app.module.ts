import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownDemoComponent } from './markdown-demo/markdown-demo.component';
import { MarkdownInputComponent } from './markdown-input/markdown-input.component';
import { MarkdownTranslationService } from "./service/markdown-translation.service";

@NgModule({
  declarations: [
    AppComponent,
    MarkdownDemoComponent,
    MarkdownInputComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdInputModule,
    MdCardModule,
    AppRoutingModule
  ],
  providers: [
    MarkdownTranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
