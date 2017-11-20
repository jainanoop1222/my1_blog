import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {DataService} from "../data.service";

@Component({
  selector: 'app-blog-parent',
  templateUrl: './blog-parent.component.html',
  styleUrls: ['./blog-parent.component.css'],
  // directives: [LoginPageComponent],
  encapsulation: ViewEncapsulation.None
})
export class BlogParentComponent implements OnInit {
  loginChecker:boolean=false;
  constructor(private data: DataService) { }
  inputNavigator:string;
  inputNavigator1:string;

  ngOnInit() {
    this.data.loginCheckers.subscribe(message => this.loginChecker = message);
    this.inputNavigator1=this.inputNavigator;
    this.data.passWordMethod.subscribe(message => this.inputNavigator1 = message);
    this.data.passWordChange(this.inputNavigator1);
    this.tryFunc();
  }

  tryFunc(){
    console.log(this.inputNavigator1);
    console.log("pafe");
}
  fall()
  {
    this.loginChecker=!this.loginChecker;
    this.data.loginCheckersChanger(this.loginChecker);
  }
}





// @ViewChild(LoginPageComponent)countryCodes: LoginPageComponent;
// ngAfterViewInit() {
//   this.logg2=this.countryCodes.logger;
// }
