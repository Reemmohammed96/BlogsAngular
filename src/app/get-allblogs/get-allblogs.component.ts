import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Blogs} from '../_models/blogs'
import { Users } from '../_models/users';
import {BlogsService} from '../_services/blogs.service'
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-get-allblogs',
  templateUrl: './get-allblogs.component.html',
  styleUrls: ['./get-allblogs.component.css']
})
export class GetAllblogsComponent implements OnInit {
  likee = "like"
  unlikee="unlike"
  likeFlag:number;
  i;
  likes:number[]=[]
  blogs:Blogs[]=[]
  suggesions:Users[]=[]
  comment:string;
   blogdate=new Date
   newdate=new Date
  constructor(private userservicve:UsersService, private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }
  ngOnInit(): void {
   this.blogservice.getAll().subscribe(
     e=>{
       this.blogs=e;
       for(let i=0;i<this.blogs.length;i++){
         this.blogs[i].createdAt=this.blogdate
         this.blogs[i].createdAt.getDate()
    }
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
       e.likeFlag="like"
       
       console.log(e.likeFlag)
       this.blogservice.getblog(id).subscribe(
         e=>{
           console.log(e)
         }

       )
       location.reload();
     }
   )

}
isLiked(arr:string[]){
  return arr.includes(JSON.parse(localStorage.getItem('USER'))._id)
}

 unlike(id){
  this.blogservice.unlike(id).subscribe(
    e=>{
      console.log(e)
      e.likeFlag="unlike"
    }
  )
  location.reload();

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
