import { Component, OnInit,Input } from '@angular/core';
import {LoginPageComponent} from "../login-page/login-page.component";
import {DataService} from "../../data.service";
import {BlogServiceService} from "../../blog-service.service";
import {IBlogs} from "../IBlogs";

interface IUsers
{
  id:number;
  username1:string;
  password1:string;
  favourites:number[];
  createdBy:number[];
}
@Component({
  // selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  // @Input()logg:boolean;

  allBlogs:IBlogs[];
  blogNo:number;
  count:number=0;
  updateFlag:boolean=false;
  blogId:number;
  // currentUserName:string;
  // favNumArr:number[];
  userIdLogin:number;
  // loginChecker:boolean;
  sameid:boolean=false;
  favTitl:boolean;


  blog1:IBlogs[];
  loginChecker:boolean;
  currentUserName:string;
  favNumArr:number[];
  constructor(private  data:DataService,private blogs:BlogServiceService) {
    //this.logg = loger.logger;
  }
  getBlogs() {
    this.blogs.getBlogs()
      .subscribe((blogs1)=>{this.blog1=blogs1;});
  }
  ifIsFavouriteTitle(num:number)
  {
    for(var i=0;i<this.favNumArr.length;i++)
    {
      if(num==this.favNumArr[i])
      {
        return true;
      }
    }
    return false;
  }
  ngOnInit() {
    this.getBlogs();
    this.data.userNameMethod.subscribe(message => this.currentUserName = message)
    this.data.loginCheckers.subscribe(message => this.loginChecker = message)
    this.data.favArrayMethod.subscribe(message => this.favNumArr = message);
    console.log(this.favNumArr);

  }

}
