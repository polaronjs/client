import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './article.routes';

// pages
import { NewArticleComponent } from './new-article.component';

@NgModule({
  declarations: [NewArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewArticleModule {}
