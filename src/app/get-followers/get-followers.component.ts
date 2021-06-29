import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Users } from '../_models/users';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService} from '../_services/users.service'


@Component({
  selector: 'app-get-followers',
  templateUrl: './get-followers.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./get-followers.component.css'],
  
})
export class GetFollowersComponent implements OnInit {
  closeResult: string;

    followers:Users[]=[]
  constructor(private userService:UsersService,public ar:ActivatedRoute,public r:Router) { }
  
  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.getFollwers(id).subscribe(
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
    }}
}
