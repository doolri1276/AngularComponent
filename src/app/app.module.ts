import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import { FormsModule } from '@angular/forms';
import { ResultGraphComponent } from './check-list/check-list-result/result-graph/result-graph.component';
import { CheckListDataService } from './check-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent,
    ResultGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CheckListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
