import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EditorComponent } from './editor.component';

// modules
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorComponent],
  exports: [EditorComponent],
  imports: [CommonModule, QuillModule.forRoot(), FormsModule],
})
export class EditorModule {}
