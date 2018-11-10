import {Component, ViewChild, ElementRef, Input} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {LocationService} from "../../Service/Location.service";
import {Location} from "../../Entity/Locations/Location";
//----------------------------------------------------------

export class CustomModalContext extends BSModalContext {

}
@Component({
  selector: 'location-form',
  templateUrl: 'location-form.component.html',
  styleUrls: ['location-form.component.css'],
  providers:[LocationService]
})
export class LocationFormComponent  {
  adminIsConnected:boolean;
 // context: CustomModalContext;
  @Input() location: Location;

  constructor(public service:LocationService) {
    this.location=new Location();

    //this.context = dialog.context;

  }

  ngOnInit(){



  }
  //------------ envoyerFormule ---------------
  private envoyerFormule():void{
    this.service.addLocation(this.location).subscribe((data)=>{
      alert(data);
    })
  }
  //-------------- modifierFormule -------------
  private modifierFormule():void{
    this.service.updateLocation(this.location).subscribe((data)=>{
      alert(data);
    })
  }
  //------------- annulerFormule --------------
  private annulerFormule():void{

  }
  //-------------------------------------------
}


