import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment/moment'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//my moduls import
import {NavBarComponent } from './UserSide/nav_bar/nav_bar.component';
import {SlideShowComponent} from "./UserSide/Slide_show/slide_show.component";
import {FooterComponent} from "./UserSide/Footer/footer.component";
import {LocationComponent} from "./UserSide/Entity/Locations/location.component";
import {ChercheLocationComponent} from "./UserSide/Cherche_location/cherche_location.component";
import {AboutComponent} from "./UserSide/pages/about/about.component";
import {DetailleVoitureComponent} from "./UserSide/pages/detaille_voiture/detaille_voiture.component";
import {ContactComponent} from "./UserSide/pages/contact/contact.component";
import {ProfileComponent} from "./UserSide/pages/profile/profile.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {routes} from './app.routes';
import {Admin} from "./UserSide/Entity/Admin/Admin";
import {AdminService} from "./UserSide/Service/Admin.service";
import { IndexComponent } from './UserSide/pages/index/index.component';
import { PageNotFoundComponentComponent } from './UserSide/page-not-found-component/page-not-found-component.component';
import { AfficheLocationComponent } from './UserSide/affiche-location/affiche-location.component';
import { DetailleLocationComponent } from './UserSide/detaille-location/detaille-location.component';
import { AdminFormComponent } from './UserSide/Form/admin-form/admin-form.component';
import { UserFormComponent } from './UserSide/Form/user-form/user-form.component';
import { VoitureFormComponent } from './UserSide/Form/voiture-form/voiture-form.component';
import { LocationFormComponent } from './UserSide/Form/location-form/location-form.component';
import { AgenceFormComponent } from './UserSide/Form/agence-form/agence-form.component';
import { SigneUpComponent } from './UserSide/signe-up/signe-up.component';

import {ModalModule, DialogRef} from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModal} from "./UserSide/Modal/custom-modal-sample";
import { App2Component} from "./UserSide/Modal/app2.component";
import { GaleryComponent } from './UserSide/galery/galery.component';
import { MapComponent } from './UserSide/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MesLocationComponent } from './UserSide/mes-location/mes-location.component';
import { DatePickerComponent} from "./UserSide/Form/user-form/datePicker.component";
import { TimePickerComponent} from "./UserSide/Form/user-form/timePicker.component";
import { NgbdModalComponent} from "./UserSide/ngbd-modal/ngbd-modal.component";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LocationChercher} from "./UserSide/Cherche_location/locationChercher.interface";
import { LocationLayoutComponent } from './UserSide/location-layout/location-layout.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NotificationsComponent} from "./notifications.component";
import { AdminIndexComponent } from './AdminSide/pages/admin-index/admin-index.component';
import { AdminHeaderComponent } from './AdminSide/admin-header/admin-header.component';
import { AdminFooterComponent } from './AdminSide/admin-footer/admin-footer.component';
import { AdminMenuComponent } from './AdminSide/admin-menu/admin-menu.component';
import { AdminSettingComponent } from './AdminSide/admin-setting/admin-setting.component';
import { AdminLoginComponent } from './AdminSide/admin-login/admin-login.component';
import { UserPageComponent } from './AdminSide/pages/user-page/user-page.component';
import { VoituresPageComponent } from './AdminSide/pages/voitures-page/voitures-page.component';
import { LocationsPageComponent } from './AdminSide/pages/locations-page/locations-page.component';
import { ParametrePageComponent } from './AdminSide/pages/parametre-page/parametre-page.component';
import {UserService} from "./UserSide/Service/User.service";
import {AgenceService} from "./UserSide/Service/Agence.service";
import {LocationService} from "./UserSide/Service/Location.service";
import {VoitureService} from "./UserSide/Service/Voiture.service";
import { TableComponent } from './UserSide/table/table.component';
import {AlertComponent} from "./UserSide/alert/alert.component";
import {AlertService} from "./UserSide/alert/alert.service";
//fin my moduls import
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    declarations: [
    AppComponent,
    NavBarComponent,
    SlideShowComponent,
    FooterComponent,
    LocationComponent,
    ChercheLocationComponent,
    DetailleVoitureComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
    IndexComponent,
    PageNotFoundComponentComponent,
    AfficheLocationComponent,
    DetailleLocationComponent,
    AdminFormComponent,
    UserFormComponent,
    VoitureFormComponent,
    LocationFormComponent,
    AgenceFormComponent,
    SigneUpComponent,
    App2Component,
    CustomModal,
      SigneUpComponent,
      GaleryComponent,
      MapComponent,
      MesLocationComponent,
      DatePickerComponent,
      TimePickerComponent,
      NgbdModalComponent,
      LocationLayoutComponent,
      NotificationsComponent,
      AdminIndexComponent,
      AdminHeaderComponent,
      AdminFooterComponent,
      AdminMenuComponent,
      AdminSettingComponent,
      AdminLoginComponent,
      UserPageComponent,
      VoituresPageComponent,
      LocationsPageComponent,
      ParametrePageComponent,
      TableComponent,
      AlertComponent
  ],
  imports: [
    BrowserModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    JsonpModule,
    routes,
    ModalModule.forRoot(),
    BootstrapModalModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUpkhMUOGW4zcxGTZy6bfHa-QSxgfVecU'
    }),
    NgxMyDatePickerModule,
    MomentModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      //  storageType: 'localStorage'
      storageType: 'sessionStorage'

    })

  ],
  providers: [
    AlertService,AdminService, UserService,AgenceService,LocationService,VoitureService,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  entryComponents:[ CustomModal,SigneUpComponent]
})
export class AppModule { }
