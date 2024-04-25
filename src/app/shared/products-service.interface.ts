import { Observable } from "rxjs";
import { Product } from "./product.model";
import { InjectionToken } from "@angular/core";

export interface IProductsService {
  getProducts(): Observable<Product[]>
}

export const IProductsServiceToken = new InjectionToken<IProductsService>('IProductsService');
