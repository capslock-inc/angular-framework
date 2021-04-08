import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { viewusergroup } from '../models/usergroupmodel';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  _addgroupurl = "http://localhost:5000/addgroup/addgroupdata"
  _viewgrpurl = "http://localhost:5000/viewgroup/viewgroupdata"

  constructor(private http: HttpClient) { }
  public grpser:viewusergroup ;

  addgrpdata(data){
    return this.http.post<any>(this._addgroupurl,data);
  }
  view(){
    return this.http.get<any>(this._viewgrpurl);
  }
}
