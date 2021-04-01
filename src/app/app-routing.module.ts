import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/basic/landing-page/landing-page.component';
import { PagenotfoundPageComponent } from './components/basic/pagenotfound-page/pagenotfound-page.component';
import { CmsviewPageComponent } from './components/cms/cmsview-page/cmsview-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdduserPageComponent } from './components/manageuser/adduser-page/adduser-page.component';
import { ViewuserPageComponent } from './components/manageuser/viewuser-page/viewuser-page.component';
import { ViewquesPageComponent } from './components/survey/viewques-page/viewques-page.component';

const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent},
  {path : 'login', component: LoginPageComponent},
  {path : 'viewuser', component: ViewuserPageComponent},
  {path : 'adduser', component: AdduserPageComponent},
  {path : 'cmsview', component : CmsviewPageComponent},
  {path : 'surveyview', component : ViewquesPageComponent},
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
  ViewquesPageComponent
];

