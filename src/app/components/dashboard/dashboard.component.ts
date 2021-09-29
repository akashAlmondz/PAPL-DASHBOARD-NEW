import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
import { environment } from 'src/environments/environment';
import { DashboardDto } from './dashboard-dto/dashboard.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private dashBoardService: DashboardService) { }  
 
  data:any=[]; 

  orderData = [
    {class:'a', label:"Remaining QR codes",quantity:14,status:"QR codes are reamining"},
    {class:'b', label:"Scanned QR codes",quantity:75,status:"QR codes are scanned"},
    {class:'c', label:"Total QR codes",quantity:245,status:"Total QR codes"},
  ]

  reportData =[
    {srno:1,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:2,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:3,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:4,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:5,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:6,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:7,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:8,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:9,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:10,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
    {srno:11,mobile:'+91-9466045451',scans:5,shop:'NgShop',dateTime:'11/02/2021  14:18:09',scheme:'Scan More Win More'},
  ]

  ngOnInit(): void {
    this.dashBoardService.dashboardTable().subscribe(x=>this.data=x);
  }

}
