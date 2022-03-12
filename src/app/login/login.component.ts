import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:any=''
  Password:any=''
  message:any=''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  HandleLogin(){
    let name=localStorage.getItem("Username")
    let password=localStorage.getItem("Password")
    if(name==this.Username && password==this.Password){
      this.message=''
      this.router.navigate(['profile']);
    }
    else{
      this.message="Please enter valid Username and Password"
    }
  }
  submit(){
    this.router.navigate(['registration']);
  }

}
