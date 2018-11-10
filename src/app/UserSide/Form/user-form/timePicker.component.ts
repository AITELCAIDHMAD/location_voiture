import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'time-picker',
  template: `
<input class="form-control" placeholder="Date /Heure Location" [ngModel]="momentValue | date: 'short'" [(dateTimePicker)]="momentValue" readonly />
`
})
export class TimePickerComponent {
  constructor() { }
}




