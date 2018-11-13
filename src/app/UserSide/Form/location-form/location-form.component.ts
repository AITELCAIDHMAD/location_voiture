import {Component, ViewChild, ElementRef, Input} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {LocationService} from "../../Service/Location.service";
import {LocationM} from "../../Entity/Locations/Location";
import { FormBuilder, FormGroup } from '@angular/forms';
//----------------------------------------------------------
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { DatePicker } from 'angular2-datetimepicker';


export class CustomModalContext extends BSModalContext {
 
  

}
@Component({
  selector: 'location-form',
  templateUrl: 'location-form.component.html',
  styleUrls: ['location-form.component.css'],
  providers:[LocationService]
})
export class LocationFormComponent   {
  adminIsConnected:boolean;
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  show:boolean=false;

 // context: CustomModalContext;
  @Input() location: LocationM;

  constructor(private router: Router,public service:LocationService,private modalService: NgbModal,private _fb: FormBuilder) {

    this.location=new LocationM();

    DatePicker.prototype.ngOnInit = function() {
      this.settings = Object.assign(this.defaultSettings, this.settings);
      if (this.settings.defaultOpen) {
      this.popover = true;
      }
      this.date = new Date();
      };


      DatePicker.prototype.done = function () {
        this.popover = false;
        this.onDateSelect.emit(this.date);
      }

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

  go() {
    this.show=true;
     
  }
}


