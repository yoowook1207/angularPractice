import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-impure-pipes',
  templateUrl: './pure-impure-pipes.component.html',
  styleUrls: ['./pure-impure-pipes.component.scss'],
})
export class PureImpurePipesComponent implements OnInit {

  user = { name: 'Sung', age: 30 };

  constructor() {}

  ngOnInit(): void {
    
  }

  changeUser() {
    this.user.name = "semi"
  }
}
