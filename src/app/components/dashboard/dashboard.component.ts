import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  orderData = [
    {class:'a', label:"Pending Orders",quantity:14,status:"Orders are pending"},
    {class:'b', label:"Closed Orders",quantity:75,status:"Orders has been closed"},
    {class:'c', label:"Total Orders",quantity:245,status:"All Orders"},
  ]

  ngOnInit(): void {
  }

}
