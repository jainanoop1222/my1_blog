import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogServiceService} from "../../blog-service.service";
import {DataService} from "../../data.service";

@Component({
  //selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateBlogComponent implements OnInit {
  blogTitle:string;
  technology:string;
  blogContent:string;
  currentUser:string;
  constructor(private blogs:BlogServiceService,private  data:DataService) { }
  addBlog(blogTitle,technology,blogContent)
  {
    console.log(this.currentUser);
    let widget={blogTitle: blogTitle,blogContent: blogContent,blogCreator: this.currentUser,technology: technology};
    this.blogs.postBlog(widget).subscribe(data => {console.log(data);});
  }
  ngOnInit() {
    this.data.userNameMethod.subscribe(message => this.currentUser = message)

  }

}
