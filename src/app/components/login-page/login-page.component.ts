import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginusermodel } from 'src/app/models/loginusermodel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginuser = new loginusermodel("","");

  constructor(private route: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  //submiting the form
  logindata(){
    this.service.logindata(this.loginuser).subscribe(
      (data) =>{
        console.log(data);
        if (data.token === undefined){
          localStorage.setItem("admin",data.admin);
        }
        localStorage.setItem("token",data.token);
        this.route.navigate(['/cmsview'])
      },
      (error) => console.log(error)

    )
  }

  

}
