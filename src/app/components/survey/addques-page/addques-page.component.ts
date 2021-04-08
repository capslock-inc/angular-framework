import { Component, OnInit } from '@angular/core';
import { quesmodel } from 'src/app/models/quesmodel';

@Component({
  selector: 'app-addques-page',
  templateUrl: './addques-page.component.html',
  styleUrls: ['./addques-page.component.css']
})
export class AddquesPageComponent implements OnInit {

  addques = new quesmodel("","","");

  constructor() { }

  ngOnInit(): void {
  }

  enrolldatatosql(){
    
  }

}
