import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adduser } from 'src/app/models/addusermodel';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-viewuser-page',
  templateUrl: './viewuser-page.component.html',
  styleUrls: ['./viewuser-page.component.css']
})
export class ViewuserPageComponent implements OnInit {
  //array to store response data
  user = []
  

  constructor(private service : UserService, private route: Router) { }
  ngOnInit(): void {
    this.service.viewuserdata().subscribe(
      data => this.user = data,
      err =>{
        if (err instanceof HttpErrorResponse){
          if(err.status === 401) {
            this.route.navigate(['/login'])
          }
        }
      } 
    )
    console.log(this.user)
  }


  

  //searching in view page
  //seacrh_user(){
  //  this.model = this.model.filter(res => {
  //  return res.firstname.tolocalelowercase().match(this,firstname.tolocalelowercase())
  //})
  //}

}
