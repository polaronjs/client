import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './article.routes';

// pages
import { NewArticleComponent } from './new-article.component';

// modules
import { EditorModule } from '@lazy/editor/editor.module';
import { IncludedModule } from '@included/included.module';
import { SelectModule } from '@lazy/select/select.module';

@NgModule({
  declarations: [NewArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EditorModule,
    IncludedModule,
    SelectModule,
  ],
})
export class NewArticleModule {}
