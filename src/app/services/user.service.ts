import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adduser } from '../models/addusermodel';
import { loginusermodel } from '../models/loginusermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public editModelData:adduser;
    

  //urls
  _addurl = "http://localhost:5000/adduser/adduserdata";
  _viewurl = "http://localhost:5000/viewuser/viewuserdata";
  _loginurl = "http://localhost:5000/login/logindata";
  _userdetailurl = "http://localhost:5000/viewuser/getdetail";
  _editurl = "http://localhost:5000/adduser/edituser"
  _deleteurl = "http://localhost:5000/adduser/deleteuser" 
 
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
  
  // to login
  logindata(logindata: loginusermodel){
    return this.http.post<any>(this._loginurl,logindata)
  }

  //to check loggeed in or not
  loggedInOrNot(){
    return !!localStorage.getItem("token"); // !!-return boolean
  }

  // token from api
  tokenfromlocalstroage(){
    return localStorage.getItem("token");
  }

  adminLoggedInOrNot(){
    return !!localStorage.getItem("admin");
  }

  selectedId(num){
    return this.http.post<any>(this._userdetailurl,num);
  }

  //edit
  edituserdata(data){
    return this.http.post<any>(this._editurl,data);
  }

  deleteuser(data){
    return this.http.post<any>(this._deleteurl,data)
  }



}

