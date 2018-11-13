import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AdminService} from "../../UserSide/Service/Admin.service";
import {Admin} from "../../UserSide/Entity/Admin/Admin";
import {LocalStorageService } from "angular-2-local-storage";
import {AlertService} from "../../UserSide/alert/alert.service";
import {isUndefined} from "util";
import {isNullOrUndefined} from "util";



@Component({
  selector: 'app-app-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.css'],
  providers:[AdminService]
})
export class AdminLoginComponent implements OnInit {
  private  admin:Admin;
  private  adminResponse:Admin;
  errors:string;
  constructor(private alertService: AlertService,public service:AdminService,private localStorageService: LocalStorageService,private router: Router) {

  }

  ngOnInit(){
    this.admin=new Admin();
    this.adminResponse=new Admin();

  }

  private  login():void{
   // alert(" loggin "+this.admin.password+"  "+this.admin.username);
  if((this.admin.password!=null) && (this.admin.password.toString().length!=0) && (this.admin.username!=null) && (this.admin.username.toString().length!=0)){
    
    console.log("->>>>>>>>>>>>>>> ADMIN")
    console.log( this.admin)

   
    this.service.connectAdmin(this.admin).subscribe((data)=>{
      console.log("data=>"+JSON.stringify(data[0]));

      this.adminResponse=data[0];



      if(data[0]!=undefined && data[0]!=null) {
        this.router.navigate(['adminIndex']); // tells them they've been logged out (somehow)
        this.errors="";
        localStorage.setItem('Adminconnected','true');
        localStorage.setItem('idAdmin',data[0].id_admin+"");
      }
      else
      {
        this.error("username or password is incorrect ");
      }
    })


    }else{
    this.error("username and password are required ");
  }




  }


  success(message: string) {
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }


}
