import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
//ng g component check-list-result
export class CheckListResultComponent implements OnInit {
  _checkedData: string[];
  checkedCnt: number;

  constructor() { }

  @Input() 
  set checkedResult(checkedResult: string[]){
    if(!checkedResult){
      return;
    }
    this._checkedData = checkedResult;
    this.checkedCnt = this._checkedData.length;
  }

  ngOnInit() { }


}
