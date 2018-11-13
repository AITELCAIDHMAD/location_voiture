import { VoitureService } from './../../Service/Voiture.service';
  import { Component, OnInit, Input } from '@angular/core';
  import {User} from "../../Entity/User/User";
  import {UserService} from "../../Service/User.service";
  import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile..component.css'],
  providers: [UserService]
})
export class ProfileComponent {
    user:User=new User();
    list_Voiture=[];
   constructor(public serviceVoiture:VoitureService, public service:UserService,private localStorageService: LocalStorageService) {



    this.serviceVoiture.getVoitureById('8').subscribe((data:any)=>{
      //data is your patient list
      console.log("---------------------- Voiture === ----------------------");
  console.log(data);

      this.list_Voiture.push(data[0]);
      console.log("liste voiture");
      console.log(this.list_Voiture);
      this.list_Voiture.length
      //this.voiture=data[0];
      
    })

    this.service.getUserById(1+"").subscribe((data)=>{
      //data is your patient list
      this.user=data[0];
      console.log( this.user);
    })

  }

}
