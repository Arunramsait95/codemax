import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Content";
  private products: Product[];

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.products = this.cart.findAll();
  }

}
