import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthguardGuard } from './authguard.guard';
import { TokensService } from './services/tokens.service'

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthguardGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokensService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
