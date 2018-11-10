import { Component, OnInit } from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
@Component({
  selector: 'notification',
  template: `<simple-notifications [options]="options"></simple-notifications>
`
})
export class NotificationsComponent  {

  constructor() { }
}


