import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private _url : UrlService, private _route : Router) { }

  ngOnInit() {

    this._url.userObseravable.subscribe((data) => {


      alert(data)
    })



  }


  usersData :any
  getData(enteredUser :any) {
    this._url.getAllUsers().subscribe((data) => {
      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);

      if (enteredUser.Email == "Admin@gmail.com" && enteredUser.password == 123) {
        this._url.userBehaviour.next("Admin@gmail.com")
        localStorage.setItem("User", "Admin@gmail.com" )
        alert("login successfully")
        this._route.navigate(['/dashBoard'])
      }
      else if (user) {
        this._url.userBehaviour.next(user.Email)
        localStorage.setItem("User", user.Email)


        alert("login successfully")
        this._route.navigate(['/home'])
      } else {
        alert("Invalid Email or password ")

      }

    })
  }
}
