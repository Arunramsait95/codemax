import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class CartService {

    private products: Product[];

    constructor() {
        this.products = [
          {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"stock":94,"thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg"},
          {"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"stock":34,"thumbnail":"https://dummyjson.com/image/i/products/2/thumbnail.jpg"},
          {"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"stock":36,"thumbnail":"https://dummyjson.com/image/i/products/3/thumbnail.jpg"},
          {"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"stock":123,"thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg"},
          {"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"stock":32,"thumbnail":"https://dummyjson.com/image/i/products/5/thumbnail.jpg"},
          {"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"stock":83,"thumbnail":"https://dummyjson.com/image/i/products/6/thumbnail.png"},
          {"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"stock":50,"thumbnail":"https://dummyjson.com/image/i/products/7/thumbnail.jpg"},
          {"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"stock":68,"thumbnail":"https://dummyjson.com/image/i/products/8/thumbnail.jpg"},
          {"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"stock":96,"thumbnail":"https://dummyjson.com/image/i/products/9/thumbnail.jpg"},
          {"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"stock":89,"thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg"},
          {"id":11,"title":"perfume Oil","description":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","price":13,"stock":65,"thumbnail":"https://dummyjson.com/image/i/products/11/thumbnail.jpg"},
          {"id":12,"title":"Brown Perfume","description":"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","price":40,"stock":52,"thumbnail":"https://dummyjson.com/image/i/products/12/thumbnail.jpg"},
          {"id":13,"title":"Non-Alcoholic Perfume","description":"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","price":120,"stock":114,"thumbnail":"https://dummyjson.com/image/i/products/14/thumbnail.jpg"},
          {"id":14,"title":"Eau De Perfume Spray","description":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","price":30,"stock":105,"thumbnail":"https://dummyjson.com/image/i/products/15/thumbnail.jpg"},
          {"id":15,"title":"Hyaluronic Acid Serum","description":"L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","price":19,"stock":110,"thumbnail":"https://dummyjson.com/image/i/products/16/thumbnail.jpg"},
          {"id":16,"title":"Tree Oil 30ml","description":"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,","price":12,"stock":78,"thumbnail":"https://dummyjson.com/image/i/products/17/thumbnail.jpg"},
          {"id":17,"title":"Oil Free Moisturizer 100ml","description":"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.","price":40,"stock":88,"thumbnail":"https://dummyjson.com/image/i/products/18/thumbnail.jpg"},
          {"id":18,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"stock":54,"thumbnail":"https://dummyjson.com/image/i/products/19/thumbnail.jpg"},
          ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: number): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: number) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }

}