import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { adduser } from 'src/app/models/addusermodel';
import { UserService } from 'src/app/services/user.service';
import { loginusermodel } from 'src/app/models/loginusermodel';



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

  constructor(private service: UserService,private http: HttpClient) { }
  ngOnInit(): void {
  }

  enrolldatatosql(){
    console.log(this.addusermodel)
    this.service.adduserdata(this.addusermodel).subscribe(
      (data) => console.log("data posted",data),
      (error) => console.log("error",error)
    )
  

  }

}
