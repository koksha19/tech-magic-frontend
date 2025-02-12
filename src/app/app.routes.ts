import { Routes } from '@angular/router';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {HomeComponent} from './components/home/home.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductDetailComponent} from './components/product/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];
