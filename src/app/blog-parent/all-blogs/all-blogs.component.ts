import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../../blog-service.service";
import {IBlogs} from "../IBlogs";
import {DataService} from "../../data.service";
import {IUser} from "../IUser";
@Component({
  //selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AllBlogsComponent implements OnInit {
  allBlogs:IBlogs[];
  blogNo:number;
  filteredProducts: IBlogs[];
  count:number=0;
  updateFlag:boolean=false;
  blogId:number;
  currentUserName:string;
  favNumArr:number[];
  userIdLogin:number;
  loginChecker:boolean;
  sameid:boolean=false;
  favTitl:boolean;
  inputNavigator:string;

  blogTitle


  constructor(private blogs:BlogServiceService,private  data:DataService) { }

  updateBlog(blogTitle,technology,blogContent,blogIdentity)
  {
    this.updateFlag=!this.updateFlag;
    let widget={blogTitle: blogTitle,blogContent: blogContent,blogCreator: this.currentUserName,technology: technology,id:blogIdentity};
    this.blogs.updateBlog(widget).subscribe(data => {console.log(data);});
  }

  // ifIsFavourite:boolean;

  ifIsFavouriteTitle(num:number)
  {
    for(var i=0;i<this.favNumArr.length;i++)
    {
          if(this.favNumArr[i]==num)
          {
            return true;

          }
    }
    return false;
  }

  makeItFavouriteBlog(blogIdc:number)
  {
    for(var i=0;i<this.favNumArr.length;i++)
    {
      if(blogIdc==this.favNumArr[i])
      {
        // this.favNumArr.pop();
        delete this.favNumArr[i];
        this.favTitl=true;
        this.data.favArrayChange(this.favNumArr);
        this.count=1;
        break;
      }
    }
    console.log(blogIdc);
    if(this.count==0)
    {
      this.blogNo=blogIdc;
      this.favTitl=true;
      this.sameid=true;
      this.favNumArr.push(blogIdc);
      this.data.favArrayChange(this.favNumArr);
    }
    this.count=0;
    this.updateUserFavouriteArr();
    console.log(this.favNumArr);
    // this.favouriteBlog(this.userIdLogin,blogIdc);
    // console.log(this.userId);
   // console.log(id2);
  }
  updateUserFavouriteArr()
  {
    // this.updateFlag=!this.updateFlag;
    let widget={favourites: this.favNumArr,id:this.userIdLogin};
    this.blogs.updateUser(widget).subscribe(data => {console.log(data);});
  }

  onClickUpdate(blogId1:number)
  {
     this.blogId=blogId1;
    console.log(blogId1);
    this.updateFlag=!this.updateFlag;
  }
  deleteBlog(blogId)
  {
    this.blogs.deleteBlog(blogId).subscribe(data => {console.log(data); this.getBlogs();})
  }
  ngOnInit() {
    this.data.userIdMethod.subscribe(message => this.userIdLogin = message)
    this.data.loginCheckers.subscribe(message => this.loginChecker = message);
    this.data.favArrayMethod.subscribe(message => this.favNumArr = message);
    this.data.passWordMethod.subscribe(message => this.inputNavigator = message);
    this.data.userNameMethod.subscribe(message => this.currentUserName = message)

    this.getBlogs();
  }

  getBlogs() {
    this.blogs.getBlogs()
      .subscribe((blogs1)=>{this.allBlogs=blogs1;
        this.filteredProducts=this.allBlogs;
    });
}
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("i was executed");

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.allBlogs;
  }


  performFilter(filterBy: string): IBlogs[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.allBlogs.filter((product: IBlogs) =>
    product.blogTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
