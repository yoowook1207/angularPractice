import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.html',
  styleUrls: ['./data-transfer.scss'],
})
export class DataTransferComponent implements OnInit {
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
