import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../Service/Admin.service';
import {UserService} from "../../Service/User.service";
import {User} from "../../Entity/User/User";
@Component({
  moduleId:module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers:[UserService]
})
export class AboutComponent implements OnInit{
  user:User[];

  constructor(private service:UserService){}
  ngOnInit(){
       this.service.getAllUsers().subscribe(users =>{
         this.user=users;
         console.log(JSON.stringify(users));
       });
  }
}
