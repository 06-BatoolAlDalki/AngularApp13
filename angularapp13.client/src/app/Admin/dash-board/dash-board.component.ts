import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  container : string = ''
  constructor(private _url : UrlService) { }
  ngOnInit() {

    this._url.userObseravable.subscribe((data) => {
      this.container = data
    })

  }

  getData() { }
}
