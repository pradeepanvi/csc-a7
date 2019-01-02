import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SiblingComponent } from "./sibling/sibling.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'data Child to Parent';
  @ViewChild(SiblingComponent) child;

  childData:string = '';
  
  ngAfterViewInit(){
    this.childData = this.child.childMsg;
  }

}
