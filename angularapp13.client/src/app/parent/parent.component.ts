import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  value = true

  userData :any
  ngOnInit() {
   this._url.userObseravable.subscribe((data) => {
      debugger
      this.userData = data
     alert(this.userData)
    })
  }

  constructor(private _url : UrlService) {


    setTimeout(() => { this.value = false },3000)
  }
  recieveData(data :any) {
    alert( data)
  }
}
