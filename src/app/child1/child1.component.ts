import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {MyClass} from './childModel';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  name:string="Vikrant";
  obj1:MyClass=new MyClass("something",23);
  @Input() childVariable:string="";
  @Output() outObj = new EventEmitter;
  constructor() { }

  ngOnInit() {
    this.obj1.name="something";
    this.obj1.age=23;
  }

  ngOnChange(changes){

  }

  ngOnDestroy(){
    alert("my alert");
  }

  sendToParent(){
    this.outObj.emit(this.name);
    
  }

}
