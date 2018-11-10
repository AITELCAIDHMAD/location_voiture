import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {UserService} from "../../../UserSide/Service/User.service";
import {User} from "../../../UserSide/Entity/User/User";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [UserService,Modal,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],

})
export class UserPageComponent implements OnInit {
  list_user=[];
  user:User;
  idToDelete:number;

  public constructor(public service:UserService) {
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

    this.service.getAllUsers().subscribe((data)=>{
      this.list_user=data;

    });

  }

  public buttonYes():void {
    this.service.removeUser(this.idToDelete+"").subscribe((data)=>{
      //data is your patient list
      console.log( "remove user");
    });


  }
  public edit(id:number):void {
    this.service.getUserById(id+"").subscribe((data)=>{
      console.log( "data get user By  id ");
      console.log(data[0]);
      this.user=data[0];

      console.log( "this.user get user By  id ");
      console.log(this.user);

    })
  }

  public delete(id:number):void {
    this.idToDelete=id;
  }
}
