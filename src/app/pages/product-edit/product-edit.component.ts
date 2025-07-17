import { Component } from '@angular/core';
import { ProductFormComponent } from "../../components/product-form/product-form.component";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

}
