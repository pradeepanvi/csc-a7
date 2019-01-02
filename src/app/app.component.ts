import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'data Child to Parent with @output()';

  childData:string;
  
  receiveMessage($event){
    this.childData = $event;
  }

}
