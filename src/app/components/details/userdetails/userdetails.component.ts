
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { userdetaildata } from '../../../models/viewuser'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public selectedid;
  public userdetail:userdetaildata;

  constructor(private route: ActivatedRoute, private router: Router, private service : UserService ) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.selectedid = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get("id"));
      this.selectedid=id; 

    })
    let newid = {
      "UserId": Number
    }
    newid.UserId = this.selectedid
    console.log(newid)
    this.service.selectedId(newid).subscribe(
      (data) =>{
        this.userdetail = data
        this.service.editModelData = data
        console.log(this.userdetail)
      } ,
      (err) => {
        console.log(err);
      }
    )
    
  }
delete(){
 this.service.deleteuser(this.userdetail).subscribe(
   data => console.log(data),
   err => console.log(err)
 )
 this.router.navigate(['/viewuser'])
}
edit(){
  this.router.navigate(['/edituser'])
}
goback(){
  this.router.navigate(['/viewuser'])
}

}
