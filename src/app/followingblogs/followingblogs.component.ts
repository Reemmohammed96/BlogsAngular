import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../_services/blogs.service';
import { UsersService } from '../_services/users.service';
import {Blogs} from '../_models/blogs'
import { Users } from '../_models/users';

@Component({
  selector: 'app-followingblogs',
  templateUrl: './followingblogs.component.html',
  styleUrls: ['./followingblogs.component.css']
})
export class FollowingblogsComponent implements OnInit {
  blogs:Blogs[]=[]
  my:Blogs[]=[]
  new:Blogs[]=[]
  likes:number[]=[]
  suggesions:Users[]=[]


  constructor(private userservicve:UsersService, private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
      this.blogservice.getfollowingBlogs().subscribe(
        e=>{
          this.new=e;
        }
      )
      this.blogservice.getuserblogs(JSON.parse(localStorage.getItem('USER'))._id).subscribe(
        e=>{
          this.blogs=e.concat(this.new)
        }
      )
      this.userservicve.getAllusers().subscribe(
        e=>{this.suggesions=e
       console.log(e) 
       }
      )
  }

  like(id){
    this.blogservice.like(id).subscribe(
      e=>{
        console.log(e)
      }
    )
    location.reload();
  }
  unlike(id){
   this.blogservice.unlike(id).subscribe(
     e=>{
       console.log(e)
     }
   )
   location.reload();
 }
 isLiked(arr:string[]){
  return arr.includes(JSON.parse(localStorage.getItem('USER'))._id)
}
getAuthor(img:string){
  if(img == undefined){
    return "/assets/img/user-image.jpg"
  }else{
    return "http://localhost:8080/"+img
  }
}
getUser(img:string){
  if(img == undefined){
    return "/assets/img/user-image.jpg";
  }else{
    return "http://localhost:8080/"+img;
  }
}
 
   


}
