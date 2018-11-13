import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Voiture} from "../Entity/Voiture/Voiture";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {LocationChercher} from "./locationChercher.interface";
import {VoitureService} from "../Service/Voiture.service";
import { DatePicker } from 'angular2-datetimepicker';
import * as moment from 'moment';


@Component({
  selector: 'cherche-location',
  templateUrl: 'cherche_location.component.html',
  styleUrls: ['cherche_location.component.css'],
  providers:[VoitureService]
})
export class ChercheLocationComponent implements OnInit{
  //declaration
  tab = [];
   list_Voiture = [];
  i: number;
  voiture1:Voiture;
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  public date: Date = new Date();
  public  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MMM-yyyy hh:mm a',
      defaultOpen: false,
      closeOnSelect:true


  }

  constructor(private modalService: NgbModal,private _fb: FormBuilder,private service:VoitureService) {
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
  }

  ngOnInit() {
    for (this.i = 1; this.i <= 10; this.i++) {
      this.tab[this.i] = this.i;
    }
// we will initialize our form model here
    // the short way
    this.myForm = this._fb.group({
      marque_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      model_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      type_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      nombre_personne_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      type_carbirant_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      reservoire_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      couleur_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      boite_vitesse_voiture: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });
  }

  //cherhcer methede
  save(model: LocationChercher, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log("-------------------- save ------------------------");
    console.log(model, isValid);
    console.log("--------------------------------------------");

    this.service.searchVoitures(model).subscribe((data)=>{
      //data is your patient list
      this.list_Voiture=data;
      console.log("liste voiture");
      console.log(this.list_Voiture);
      this.list_Voiture.length

    })

    console.log("--------------------------------------------");
  }

  public go(){

  }
}


