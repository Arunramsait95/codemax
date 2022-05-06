import { Product } from './product';

export class Cart {
  id: number;
  title: string;
  productName: string;
  qty: number;
  price: number;
  thumbnail: string;

  constructor(id: number, product: Product, qty = 1,) {
    this.id = product.id;
    this.title = product.title;
    this.productName = product.title;
    this.price = product.price;
    this.qty = qty;
  }
}