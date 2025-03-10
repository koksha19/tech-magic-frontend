import { Routes } from '@angular/router';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { AuthGuard } from './services/auth-guard.service';
import { CartComponent } from './components/cart/cart/cart.component';
import { AdminGuard } from './services/admin-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/add-product',
    component: ProductEditComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin/products',
    component: ProductListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin/orders',
    component: OrderListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path: 'admin/edit-product/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: '**', component: NotFoundComponent },
];
