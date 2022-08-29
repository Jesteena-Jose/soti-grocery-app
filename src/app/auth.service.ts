import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public base_url='http://apolis-grocery.herokuapp.com/api/auth'
  constructor(private http:HttpClient,private route:Router) { }

  register(data:any):Observable<any>{
    return this.http.post<any>(`${this.base_url}/register`,data)
  }
  login(data:any):Observable<any>{
    return this.http.post<any>(`${this.base_url}/login`,data)
  }
  checktoken(): boolean {
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }
  logout(){
    localStorage.clear()
  }
}
