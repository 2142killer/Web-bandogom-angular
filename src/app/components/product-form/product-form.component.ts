import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() onSubmit=new EventEmitter();
 productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    stock: new FormControl(''),
    price: new FormControl(''),
  });
  handleSubmit() {
    this.onSubmit.emit(this.productForm.value)
  }
}

