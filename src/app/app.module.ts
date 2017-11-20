import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { BlogParentComponent } from './blog-parent/blog-parent.component';
import { NavBarComponent } from './blog-parent/nav-bar/nav-bar.component';
import { CreateBlogComponent } from './blog-parent/create-blog/create-blog.component';
import { AllBlogsComponent } from './blog-parent/all-blogs/all-blogs.component';
import {BlogServiceService} from "./blog-service.service";
import { LoginPageComponent } from './blog-parent/login-page/login-page.component';
import { LoginParentComponent } from './login-parent/login-parent.component';
import { AllBlogs2Component } from './login-parent/all-blogs2/all-blogs2.component';
import { CreateBlog2Component } from './login-parent/create-blog2/create-blog2.component';
import { FavouriteComponent } from './login-parent/favourite/favourite.component';
import {DataService} from "./data.service";
import { MyBlogsComponent } from './blog-parent/my-blogs/my-blogs.component';
import { CategoriesComponent } from './blog-parent/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogParentComponent,
    NavBarComponent,
    CreateBlogComponent,
    AllBlogsComponent,
    LoginPageComponent,
    LoginParentComponent,
    AllBlogs2Component,
    CreateBlog2Component,
    FavouriteComponent,
    MyBlogsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       // {path:'blog',component: BlogParentComponent},
      {path:'home',component: AllBlogsComponent},
      {path:'login',component: LoginPageComponent},
      {path:'myblogs',component: MyBlogsComponent},
      {path:'cate',component: CategoriesComponent},
      {path:'createblog',component: CreateBlogComponent},
      {path:'allblogs',component: AllBlogsComponent},
      {path:'favourites',component: NavBarComponent},
      // {path:'loggedin',component: LoginParentComponent},
      //{path:'products/:id',component: ProductDetailComponent},
      {path:'', redirectTo: 'login', pathMatch:'full'},
      {path:'**', redirectTo: 'login', pathMatch:'full'},
    ])
  ],
  providers: [BlogServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
