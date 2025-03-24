import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { TestSerService } from '../aymanService/test-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

//1
  constructor(private _ser : TestSerService, private _url : Router) { }// inject to service in component 


  //2
  ngOnInit() {

    this.get();
  }

  categoryContainer :any

  dataCategory :any

  //3
  get() {

    this._ser.getData().subscribe((data) => {

      this.dataCategory = data;
    })

  }


  SaveData(id: any) {

    debugger
    alert(id)

  //  this._url.navigate([`/home/${id}`])
  }
}
