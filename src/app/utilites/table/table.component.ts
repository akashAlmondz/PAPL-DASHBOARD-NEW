import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private dashBoardService: DashboardService) { }
  data:any=[];
  shop:any=[];
  address:any=[];
  
  ngOnInit(): void {
    this.dashBoardService.dashboardTable().subscribe(x=>this.data=x);
  }
  
  Search(){
    if(this.shop!=""){
      this.data=this.data.filter((res: { shop: string; })=>{
        return res.shop.toLocaleLowerCase().match(this.shop.toLocaleLowerCase())
      })
    }
    else if(this.shop==""){
      this.ngOnInit();
    }
    
  
  }

  SearchAddress(){
    if(this.address!=""){
     console.log(this.data);
      this.data=this.data.filter((res: { address: string; })=>{
        return res.address.toLocaleLowerCase().match(this.address.toLocaleLowerCase())
      })
    }
    else if(this.address==""){
      this.ngOnInit();
    }
    
  
  }
}
