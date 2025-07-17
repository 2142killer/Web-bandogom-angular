import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export type user={
  email:string,
  password:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 http = inject(HttpClient)
 registerUser(data:user){
        return this.http.post('http://localhost:3000/register',data);
 }
  loginUser(data:user){
        return this.http.post('http://localhost:3000/login',data);
 }
}

