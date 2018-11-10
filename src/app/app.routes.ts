import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './UserSide/pages/about/about.component';
import { ContactComponent } from './UserSide/pages/contact/contact.component';
import { AppComponent} from "./app.component";
import {  IndexComponent} from "./UserSide/pages/index/index.component";
import {PageNotFoundComponentComponent} from "./UserSide/page-not-found-component/page-not-found-component.component";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AdminFormComponent} from "./UserSide/Form/admin-form/admin-form.component";
import {Agence} from "./UserSide/Entity/Agence/Agence";
import {AgenceFormComponent} from "./UserSide/Form/agence-form/agence-form.component";
import {LocationFormComponent} from "./UserSide/Form/location-form/location-form.component";
import {UserFormComponent} from "./UserSide/Form/user-form/user-form.component";
import {Voiture} from "./UserSide/Entity/Voiture/Voiture";
import {VoitureFormComponent} from "./UserSide/Form/voiture-form/voiture-form.component";
import {DetailleLocationComponent} from "./UserSide/detaille-location/detaille-location.component";
import {App2Component} from "./UserSide/Modal/app2.component";
import {ProfileComponent} from "./UserSide/pages/profile/profile.component";
import { AdminLoginComponent } from './AdminSide/admin-login/admin-login.component';
import {AdminIndexComponent} from "./AdminSide/pages/admin-index/admin-index.component";
import {UserPageComponent} from "./AdminSide/pages/user-page/user-page.component";
import {LocationsPageComponent} from "./AdminSide/pages/locations-page/locations-page.component";
import {VoituresPageComponent} from "./AdminSide/pages/voitures-page/voitures-page.component";
import {ParametrePageComponent} from "./AdminSide/pages/parametre-page/parametre-page.component";
// Route Configuration
export const router: Routes = [

  { path: '', redirectTo:'/index',pathMatch:'full'},
  { path: 'reloid', redirectTo:'/index',pathMatch:'full'},
  { path: 'index',     component: IndexComponent},
  { path: 'about',     component: AboutComponent },
  { path: 'contact',   component: ContactComponent},
  { path: 'form',      component: App2Component},
  { path: 'profile',      component: ProfileComponent},
  { path: 'detaille_location/:id',component:DetailleLocationComponent},
  { path: 'admin',      component: AdminLoginComponent},
  { path: 'adminIndex',  component: AdminIndexComponent},
  { path: 'userPage',  component: UserPageComponent},
  { path: 'locationsPage',  component: LocationsPageComponent},
  { path: 'voituresPage',  component: VoituresPageComponent},
  { path: 'ParametrePage',  component: ParametrePageComponent},

  //{ path: '**', component: PageNotFoundComponentComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
