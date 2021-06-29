import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from '../_models/users';
import { BlogsService } from '../_services/blogs.service';
import { UsersService} from '../_services/users.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  following;
  user:Users;
  numFollower=0
  numFollowing=0
  numBlogs;
  blogflag:boolean=true;
  followersflag: boolean = false;
  profileimg: string;
  constructor(private userService:UsersService,public blogService:BlogsService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
    let id=0;
    this.following=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.blogService.getuserblogs(id).subscribe(
        e=>this.numBlogs=e.length
      )
      this.userService.getProfile(id).subscribe(
        e => {
          this.user = e
          if (this.user.userImg) {
            this.profileimg = 'http://localhost:8080/' + this.user.userImg
          } else {
            this.profileimg = "/assets/img/user-image.jpg"
          }
          this.numFollower=this.user.follower.length
          this.numFollowing=this.user.following.length
          if(this.user._id==(JSON.parse(localStorage.getItem('USER'))._id)){
            this.following=2
          }
          else if(this.user.follower.includes(JSON.parse(localStorage.getItem('USER'))._id)){
            this.following=1
          }
          else{
            this.following=0
          }
        })
    }
    )
    
  }
    Follow(){
      let id=0;
      this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.follow(this.user).subscribe(
        e=>{
          this.user=e
          console.log(e)
         console.log(this.following)
         this.following=1
        }
      )
      location.reload();
    }
    )
   
  }
  UnFollow(){
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.unfollow(this.user).subscribe(
        e=>{
          this.user=e
          console.log(e)
          console.log(this.following)
          this.following=0
        }
      )
      location.reload();

    }
    )
  }

change(){
  console.log("hi")
}
}