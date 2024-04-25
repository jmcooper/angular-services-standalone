import { Component, Inject, Optional, Self, SkipSelf } from '@angular/core';
import { Product } from '@shared/product.model';
import { CartService } from '@catalog/cart.service';
import { Observable } from 'rxjs';
import { IProductsService, IProductsServiceToken } from '@shared/products-service.interface';
import { EngineersService } from './engineers.service';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: [{
    provide: IProductsServiceToken,
    useClass: EngineersService,
  }]
})
export class SquadCatalogComponent {
  squad: Observable<Product[]> = this.engineersService.getProducts();

  constructor(
    private cartService: CartService,
    @Inject(IProductsServiceToken) @Self() private engineersService: IProductsService) { }

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
