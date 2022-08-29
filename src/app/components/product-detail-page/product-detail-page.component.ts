import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product :any={};
  Id:any
  public _image_url =  'http://rjtmobile.com/grocery/images/';
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute) {

    this.Id=this.activatedroute.snapshot.paramMap.get('Id')
    this.dataservice.getproductdetail(this.Id).subscribe((data: any) => {
      this.product = data.data
    })
   }

  ngOnInit(): void {
  }

}
