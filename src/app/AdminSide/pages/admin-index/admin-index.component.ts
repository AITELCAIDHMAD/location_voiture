import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-admin-index',
  templateUrl: 'admin-index.component.html',
  styleUrls: ['admin-index.component.css'],
  providers: [Modal,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],

})
export class AdminIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
