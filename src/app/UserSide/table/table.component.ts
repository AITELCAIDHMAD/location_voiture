import { Component, OnInit } from '@angular/core';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import {VoitureService} from "../Service/Voiture.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[VoitureService]
})
export class TableComponent implements OnInit {
  list_Voiture=[];

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
    this.service.removeVoiture("0").subscribe((data)=>{
      //data is your patient list
      console.log( "remove voiture");
        });


  }


}


