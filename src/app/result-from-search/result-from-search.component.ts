import { Component, OnInit } from '@angular/core';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-result-from-search',
  templateUrl: './result-from-search.component.html',
  styleUrls: ['./result-from-search.component.css']
})
export class ResultFromSearchComponent implements OnInit {

  blogs:Blogs[]=[]
  date=new Date().getTime()
  blogdate=new Date()
  newdate=new Date
  mille=this.newdate.getTime()
  differ=this.date-this.mille
 constructor(private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }
 ngOnInit(): void {
   let title=""
   this.ar.params.subscribe(
     a=>{title=a['title']
    this.blogservice.ResultFromSearch(title).subscribe(
      e=>{this.blogs=e
      console.log(e)
      }
    )
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
