import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// inject to service anywhere 
@Injectable({
  providedIn: 'root'  // project 
})
export class UrlService {

  constructor(private _httptoqa : HttpClient) { }


  getCategory() {

    return this._httptoqa.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }


}
