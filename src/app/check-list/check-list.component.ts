import { Component, OnInit } from '@angular/core';
import { CheckItem } from '../check-item';
import { CheckListDataService } from '../check-list-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
//ng g component check-list
export class CheckListComponent implements OnInit {
  INIT_TOTAL_CNT: number = 4;
  checkList: CheckItem[] = [];
  curCheckedItem: CheckItem;

  constructor(public checkListDataService: CheckListDataService) { 
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  ngOnInit() {
  }

  onChangeCnt(op:string){
    this.checkListDataService.changeTotalCntByOp(op);
  }

  onChecked(isChecked, checkedItem:CheckItem){
    checkedItem.isChecked = isChecked;
    this.curCheckedItem = checkedItem;
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx){
    this.checkListDataService.uncheckItem(idx);
  }

}
