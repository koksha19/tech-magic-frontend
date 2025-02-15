import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-product-list',
  imports: [NgForOf, ProductComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(
    private productsService: ProductService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.products$ = this.productsService.products$;
  }

  public ngOnInit() {
    this.apiService.getProducts().subscribe((products) => {
      this.productsService.setProducts(products.products);
      console.log(products);
    });
  }

  public navigateToProduct(id: string): void {
    this.router.navigate(['products', id]);
  }
}
