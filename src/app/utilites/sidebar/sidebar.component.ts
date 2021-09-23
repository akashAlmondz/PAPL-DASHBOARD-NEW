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
   sidebarData = [
     {icon:"fas fa-user",label:'Dashboard'},
     {icon:"fas fa-briefcase",label:'Inventory'},
     {icon:'fas fa-th',label:'Departments'},
     {icon:'fas fa-warehouse',label:'Warehouse'},
     {icon:'fas fa-user-friends',label:'Vendors'},
     {icon:'fas fa-box',label:'Products'},
     {icon:'fas fa-tags',label:'Orders'},
     {icon:'fas fa-users',label:'Members'},
     {icon:'fas fa-shield-alt',label:'Settings'},
     {icon:'fas fa-building',label:'Company'},
   ]
  sideMenu = new HeaderComponent().sideMenu()
  ngOnInit(): void {
    
  }
 
}
