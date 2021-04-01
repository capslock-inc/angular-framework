import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open wave';
  constructor(private route:Router){

  }
  
  //from navbar to login page navigation
  login_navigation(){
    this.route.navigate(["/login"])
  }
  
  //from navbar to adduser page navigation
  adduser_navigation(){
    this.route.navigate(['/adduser'])
  }
  
}
