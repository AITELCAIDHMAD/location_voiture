import { AlertService } from './../../alert/alert.service';
import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  show:boolean=false;
  constructor(private alertService: AlertService){
   
  }


  private  go():void{
    this.show=true;
   }
 
 
   success(message: string) {
     this.alertService.success(message);
   }


}
