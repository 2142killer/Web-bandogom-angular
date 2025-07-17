import { Component, inject } from '@angular/core';
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { Router, RouterLink } from '@angular/router';
import { product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink,ProductFormComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data as product[];
      },
      error: () => this.toast.error('Error'),
    });
  }
}

