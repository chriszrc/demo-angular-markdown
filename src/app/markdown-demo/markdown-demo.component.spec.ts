import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownDemoComponent } from './markdown-demo.component';

describe('MarkdownDemoComponent', () => {
  let component: MarkdownDemoComponent;
  let fixture: ComponentFixture<MarkdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
