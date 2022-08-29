import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private base_url='http://apolis-grocery.herokuapp.com/api'
  constructor(private http:HttpClient) { }
  getcategories(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/category`)
  }
  getproducts(catId:any){
    return this.http.get(`${this.base_url}/products/cat/${catId}`)
  }
  getproductdetail(Id:any){
    return this.http.get(`${this.base_url}/products/${Id}`)
  }
  getsubcategories(catId:any){
    return this.http.get(`${this.base_url}/subcategory/${catId}`)
  }
  getsubproducts(subId:any){
    return this.http.get(`${this.base_url}/products/sub/${subId}`)
  }
}
