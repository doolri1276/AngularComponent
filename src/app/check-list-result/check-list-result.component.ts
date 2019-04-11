import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
//ng g component check-list-result
export class CheckListResultComponent implements OnInit {
  checkedCnt: number;
  checkedResult: string[];

  constructor() { 
    this.initResult();
  }

  ngOnInit() {
  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }

}
