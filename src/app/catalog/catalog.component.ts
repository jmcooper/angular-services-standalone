import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Observable<Product[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
