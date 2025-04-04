import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


// inject to service anywhere 
@Injectable({
  providedIn: 'root'  // project 
})
export class UrlService {

  constructor(private _httptoqa: HttpClient) { }


  userBehaviour = new BehaviorSubject<string>('hhhhh') // write to behiour subject
  userObseravable = this.userBehaviour.asObservable();  // to read from behiour






  getCategory() {

    return this._httptoqa.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  postNewUser(data: any): Observable<any> {

    return this._httptoqa.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }




  getAllUsers() {
    return this._httptoqa.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }


  addCategory(data :any) {
    return this._httptoqa.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data)
  }

  updateCategory( id :any, data :any) {
    return this._httptoqa.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data)
  }


  getCategoryByCategoryId(id: any) {
    return this._httptoqa.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }
}
