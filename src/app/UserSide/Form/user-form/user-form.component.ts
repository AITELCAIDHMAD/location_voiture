import { User } from './../../Entity/User/User';
import { Component,ViewChild, ElementRef,OnInit,Input } from '@angular/core';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';

import {UserService} from "../../Service/User.service";

//----------------------------------------------------------
export class CustomModalContext extends BSModalContext {

}

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
  providers:[UserService]
})
export class UserFormComponent {
  context: CustomModalContext;
  @Input() user: User;
  @Input() adminUse: boolean=false;
  password_user1:string;
  password_user2:string;

  constructor(public service:UserService,private localStorageService: LocalStorageService) {


    //this.context = dialog.context;

  }

  ngOnInit(){
    if(this.user==undefined || this.user==null){
      this.user=new User();

      this.service.getUserById(1+"").subscribe((data)=>{
        console.log(">>>>>>>>>>>>>>>>>>> "+data[0]);
        if(data[0]!=undefined && data[0]!=null)
                 this.user=data[0];
      })
    }
       




  }
  //------------ envoyerFormule ---------------
  private envoyerFormule():void{
    this.service.addUser(this.user).subscribe((data)=>{
      alert(data);
    })
  }
  //-------------- modifierFormule -------------
  private modifierFormule():void{
    this.service.updateUser(this.user).subscribe((data)=>{
      alert(data);
    })
  }
  //------------- annulerFormule --------------
  private annulerFormule():void{

  }
  //-------------------------------------------
}

