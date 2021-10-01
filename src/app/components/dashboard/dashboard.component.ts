import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
import { environment } from 'src/environments/environment';
import { DashboardDto, employees } from './dashboard-dto/dashboard.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employess :any=[]
  constructor(private dashBoardService: DashboardService) { }  
 
  data:any=[];
  addressData:any=[]; 
  QRdata:any=[];
  
  
  orderData = [
    {class:'a', label:"Total QR codes",quantity:this.QRdata[0],status:"QR codes are reamining"},
    {class:'b', label:"Scanned QR codes",quantity:this.QRdata[1],status:"QR codes are scanned"},
    {class:'c', label:"Remaining QR codes",quantity:this.QRdata[2],status:"Total QR codes"},
  ]
 test(){
   console.log(this.QRdata[0])
 }
 

  ngOnInit(): void {
    // this.dashBoardService.dashboardTable().subscribe(x=>this.addressData=x);
    this.dashBoardService.dashboardTable().subscribe(x=>this.data=x);
    this.dashBoardService.QRcode().subscribe(y=>this.QRdata=y);
    
  }
  
  
  }


