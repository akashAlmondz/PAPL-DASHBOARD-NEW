import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
@Input() sidebarValue:boolean;
  constructor() { this.sidebarValue = false}
  selectedValue: number = 1;
   sidebarData = [
     {number:1, icon:"fas fa-chalkboard-teacher",label:'Dashboard',path:''},
     {number:2, icon:"fas fa-chart-line",label:'Reports',path:'report'},
    
   ]
  sideMenu = new HeaderComponent().sideMenu()
  ngOnInit(): void {
    
  }

  changeSelectedValue(value: number){
      this.selectedValue = value;
  }
 
}
