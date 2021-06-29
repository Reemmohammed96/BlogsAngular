import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-userblogs',
  templateUrl: './userblogs.component.html',
  styleUrls: ['./userblogs.component.css']
})
export class UserblogsComponent implements OnInit {
  blog:Blogs
  comment:string
  flag: number;
  constructor(private blogService:BlogsService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
  
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
        console.log(a)
      this.blogService.getblog(id).subscribe(
        e => {
          if (e.userId == JSON.parse(localStorage.getItem('USER'))._id) {
            this.flag = 1;
          } else {
            this.flag = 0;
          }
          this.blog = e;

        console.log(e)
        })
      })


  }
  postComment(id:any){
    this.blogService.postComment(id,this.comment).subscribe(
      e=>{
        e.body=this.comment
        console.log(e)
      }
    )
  }

  delete() {
    if(confirm("are you sure you want to delete this blog")){
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.delete(id).subscribe(
          a => {
            this.r.navigateByUrl('users/'+this.blog.userId+'/blogs/userBlogs/'+this.blog.userId);
            console.log(a)
          }
        )
      })
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
