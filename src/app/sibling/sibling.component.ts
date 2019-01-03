import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent {
  @Input() emp;
  @Input() index;

  @Output() empEvent = new EventEmitter();

  constructor() { }

  delete(i){
    this.empEvent.emit(i);
  }
}
