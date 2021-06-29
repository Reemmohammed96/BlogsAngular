import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { GetFollowingComponent } from './get-following/get-following.component';
import { LoginComponent } from './login/login.component';
import { ResultFromSearchComponent } from './result-from-search/result-from-search.component'

import { MyblogsComponent } from './myblogs/myblogs.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { AuthGuard } from './auth.guard';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { FollowingblogsComponent } from './followingblogs/followingblogs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: FollowingblogsComponent, canActivate: [AuthGuard] },
  { path: 'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path :'homeAll',component:GetAllblogsComponent},
  { path: 'edit/:id', component: EditProfileComponent },
  { path: 'users/add', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/:id', component: UserProfileComponent, canActivate: [AuthGuard] ,children:[{
    path: 'followers/:id', component: GetFollowersComponent, canActivate: [AuthGuard]},{ 
    path: 'following/:id', component: GetFollowingComponent, canActivate: [AuthGuard]} ,{
     path: 'blogs/userBlogs/:id', component: MyblogsComponent, canActivate: [AuthGuard] 
    }
  ]},
  { path: 'blogs/search/:title', component: ResultFromSearchComponent, canActivate: [AuthGuard] },
  { path: 'blogs/add', component: PostBlogComponent, canActivate: [AuthGuard] },
  { path: 'blogs/edit/:id', component: EditBlogComponent, canActivate: [AuthGuard] },

 { path: 'blogs/:id', component: UserblogsComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
