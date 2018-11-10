import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'location voiture';
  lat: number = 33.582983;
  lng: number = -7.619407;


  constructor() { }

  ngOnInit() {
  }

}
