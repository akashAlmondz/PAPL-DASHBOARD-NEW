import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private dashBoardService: DashboardService) { }
  data:any=[];
  
  ngOnInit(): void {

   this.dashBoardService.graphData().subscribe(x=>this.data=x);
 
  }

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "PAPL"
    },
    xAxis: {
      title:{
           text:"Shop"
      },
      categories: ["Dalli","SaniBar","lovely office tatahar"]
    },
    yAxis: {
      title: {
        text: "Scans"
      }
    },
    series: [{
      data: [5,3,2],
      type: 'line',
      showInLegend:false
    }],
    credits: {
      enabled: false
    },
  }

  // BarGraph
  
  chartOptionss: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Schemes'
    },
    xAxis: {
      categories: ["number of scans"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Casback Offers"
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: "bar",
      name: 'for one scan',
      data: [100]
    }, 
    {
      type: "bar",
      name: 'for two scan',
      data: [200]
    }, 
    {
      type: "bar",
      name: 'for five scan',
      data: [600]
    }, 
    {
      type: "bar",
      name: 'for ten scan',
      data: [1300]
    }, 
    ]
  }
}



