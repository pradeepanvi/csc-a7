import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  @Input() msg:string;
  constructor() { }

  ngOnInit() {
  }

}
