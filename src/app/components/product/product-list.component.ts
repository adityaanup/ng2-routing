import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private service: ProductService) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts() {
        return this.service.getProducts()
            .then(products => this.products = products);
    }
}