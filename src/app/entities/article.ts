import { dashCaseToCamelCase } from '@angular/compiler/src/util';

export class Article {
  public title?: string;
  public body?: string;
  public category?: string = 'uncategorized';
  public date?: Date;

  static from(data: Partial<Record<keyof Article, any>>) {
    const a = new Article();

    if (data.title) {
      a.title = data.title.toString();
    }

    if (data.body) {
      a.body = data.body.toString();
    }

    if (data.category) {
      // if we have a complete category object, save the name and discard extra properties
      // otherwise, assume we have the string name and use it
      a.category = data.category?.name || data.category.toString();
    }

    if (data.date) {
      if (data.date instanceof Date) {
        a.date = data.date;
      } else {
        a.date = new Date(data.date);
      }
    }
  }
}
