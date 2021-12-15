import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

  @Output() toggleSidee: EventEmitter<any> = new EventEmitter();

  //TODO change condition based on client role
  condition = true;

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      route: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Client',
      icon: 'face',
      route: 'client',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      route: 'about',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Invoices',
      icon: 'attach_money',
      route: 'facture',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Products',
      icon: 'shop',
      route: 'products',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Stocks',
      icon: 'inventory_2',
      route: 'stocks',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Rayon',
      icon: 'view_column',
      route: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSide(){
    this.toggleSidee.emit();
  }

}
