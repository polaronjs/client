import { Component, Input, Output, EventEmitter } from '@angular/core';
import Quill from 'quill';
// @ts-ignore there are no types for this module
import ImageResize from 'quill-image-resize-module';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

/* TODO:NICK
  This component needs tests, but the ImageResize module is throwing an error that I can't resolve
  TypeError: Cannot read property 'imports' of undefined
*/

@Component({
  selector: 'p-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  // inputs
  @Input() content!: string;

  // outputs
  @Output() private onChange = new EventEmitter<string>();
  @Output() private videoOpen = new EventEmitter<Subject<string>>();
  @Output() private imageOpen = new EventEmitter<Subject<string>>();

  private editor: Quill | null = null;

  public customModules = [
    {
      implementation: ImageResize,
      path: 'modules/imageResize',
    },
  ];

  // editor config
  public modules = {
    imageResize: true,
    toolbar: {
      handlers: {
        image: () => {
          const payload = new Subject<string>();

          payload.pipe(take(1)).subscribe((url: string) => {
            this.addMediaFromUrl('image', url);
          });

          this.imageOpen.emit(payload);
        },
        video: () => {
          const payload = new Subject<string>();

          payload.pipe(take(1)).subscribe((url: string) => {
            this.addMediaFromUrl('video', url);
          });

          this.videoOpen.emit(payload);
        },
      },
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'link', 'video', 'image'],
        ['clean'],
      ],
    },
  };

  constructor() {}

  addMediaFromUrl(type: 'image' | 'video', url: string) {
    const range = this.editor?.getSelection();

    if (range) {
      // we now know that both the range and this.editor are defined
      // so we can proceed to add the image
      this.editor!.insertEmbed(range.index, type, url);
    }
  }

  handleChange({ editor }: { editor: Quill }) {
    this.updateEditor(editor);
    this.onChange.emit(editor.getText());
  }

  handleSelectionChange({ editor }: { editor: Quill }) {
    this.updateEditor(editor);
  }

  updateEditor(editor: Quill) {
    this.editor = editor;
  }

  ngOnDestroy() {
    // any clean-up logic here
  }
}
