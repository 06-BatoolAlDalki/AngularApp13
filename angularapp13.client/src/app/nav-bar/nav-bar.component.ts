import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  constructor(private _url : UrlService) {

  }

  userData :any
  container :any
  ngOnInit() {
    this._url.userObseravable.subscribe((data) => {
      this.container = data
    })

   this.userData = localStorage.getItem("User")
  }

  getData() { }
}
