import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export type product={
  id:string,
  name:string,
  image:string,
  description:string,
  stock:number,
  price:number,
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http=inject(HttpClient);
addProduct(data: product) {
  return this.http.post('http://localhost:3000/products', data);
}

editProduct(id: string, data: product) {
  return this.http.put('http://localhost:3000/products/' + id, data);
}

deleteProduct(id: string) {
  return this.http.delete('http://localhost:3000/products/' + id);
}

getDetail(id: string) {
  return this.http.get('http://localhost:3000/products/' + id);
}

getAll() {
  return this.http.get('http://localhost:3000/products');
}
}
