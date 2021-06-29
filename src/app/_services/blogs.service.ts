import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogs } from '../_models/blogs'
import { Comment } from '../_models/comment';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  getAll(){
    return this.http.get<Blogs[]>('http://localhost:8080/getAll')
    }
  getfollowingBlogs(){
    return this.http.get<Blogs[]>('http://localhost:8080/blogs/followingBlogs')
  }  
  ResultFromSearch(title:string){
    return this.http.get<Blogs[]>('http://localhost:8080/blogs/search/'+title)
    } 
  getblog(id:number){
    return this.http.get<Blogs>('http://localhost:8080/blogs/'+id)
  }
  getuserblogs(id:number){
    return this.http.get<Blogs[]>('http://localhost:8080/blogs/userBlogs/'+id)
  }
  postblog(blog: any) {
    return this.http.post<Blogs>('http://localhost:8080/blogs/add', blog)
  }
  edit(id: number, blog: any) {
    return this.http.patch<Blogs>("http://localhost:8080/blogs/" + id, blog)
  }
  delete(id) {
    return this.http.delete<Blogs>("http://localhost:8080/blogs/" + id)
  }
  postComment(id:number,body:any){
    return this.http.post<Blogs>("http://localhost:8080/blogs/comment/"+id,{body})
  }
  like(id:number){
    return this.http.post<Blogs>("http://localhost:8080/blogs/like/"+id,{})
  }
  unlike(id:number){
    return this.http.post<Blogs>("http://localhost:8080/blogs/unlike/"+id,{})
  }

  constructor(private http:HttpClient) { }
}
