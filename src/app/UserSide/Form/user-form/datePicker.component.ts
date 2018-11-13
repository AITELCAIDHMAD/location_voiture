/*import { Component, OnInit } from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
@Component({
  selector: 'date-picker',
  template: `
<!-- input box styling is bootstrap 3.3.7 -->
<form>
    <div class="input-group">
        <input class="form-control" style="float:none" placeholder="Select a date" ngx-mydatepicker name="mydate"
               [(ngModel)]="model" [options]="myOptions" #dp="ngx-mydatepicker" (dateChanged)="onDateChanged($event)"/>

        <span class="input-group-btn">
            <button type="button" class="btn btn-default" (click)="dp.clearDate()">
                <i class="glyphicon glyphicon-remove"></i>
            </button>
            <button type="button" class="btn btn-default" (click)="dp.toggleCalendar()">
                <i class="glyphicon glyphicon-calendar"></i>
            </button>
        </span>
    </div>
</form>

`
})
export class DatePickerComponent  {
  private myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  // Initialized to specific date (09.10.2018)
  private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
  }
}

*/