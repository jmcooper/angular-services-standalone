import { Product } from '@shared/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductsService } from '@shared/products-service.interface';
import { engineers } from './engineers';

@Injectable({ providedIn: 'root' })
export class EngineersService implements IProductsService {

  getProducts(): Observable<Product[]> {
    return of(engineers);
  }
}