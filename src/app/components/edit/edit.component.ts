import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adduser } from 'src/app/models/addusermodel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  addusermodel = new adduser(
    "","",null,"",null,null,"","",null,null,
    null,null,null,true
    );

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.addusermodel = this.service.editModelData;
  }
  enrolldatatosql(){
    
    this.route.navigate(['./'])

  }

}
