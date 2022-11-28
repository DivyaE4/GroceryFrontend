import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css'],
})
export class ItemComponentComponent implements OnInit {
  @Input() Item: string = '';
  @Input() Price: string = '';
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}

  add() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      console.log(cart);
      const cartArr = JSON.parse(cart);
      console.log(cartArr);
      cartArr.push(this.Item, this.Price);
      console.log(cartArr);
      localStorage.setItem('cart', JSON.stringify(cartArr));
    } else {
      localStorage.setItem('cart', `["${this.Item},${this.Price}"]`);
    }
  }
}
