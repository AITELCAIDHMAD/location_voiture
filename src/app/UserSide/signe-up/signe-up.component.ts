import { Component,ViewChild, ElementRef } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../Service/User.service";
import {User} from "../Entity/User/User";
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';

export class CustomModalContext extends BSModalContext {}
@Component({
  selector: 'signUp',
  styleUrls:['./signe-up.component.css'],
  templateUrl:'./signe-up.component.html',
  providers:[UserService]
})
export class SigneUpComponent /*implements CloseGuard, ModalComponent<CustomModalContext>*/ {
  @ViewChild('lgModal') bgModel;
  context: CustomModalContext;
  user: User;
  user2: User;
  dismiss:string;

  /*public dialog: DialogRef<CustomModalContext>,*/
  constructor(public service:UserService,private localStorageService: LocalStorageService,private router: Router,private location: Location) {
    this.user=new User();
    this.user2=new User();
    this.dismiss="";
    //this.context = dialog.context;
    $(function() {
      $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        //e.preventDefault();
      });
      $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        //e.preventDefault();
      });

    });


  //  dialog.setCloseGuard(this);
  }


  private login():void{
     // this.user=new User(1, "", "", "", "", "", "", "", "", 1, "");
      //this.user.email_user=this.username;
      //this.user.passwordd=this.password;

        console.log("user >");
        console.log(this.user);

    this.service.connectUser(this.user).subscribe((data)=>{
      //data is your patient list
      this.user2=data[0];

      if(this.user2==undefined || this.user2==null){
      }else{
        this.dismiss="modal";
        console.log("route ="+this.router.url);
        localStorage.setItem('connected','true');
        localStorage.setItem('idUser',this.user.id_user+"");
        this.location.replaceState('/'); // clears browser history so they can't navigate with back button
        this.router.navigate(['profile']); // tells them they've been logged out (somehow)
      }

    })
  }

  public hideChildModal():void {
   // console.log("hide modal")
     //$('#login').modal.hide();
  }
}


