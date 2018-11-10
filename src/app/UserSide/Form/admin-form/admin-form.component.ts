import {Component, OnInit, Input} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {AdminService} from "../../Service/Admin.service";
//----------------------------------------------------------

import { NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Admin} from "../../Entity/Admin/Admin";
import { LocalStorageService } from 'angular-2-local-storage';

//----------------------------------------------------------
export class CustomModalContext extends BSModalContext {

}
@Component({

  selector: 'admin-form',
  templateUrl:'admin-form.component.html',
  providers:[AdminService]
})
export class AdminFormComponent implements OnInit{
  // context: CustomModalContext;
  @Input() admin:Admin;
  // service:AdminService;



  constructor(public service:AdminService,public localStorgaeService:LocalStorageService) {

    //this.context = dialog.context;
    this.admin=new Admin();

    //dialog.setCloseGuard(this);
  }

  ngOnInit(){
    this.service.getAdmin(localStorage.getItem("idAdmin")).subscribe((data)=>{
      //data is your patient list
      this.admin=data[0];

    })
  }

  //------------ envoyerFormule ---------------
  private envoyerFormule():void{
    this.service.addAdmin(this.admin).subscribe((data)=>{
        alert(data);
        })
  }
  //-------------- modifierFormule -------------
  private modifierFormule():void{
    this.service.updateAdmin(this.admin).subscribe((data)=>{
       alert(data);
    })
  }
  //------------- annulerFormule --------------
  private annulerFormule():void{

  }
  //-------------------------------------------
}


