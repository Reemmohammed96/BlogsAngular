import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../_models/users';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-get-following',
  templateUrl: './get-following.component.html',
  styleUrls: ['./get-following.component.css']
})
export class GetFollowingComponent implements OnInit {
  followers:Users[]=[]

  constructor(private userService:UsersService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.getFollwing(id).subscribe(
        e=>{
          this.followers=e;
          console.log(e)
          console.log("hrllo")
        }
        )
    }
    )
  }
  getUser(img:string){
    if(img == undefined){
      return "/assets/img/user-image.jpg";
    }else{
      return "http://localhost:8080/"+img;
    }

}
}
