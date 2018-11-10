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
    user:User;
   constructor(public service:UserService,private localStorageService: LocalStorageService) {

    this.service.getUserById(localStorage.getItem('idUser')).subscribe((data)=>{
      //data is your patient list
      this.user=data;
      console.log('affiche  user  idUser',localStorage.getItem('idUser'));;
      console.log( this.user);
    })

  }

}
