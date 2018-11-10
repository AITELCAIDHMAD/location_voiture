import {Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {AgenceService} from "../../Service/Agence.service";
import {Agence} from "../../Entity/Agence/Agence";
export class CustomModalContext extends BSModalContext {}
@Component({
  selector: 'agence-form',
  styleUrls:['./agence-form.component.css'],
  templateUrl:'./agence-form.component.html',
  providers:[AgenceService]
})
export class AgenceFormComponent  {
  @ViewChild('lgModal') bgModel;
  context: CustomModalContext;
  @Input() agence: Agence;
  idAdmin:string;

  constructor(public service:AgenceService) {
    this.agence=new Agence();

    //this.context = dialog.context;

  }

  ngOnInit(){
    this.idAdmin=localStorage.getItem("idAdmin");
    this.service.getAllAgences().subscribe((data)=>{
      //data is your patient list
      console.log('affiche data agence   -');;
      console.log( data[0]);

      this.agence=data[0];
      console.log('affiche agence info   -');;
      console.log( this.agence);
    })


  }
  //------------ envoyerFormule ---------------
  private envoyerFormule():void{
    this.service.addAgence(this.agence).subscribe((data)=>{
      alert(data);
    })
  }
  //-------------- modifierFormule -------------
  private modifierFormule():void{
    this.service.updateAgence(this.agence).subscribe((data)=>{
      alert(data);
    })
  }
  //------------- annulerFormule --------------
  private annulerFormule():void{

  }
  //-------------------------------------------
}

