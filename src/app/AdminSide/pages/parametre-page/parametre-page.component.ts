import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-parametre-page',
  templateUrl: './parametre-page.component.html',
  styleUrls: ['./parametre-page.component.css'],
  providers: [Modal,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],

})
export class ParametrePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
