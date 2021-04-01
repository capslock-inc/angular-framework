import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginusermodel } from 'src/app/models/loginusermodel';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginuser = new loginusermodel("","");

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  //submiting the form

  

}
