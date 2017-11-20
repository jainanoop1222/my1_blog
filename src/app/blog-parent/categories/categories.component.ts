import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IBlogs} from "../IBlogs";
import {BlogServiceService} from "../../blog-service.service";

@Component({
  // selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {
  str:number;
  strin:string;
  allBlogs:IBlogs[];

  constructor(private blogs:BlogServiceService) { }
  onClick(num:number)
  {
    // console.log("aaaaaaaaaaa");
    this.str=num;
    if(num==1){
      this.strin="Sports";
    }
    else if(num==2){
      this.strin="Science";
    }
    else if(num==4){
      this.strin="Dance";
    }
    else if(num==3){
      this.strin="Coding";
    }
    // for (var i=1;i<=4;i++)
    // {
    //   if(i==num)
    //   {
    //     this.str=num;
    //     this.str
    //   }
    // }
  }
  ngOnInit() {
    this.getBlogs();
  }
  getBlogs() {
    this.blogs.getBlogs()
      .subscribe((blogs1)=>{this.allBlogs=blogs1;
        // this.filteredProducts=this.allBlogs;
      });
    console.log("categories");
  }
}
