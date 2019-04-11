import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
//ng g component check-list
export class CheckListComponent implements OnInit {
  checkList: string[];
  checkedResult: boolean[] = [];

  constructor() { 
    this.checkList = [
      'check list one',
      'check list two',
      'check list three',
      'check list four'
    ];
    this.checkList.forEach(() => this.checkedResult.push(false));
  }

  ngOnInit() {
  }

}
