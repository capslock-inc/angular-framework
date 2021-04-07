import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminauthGuard } from './adminauth.guard';
import { AuthguardGuard } from './authguard.guard';
import { LandingPageComponent } from './components/basic/landing-page/landing-page.component';
import { PagenotfoundPageComponent } from './components/basic/pagenotfound-page/pagenotfound-page.component';
import { AddcmspagePageComponent } from './components/cms/addcmspage-page/addcmspage-page.component';
import { CmsviewPageComponent } from './components/cms/cmsview-page/cmsview-page.component';
import { UserdetailsComponent } from './components/details/userdetails/userdetails.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdduserPageComponent } from './components/manageuser/adduser-page/adduser-page.component';
import { ViewuserPageComponent } from './components/manageuser/viewuser-page/viewuser-page.component';
import { AddusergroupPageComponent } from './components/manageusergroup/addusergroup-page/addusergroup-page.component';
import { ViewusergroupPageComponent } from './components/manageusergroup/viewusergroup-page/viewusergroup-page.component';
import { AddquesPageComponent } from './components/survey/addques-page/addques-page.component';
import { ViewquesPageComponent } from './components/survey/viewques-page/viewques-page.component';

const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent},
  {path : 'login', component: LoginPageComponent},
  {path : 'viewuser', component: ViewuserPageComponent, canActivate: [AdminauthGuard]},
  {path : 'viewuser/:id', component: UserdetailsComponent, canActivate: [AdminauthGuard]},
  {path : 'adduser', component: AdduserPageComponent},
  {path : 'cmsview', component : CmsviewPageComponent, canActivate: [AuthguardGuard]},
  {path : "cmsadd", component:AddcmspagePageComponent, canActivate: [AuthguardGuard]},
  {path : "addgrp", component:AddusergroupPageComponent, canActivate: [AdminauthGuard]},
  {path : "viewgrp", component:ViewusergroupPageComponent, canActivate: [AdminauthGuard]},
  {path : "addsurvey", component:AddquesPageComponent, canActivate: [AdminauthGuard]},
  {path : "edituser", component:EditComponent, canActivate: [AdminauthGuard]},
  {path : 'surveyview', component : ViewquesPageComponent, canActivate: [AuthguardGuard] },
  {path : '**', component: PagenotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  LandingPageComponent,
  PagenotfoundPageComponent,
  LoginPageComponent,
  ViewuserPageComponent,
  AdduserPageComponent,
  CmsviewPageComponent,
  AddcmspagePageComponent,
  ViewquesPageComponent,
  AddquesPageComponent,
  AddusergroupPageComponent,
  ViewusergroupPageComponent,
  UserdetailsComponent,
  EditComponent
];

