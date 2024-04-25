import { Product } from '@shared/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductsService } from '@shared/products-service.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService implements IProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }
}