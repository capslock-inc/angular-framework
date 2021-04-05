import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http"
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokensService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next){
    let userservice = this.injector.get(UserService)
    let tokenreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userservice.tokenfromlocalstroage()}`
      }
    })
    return next.handle(tokenreq);
  }
}
