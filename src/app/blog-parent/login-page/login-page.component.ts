import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {BlogServiceService} from "../../blog-service.service";
import {Router} from "@angular/router";
import {DataService} from "../../data.service";
import {IUser} from "../IUser";

@Component({
  // selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {
  user2:IUser[]=[];
  newUser:IUser[];
  user3:IUser;
  currentUser:string;
  newCre:number[]=[];
  newFav:number[]=[];
  loginChecker:boolean=false;
  userId:number;
  favNumArr:number[];
  blogContent:string;
  blogCreator:string;
  blogContent2:string;
  blogCreator2:string;
  // created1:number[];
  // name1:string;
  // password1:string;
  @Output() notify: EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private service1:BlogServiceService, private router1:Router, private data: DataService) { }
  login(username1,password1)
  {
    this.getAllUsers();
    for(var i=0;i<this.user2.length;i++)
    {
      if(this.user2[i].username1==username1&&this.user2[i].password1==password1)
      {
        this.loginChecker=true;
        this.data.loginCheckersChanger(this.loginChecker);

        this.favNumArr=this.user2[i].favourites;
        this.userId=this.user2[i].id;

        this.data.userIdChange(this.userId);
        console.log("Login successful");
        this.data.favArrayChange(this.favNumArr);
        this.currentUser=this.user2[i].username1;
        this.data.userNameChange(this.currentUser);
        console.log(this.favNumArr);
        this.router1.navigate(['/home']);
        // this.user3.id=this.user2[i].id;
        // this.user3.username1=this.user2[i].username1;
        // this.user3.favourites=this.user2[i].favourites;
        // this.user3.password1=this.user2[i].password1;
        // this.user3.createdBy=this.user2[i].createdBy;
        // this.router1.navigate(['/blog']);
        break;
      }
    }
  }
  getAllUsers(){
    this.service1.getUsers()
      .subscribe((blogs1)=>{this.user2=blogs1;
      // console.log(blogs1);
   });
  }

  ngOnInit() {
    this.data.loginCheckers.subscribe(message => this.loginChecker = message);
    this.data.favArrayMethod.subscribe(message => this.favNumArr = message);
    // this.upDateUser();
    this.getAllUsers();
  }
  registering(blogContent2 ,blogCreator2)
  {
    let widget={username1: blogContent2,password1: blogCreator2,favourites: this.newFav,createdBy: this.newCre};
    this.service1.postUser(widget).subscribe(data => {console.log(data);});}
  //   // this.newUser.
  //     this.newUser.id=1;
  //   username1:string;
  //   password1:string;
  //   favourites:number[];
  //   createdBy:number[];
  //   this.service1.regUsers()
  //     .subscribe((blogs1)=>{this.user2=blogs1;
  //       // console.log(blogs1);
  //     });
  // }
//   upDateUser()
//   {
//     this.user3.favourites=this.favNumArr;
//     this.service1.favBlog(this.user3,this.userId).subscribe(data => {console.log(data);
//
//   })
// }
}
// this.notify.emit(this.logger);
