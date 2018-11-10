import { Component, OnInit } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {LocationService} from "../../../UserSide/Service/Location.service";
import {Location} from "../../../UserSide/Entity/Locations/Location";


@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css'],
  providers: [LocationService]
})
export class LocationsPageComponent implements OnInit {
  list_location=[];
  location :Location;

  public constructor(public service:LocationService) {
    $(document).ready(function(){
      $("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
          $("#mytable input[type=checkbox]").each(function () {
            $(this).prop("checked", true);
          });

        } else {
          $("#mytable input[type=checkbox]").each(function () {
            $(this).prop("checked", false);
          });
        }
      });
    });

  }

  public ngOnInit():void {
    this.service.getAllLocations().subscribe((data)=>{
      //data is your patient list
      this.list_location=data;
      console.log('affiche  2----------------------------------------------------');;
      console.log( this.list_location);
    })


  }

  public buttonYes():void {
    this.service.removeLocation("0").subscribe((data)=>{
      //data is your patient list
      console.log( "remove location");
    });
  }


  public edit(id:number):void {
    this.service.getLocationById(id+"").subscribe((data)=>{
      this.location=data;
    })
  }

  public delete(id:number):void {

  }

}
