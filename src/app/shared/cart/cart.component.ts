import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '@catalog/cart.service';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, ProductDetailsComponent],
  standalone: true,
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit() { }

  get cartItems() {
    return this.cartService.cart();
  }

  get cartTotal() {
    return this.cartService.cartTotal();
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
