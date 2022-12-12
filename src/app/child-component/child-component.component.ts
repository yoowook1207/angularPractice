import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() parentToChild =''
  @Output() childToParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  passToParent(value: string) {
    this.childToParent.emit(value)
  }

}
