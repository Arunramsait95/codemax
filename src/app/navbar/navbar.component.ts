import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "Navigation";
  constructor() { }

  ngOnInit() {
  }

  paths = [
    {'name': 'Home', 'url' : '/home'},
    {'name': 'Product', 'url' : '/product'},
    {'name': 'Cart', 'url': '/cart'},
    {'name': 'Contact', 'url' : '#'}
  ]


}
