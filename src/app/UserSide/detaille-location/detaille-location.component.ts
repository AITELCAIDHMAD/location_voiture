import { Component,OnInit, ViewContainerRef, ViewEncapsulation,Input } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import {Voiture} from "../Entity/Voiture/Voiture";
import {SigneUpComponent} from "../signe-up/signe-up.component";
import {LocationFormComponent} from "../Form/location-form/location-form.component";
import {VoitureService} from "../Service/Voiture.service";
import {ActivatedRoute} from '@angular/router';
import {log} from "util";
import * as $ from 'jquery';

@Component({
  selector: 'detaille-location',
  templateUrl: './detaille-location.component.html',
  styleUrls: ['./detaille-location.component.css'],
  providers:[VoitureService]
})
export class DetailleLocationComponent implements OnInit {
  voiture:Voiture;
  list_Voiture=[];
  id:string;
  isConnect:boolean;
  constructor(public modal: Modal,private service:VoitureService,private route:ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];
   // console.log("idddddddddddddddddddddddddddddddddd =="+this.id);

    this.service.getVoitureById(this.id).subscribe((data)=>{
      //data is your patient list

      this.voiture=data[0];
      console.log('affiche  1----------------------------------------------------');;
      console.log(this.voiture);
    });
    this.service.getAllVoitures(6).subscribe((data)=>{
      //data is your patient list
      this.list_Voiture=data;
      console.log('affiche  2----------------------------------------------------');;
      console.log( this.list_Voiture);
    })


    this.isConnect=true;
  }

  ngOnInit() {


  }


  openModal(){

    if(!this.isConnect){
      return this.modal.open(SigneUpComponent ,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

    }
    else{
      return this.modal.open(LocationFormComponent ,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }
  }
}
