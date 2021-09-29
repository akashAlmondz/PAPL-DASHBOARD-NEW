import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  
  @Output() checkToggle=new EventEmitter<boolean>();
  
  
  
   
  toggle= true ;
  ngOnInit(): void {
  }
 
  sideMenu = () => {
    this.checkToggle.emit(this.toggle);
    this.toggle = !this.toggle;
    console.log(this.toggle)
    
  }

}
