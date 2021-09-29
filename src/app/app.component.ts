import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'papl';
  toggleValue = false;

  checkToggle(event:boolean){
    this.toggleValue = event;
    console.log(event);
  }
}