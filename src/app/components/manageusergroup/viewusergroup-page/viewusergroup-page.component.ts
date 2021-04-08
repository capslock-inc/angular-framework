import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-viewusergroup-page',
  templateUrl: './viewusergroup-page.component.html',
  styleUrls: ['./viewusergroup-page.component.css']
})
export class ViewusergroupPageComponent implements OnInit {
  user =[];
  constructor(private route: Router,private service: GroupService) { }

  ngOnInit(): void {
    this.service.view().subscribe(
      data => {
        this.user = data;
        this.service.grpser = data;
      },
      err =>{
            console.log(err)
          }
       
    )
  }
}
