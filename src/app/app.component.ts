import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string="Blue Mountain Cigars";
  constructor(
    private titlePortal: Title){
    this.titlePortal.setTitle("BMC");
  }

}
