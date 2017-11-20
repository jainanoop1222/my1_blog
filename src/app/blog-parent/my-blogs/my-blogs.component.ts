import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogServiceService} from "../../blog-service.service";
import {IBlogs} from "../IBlogs";
import {DataService} from "../../data.service";

@Component({
  // selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyBlogsComponent implements OnInit {
  allBlogs:IBlogs[];
  currentUser:string;
  constructor(private service:BlogServiceService,private data:DataService) { }

  ngOnInit() {
    this.getAllUsers();
    this.data.userNameMethod.subscribe(message => this.currentUser = message)

  }
  getAllUsers()
  {
    // getBlogs() {
    this.service.getBlogs()
      .subscribe((blogs1)=>{this.allBlogs = blogs1;
        // this.filteredProducts=this.allBlogs;
      });

  }
}
