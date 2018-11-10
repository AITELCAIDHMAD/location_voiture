import { Component, OnInit} from '@angular/core';
import {Voiture} from "../Voiture/Voiture";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {VoitureService} from "../../Service/Voiture.service";

@Component({
  selector: 'location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
  providers:[VoitureService]
})
export class LocationComponent {
public list_Voiture=[];

  constructor(private service:VoitureService) {
    this.service.getAllVoitures(6).subscribe((data)=>{
      //data is your patient list
      this.list_Voiture=data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
      console.log(this.list_Voiture);
    })
  }

  ngOnInit() {




  }

}
