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
  public voiture:Voiture;
  i: number;
  show:boolean=false
  voiture1:Voiture;
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  public date: Date = new Date();
  public  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy hh:mm',
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
    this.list_Voiture=[];
    
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log("-------------------- save ------------------------");
    //console.log(model, isValid);
    console.log("--------------------------------------------");

    if(model.marque_voiture=="AUDI" &&  model.model_voiture=="Audi A2"){
      this.service.getVoitureById('8').subscribe((data:any)=>{
        //data is your patient list
        console.log("---------------------- Voiture === ----------------------");
    console.log(data);

        this.list_Voiture.push(data[0]);
        console.log("liste voiture");
        console.log(this.list_Voiture);
        this.list_Voiture.length
        //this.voiture=data[0];
        this.show=false;
      })
    }else{
      this.show=true;
      this.list_Voiture.pop();
    }
    
    

    console.log("---------------------- Voiture === ----------------------");
    console.log(this.voiture);
  }

  public go(){

  }
}


