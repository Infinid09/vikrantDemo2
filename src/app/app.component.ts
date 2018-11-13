import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="vikrant";
  value="0";
  myVariable="sent from parent";
  constructor(){

  }

  myFunction(data){
    alert(data);
  }

  alertReceivedObject(data){
    
    alert(data);
  }

}
