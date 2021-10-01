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
     {number:1, icon:"fas fa-user",label:'Dashboard',path:''},
     {number:2, icon:"fas fa-briefcase",label:'Reports',path:'report'},
     {number:3, icon:'fas fa-th',label:'Demo'},
     {number:4, icon:'fas fa-warehouse',label:'Demo'},
     {number:5, icon:'fas fa-user-friends',label:'Demo'},
     {number:6, icon:'fas fa-box',label:'Demo'},
     {number:7, icon:'fas fa-tags',label:'Demo'},
     {number:8, icon:'fas fa-users',label:'Demo'},
     {number:9, icon:'fas fa-shield-alt',label:'Demo'},
     {number:10, icon:'fas fa-building',label:'Demo'},
   ]
  sideMenu = new HeaderComponent().sideMenu()
  ngOnInit(): void {
    
  }

  changeSelectedValue(value: number){
      this.selectedValue = value;
  }
 
}
