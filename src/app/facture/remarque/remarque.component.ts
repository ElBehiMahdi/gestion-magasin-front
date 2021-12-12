import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remarque',
  templateUrl: './remarque.component.html',
  styleUrls: ['./remarque.component.css']
})
export class RemarqueComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  eventChild(){
    this.childEvent.emit(" Des frais financiers de 1,5% seront prélevés sur les soldes impayés après 30 jours.");
 
  }

}
