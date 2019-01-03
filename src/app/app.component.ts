import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Data Parent to Child and Child to Parent';
  empList = [
    {
      name:'Helo 1'
    },
    {
      name:'Helo 2'
    },
    {
      name:'Helo 3'
    },
    {
      name:'Helo 4'
    },
    {
      name:'Helo 5'
    },
    {
      name:'Helo 6'
    }
  ]
  deleteTxt = '';
  show = 'none';

  receiveEvent($event){
    this.show = 'block';
    this.deleteTxt = this.empList[$event].name;
    this.empList.splice($event,1);
    setTimeout(() => {
      this.show = 'none';
    }, 2000);
  }
}
