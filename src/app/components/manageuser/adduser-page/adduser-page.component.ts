import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { adduser } from 'src/app/models/addusermodel';
import { UserService } from 'src/app/services/user.service';
import { loginusermodel } from 'src/app/models/loginusermodel';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { viewusergroup } from 'src/app/models/usergroupmodel';



@Component({
  selector: 'app-adduser-page',
  templateUrl: './adduser-page.component.html',
  styleUrls: ['./adduser-page.component.css']
})
export class AdduserPageComponent implements OnInit {
  addusermodel = new adduser(
    "","",null,"",null,null,"","",null,null,
    null,null,null,true
    );

  grp:viewusergroup;
  constructor(private service: UserService,private http: HttpClient, private route: Router,private grpservices: GroupService) { }
  ngOnInit(): void {
    this.grp = this.grpservices.grpser
    console.log(this.grp)
  }

  enrolldatatosql(){
    console.log(this.addusermodel)
    this.service.adduserdata(this.addusermodel).subscribe(
      (data) => {
        console.log("data posted",data);
        this.route.navigate(['/login'])
        
        
      },
      (error) => console.log("error",error)
    )
  

  }

}
