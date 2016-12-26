import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    constructor(
        private _productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this._productService.getProduct(+params['id']))
            .subscribe(product => this.product = product);
    }

    isAvailable():boolean {
        return this.product.available;
    }

    goBack(): void {
        this.location.back();
    }
}