import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EditorComponent } from './editor.component';

// modules
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [EditorComponent],
  exports: [EditorComponent],
  imports: [CommonModule, QuillModule.forRoot()],
})
export class EditorModule {}
