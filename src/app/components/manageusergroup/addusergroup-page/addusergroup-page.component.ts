import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usergroup } from 'src/app/models/usergroupmodel';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-addusergroup-page',
  templateUrl: './addusergroup-page.component.html',
  styleUrls: ['./addusergroup-page.component.css']
})
export class AddusergroupPageComponent implements OnInit {
   
  public grpdata = new usergroup("","",true);


  constructor(private service: GroupService,private route: Router) { }

  ngOnInit(): void {
    
  }

  enrolldatatosql(){
    this.service.addgrpdata(this.grpdata).subscribe(
      data => console.log(data),
      err => console.log(err)
    )

  }

}
