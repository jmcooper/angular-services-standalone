import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '@shared/product.model';

@Component({
  selector: 'bot-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/' + product.imageName;
  }
}
