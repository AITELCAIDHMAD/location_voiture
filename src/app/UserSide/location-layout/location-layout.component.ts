import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'location-layout',
  templateUrl: './location-layout.component.html',
  styleUrls: ['./location-layout.component.css']
})
export class LocationLayoutComponent implements OnInit {
  @Input() list_Voiture=[];

  constructor() { }

  ngOnInit() {
  }

}
