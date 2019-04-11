import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
//ng g component check-list-result
export class CheckListResultComponent implements OnInit {
  @Input() checkedResult: string[];

  checkedCnt: number;

  constructor() { 
    // this.initResult();
    // const buttonElem = document.querySelector('button');
    // buttonElem.addEventListener('click', () => this.collectCheckedResult());
  }

  ngOnInit() {
  }

  // private initResult() {
  //   this.checkedCnt = 0;
  //   this.checkedResult = [];
  // }

  // private collectCheckedResult(){
  //   this.initResult();
  //   const spanElems = document.querySelectorAll('span');
  //   for(let i=0;i<spanElems.length; i++){
  //     const spanElem = spanElems.item(i);

  //     const checkboxElem = spanElem.querySelector('input');
  //     if(checkboxElem.checked) {
  //       this.checkedResult.push(spanElem.querySelector('label').innerText);
  //     }
  //   }

  //   this.checkedCnt = this.checkedResult.length;
  // }

}
