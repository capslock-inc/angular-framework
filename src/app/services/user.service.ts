import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adduser } from '../models/addusermodel';
import { loginusermodel } from '../models/loginusermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //urls
  _addurl = "http://localhost:5000/adduser/adduserdata";
  _viewurl = "http://localhost:5000/viewuser/viewuserdata";
  _loginurl = "http://localhost:5000/login/logindata" 

  //injection
  constructor(private http: HttpClient) { }

  //viewuser
  viewuserdata() {
    return this.http.get<any>(this._viewurl);
  }

  //adduser
  adduserdata(userdata: adduser){
    return this.http.post<any>(this._addurl,userdata);
  }

  logindata(logindata: loginusermodel){
    return this.http.post<any>(this._loginurl,logindata)
  }




}

