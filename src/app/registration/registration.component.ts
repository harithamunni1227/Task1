import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  Fullname:any
  Username:any
  Password:any


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['']);
  }
  HandleRegister(){
    localStorage.setItem("Fullname",this.Fullname)
    localStorage.setItem("Username",this.Username)
    localStorage.setItem("Password",this.Password)
    this.router.navigate(['']);
  }

}
