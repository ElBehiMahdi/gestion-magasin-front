import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() public  nameFromParent: any ;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  eventChild(){
   this.childEvent.emit("Notre application Web est une Application qui gére toute sorte de ventes produits  stock et facture et a l aide duquel on peut payer nos Factures en ligne");
 }
}
