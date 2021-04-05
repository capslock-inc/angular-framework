import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open wave';
  constructor(private route:Router,public service: UserService){

  }
  
  //from navbar to login page navigation
  login_navigation(){
    this.route.navigate(["/login"])
  }
  
  //from navbar to adduser page navigation
  adduser_navigation(){
    this.route.navigate(['/adduser'])
  }

  //logout
  logout(){
    localStorage.clear()
    this.route.navigate(['/login'])
  }
  
}
