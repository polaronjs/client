import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'p-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() tag!: string;

  @Output() remove: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
