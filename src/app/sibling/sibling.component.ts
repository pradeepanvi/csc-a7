import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent {
  childMsg = "This is child message";

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  sendMsg(){
    this.messageEvent.emit(this.childMsg);
  }

}
