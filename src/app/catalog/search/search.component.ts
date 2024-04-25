import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@catalog/cart.service';
import { ProductDetailsComponent } from '../../shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-search',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => this.products = products);
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
