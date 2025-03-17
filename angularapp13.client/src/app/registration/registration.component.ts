import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  ngOnInit() { }

  constructor(private _url : UrlService) { }


  postData( data:any) {

    this._url.postNewUser(data).subscribe(() => {
      alert("add new user");

    })

  }
}
