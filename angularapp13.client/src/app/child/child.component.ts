import { Component, DoCheck, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit , DoCheck, OnDestroy{
  //x---

  constructor(private _url : UrlService) { }
  ngOnInit() {
    console.log("init Child");
    this._url.userBehaviour.next(this.user)
    alert(this.user)
  }
  ngOnDestroy() {
    console.log("Distrory Child");
  }
  ngDoCheck() {
    console.log("Do Check Child");
  }

  @Output() event = new EventEmitter<string>();
  sendData() {
    this.event.emit("hani & ammar")

  }


  @Input() user = 'ali';
}
