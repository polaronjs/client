import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

// types
import { Article } from '@entities';
import { TextEditor } from '@lazy/editor/editor.component';

@Component({
  selector: 'p-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements AfterViewInit {
  @ViewChild('titleElement') titleElement!: ElementRef<HTMLElement>;
  textEditor!: TextEditor;

  article!: Article;

  constructor(private location: Location) {}

  ngAfterViewInit() {
    this.titleElement.nativeElement.textContent =
      this.article?.title?.toString() || '';
  }

  onEditorCreated(TextEditor: TextEditor) {
    this.textEditor = TextEditor;
  }

  updateArticle(
    data: Partial<Record<keyof Omit<Article, 'date'>, Event | string>>
  ) {
    if (!this.article) {
      this.article = {};
    }

    (Object.keys(data) as (keyof typeof data)[]).forEach((key) => {
      const val = data[key];
      this.article[key] =
        (val instanceof Event
          ? (val!.target as HTMLElement).textContent
          : val) || '';
    });
  }

  navigateBack() {
    this.location.back();
  }
}
