import {Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';

import {VoitureService} from "../../Service/Voiture.service";
import {Voiture} from "../../Entity/Voiture/Voiture";

export class CustomModalContext extends BSModalContext {

}

//----------------------------------------------------------
@Component({
  selector: 'voiture-form',
  templateUrl: 'voiture-form.component.html',
  styleUrls: ['voiture-form.component.css'],
  providers:[VoitureService]
})
export class VoitureFormComponent {
  context: CustomModalContext;
  @Input() voiture: Voiture;

  constructor(public service:VoitureService) {
    this.voiture=new Voiture();

    //this.context = dialog.context;

  }

  ngOnInit(){



  }
  //------------ envoyerFormule ---------------
  private envoyerFormule():void{
    this.service.addVoiture(this.voiture).subscribe((data)=>{
      alert(data);
    })
  }
  //-------------- modifierFormule -------------
  private modifierFormule():void{
    this.service.updateVoiture(this.voiture).subscribe((data)=>{
      alert(data);
    })
  }
  //------------- annulerFormule --------------
  private annulerFormule():void{

  }
  //-------------------------------------------
}

