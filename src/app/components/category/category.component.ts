import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories :any[]=[];
  public _image_url =  'http://rjtmobile.com/grocery/images/';
  constructor(private dataservice:DataService,private router:Router) {
    this.dataservice.getcategories().subscribe((data: any) => {
      this.categories = data.data
    })
   }

   selectcategory(catId:any){
    this.router.navigate(['/products',catId])
   }

  ngOnInit(): void {
  }

}
