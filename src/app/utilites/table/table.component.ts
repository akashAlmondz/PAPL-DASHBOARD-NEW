import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit{
  
  constructor(private dashBoardService: DashboardService  ) { }


  @ViewChild('tableData') tableData:ElementRef | undefined;

  data:any=[];
  shop:any=[];
  address:any=[];
  table = document.getElementById('table');
 
  totalLength: any;
  p:number=1;

  ngOnInit(): void {
    this.dashBoardService.dashboardTable().subscribe(x=>this.data=x);
    
  }
  
  

 public openPDF():void {
const DATA = document.getElementById('#tableData')!;
    
html2canvas(DATA).then(canvas => {
    
    let fileWidth = 208;
    let fileHeight = canvas.height * fileWidth / canvas.width;
    
    const FILEURI = canvas.toDataURL('image/png')
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
    
    PDF.save('angular-demo.pdf');
});     
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
  @ViewChild('content',{static:false}) el!:ElementRef
  public SavePDF(){ 
     
     let pdf=new jsPDF('l', 'pt', [1280, 1140]);
     pdf.html(this.el.nativeElement,{
       callback:(pdf)=>{
         pdf.save("QRcodeReport.pdf");
       }
     })
  }  
}
