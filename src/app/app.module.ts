import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { NgbAlertModule, NgbModule, NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { GetFollowingComponent } from './get-following/get-following.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { ResultFromSearchComponent } from './result-from-search/result-from-search.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { FollowingblogsComponent } from './followingblogs/followingblogs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    GetAllblogsComponent,
    HeaderComponent,
    UserProfileComponent,
    UserblogsComponent,
    MyblogsComponent,
    GetFollowersComponent,
    GetFollowingComponent,
    LoginComponent,
    RegisterComponent,
    PostBlogComponent,
    ResultFromSearchComponent,
    EditProfileComponent,
    EditBlogComponent,
    SuggestionsComponent,
    FollowingblogsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
