import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {
  value: string = '';
  changeByChild: string = '';
  constructor() {}

  ngOnInit(): void {}

  passValue() {
    this.value = 'clicked!'
  }

  showDataFromChild(e:string) {
    this.changeByChild = e
  }
}
