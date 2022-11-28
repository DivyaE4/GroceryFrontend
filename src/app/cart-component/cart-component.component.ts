import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
})
export class CartComponentComponent implements OnInit {
  data: any;
  cartItems: any;
  message: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cartItems = localStorage.getItem('cart');
  }

  async AddToCart() {
    this.data = await this.http
      .post('http://localhost:3000/cartItems', this.cartItems.value)
      .toPromise();
  }

  Payment() {
    this.message = 'Payment Succesful!';
    console.log('Payment Succesful!');
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = localStorage.getItem('cart');
  }
}
