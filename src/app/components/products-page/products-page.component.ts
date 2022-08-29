import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products :any[]=[];
  catId:any;
  subId:any
  subcategories :any[]=[];
  public _image_url =  'http://rjtmobile.com/grocery/images/';
  constructor(public dataservice:DataService,private router:Router,private activatedroute:ActivatedRoute) {
    this.catId=this.activatedroute.snapshot.paramMap.get('catId')
    
    this.dataservice.getproducts(this.catId).subscribe((data: any) => {
      this.products = data.data
    })
    this.dataservice.getsubcategories(this.catId).subscribe((data: any) => {
      this.subcategories = data.data
    })
    
   }
   
  
  ngOnInit(): void {
  }
  productdetailhandler(id:any){
    this.router.navigate(['/products/detail',id])
  }
  getsubcategory(subId:any){
    // this.subId=this.activatedroute.snapshot.paramMap.get('subId')
    this.dataservice.getsubproducts(subId).subscribe((data:any)=>{
      this.products=data.data
    })
  }
}
