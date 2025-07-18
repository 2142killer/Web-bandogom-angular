import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
];
