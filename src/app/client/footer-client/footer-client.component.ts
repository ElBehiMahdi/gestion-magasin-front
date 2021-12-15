import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-client',
  templateUrl: './footer-client.component.html',
  styleUrls: ['./footer-client.component.css']
})
export class FooterClientComponent implements OnInit {

  @Input() public  nameFromParent: any ;
  @Output() public childEvent = new EventEmitter();
  
  public footerCaptionStyles= {
    color:"blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }
  eventChild(){
   this.childEvent.emit("Espace Client-Esprit-Mag © 2021");
  }
}
