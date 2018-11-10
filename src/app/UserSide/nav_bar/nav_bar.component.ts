import { Component, ViewContainerRef, ViewEncapsulation,ViewChild, ElementRef , OnInit,Output,EventEmitter } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {AdminFormComponent} from "../Form/admin-form/admin-form.component";
import {SigneUpComponent} from "../signe-up/signe-up.component";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import { LocalStorageService } from 'angular-2-local-storage';
import {isNullOrUndefined} from "util";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'nav-bar',
  templateUrl: 'nav_bar.component.html',
  styleUrls: ['nav_bar.component.css'],
  providers: [Modal,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})

export class NavBarComponent {
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('closeBtn') closeBtn: ElementRef;
  modalRef:any;
  isConnected:boolean;
  constructor(public modal: Modal,private localStorageService: LocalStorageService,private router: Router,private location: Location) {



    if(localStorage.getItem('connected')!="" && localStorage.getItem('connected')!=isNullOrUndefined){
      if(localStorage.getItem('connected')=="true")
        this.isConnected=true;
        else
        this.isConnected=false;
    }
  }
  //call this wherever you needed to close modal
  public closeModal(): void {
   // this.closeBtn.nativeElement.click();
  }

  openLogin() {
    const modalRef =this.modal.open(SigneUpComponent ,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

  }

  logOut(){
   console.log("route ="+this.router.url);
    localStorage.setItem('connected','false');
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    //this.router.navigate(['index']); // tells them they've been logged out (somehow)
   // window.location.reload();
  }


}
