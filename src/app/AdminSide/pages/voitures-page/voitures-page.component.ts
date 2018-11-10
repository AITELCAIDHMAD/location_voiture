import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {VoitureService} from "../../../UserSide/Service/Voiture.service";
import {Voiture} from "../../../UserSide/Entity/Voiture/Voiture";
@Component({
  selector: 'app-voitures-page',
  templateUrl: './voitures-page.component.html',
  styleUrls: ['./voitures-page.component.css'],
  providers: [VoitureService,Modal,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],

})
export class VoituresPageComponent implements OnInit {
  list_Voiture=[];
  voiture:Voiture;
  deletedId:number;

  public constructor(public service:VoitureService) {
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
    this.service.getAllVoituresWithoutLimit().subscribe((data)=>{
      //data is your patient list
      this.list_Voiture=data;
      console.log('affiche  2----------------------------------------------------');;
      console.log( this.list_Voiture);
    })


  }

  public buttonYes():void {
    this.service.removeVoiture(this.deletedId+"").subscribe((data)=>{
      //data is your patient list
      console.log( "remove voiture");
    });


  }


  public  openModalajouter():void {
    this.voiture = new Voiture();

  }

  public edit(id:number):void {
      this.service.getVoitureById(id+"").subscribe((data)=>{
      this.voiture=data[0];
    })
  }


  public delete(id:number):void {
        this.deletedId=id;
    }

}


