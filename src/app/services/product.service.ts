import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../model/product';
import { PRODUCTS } from '../model/mock-products';

@Injectable()
export class ProductService {
    products = Promise.resolve(PRODUCTS);

    constructor() { }

    getProducts(): Promise<Product[]> {
        return this.products;
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.productId === id));
    }

}