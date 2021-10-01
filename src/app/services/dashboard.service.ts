import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private http: HttpClient) { }
  
  public dashboardTable(){
    return this.http.get(`${environment.authlink}users/scannedData`);
  }

  public QRcode(){
    return this.http.get(`${environment.authlink}qr-code/numberofQR`)
  }
  
  public graphData(){
    return this.http.get(`${environment.authlink}users/scannedData`)
  }


}
