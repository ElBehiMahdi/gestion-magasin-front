import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

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
      label: 'Sign Up',
      icon: 'login',
      route: 'login',
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
      label: 'Showcase',
      icon: 'slideshow',
      route: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      route: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
