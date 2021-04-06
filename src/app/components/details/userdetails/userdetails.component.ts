import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public selectedid:number | undefined;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.selectedid = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get("id"));
      this.selectedid=id;
    })
  }

}
