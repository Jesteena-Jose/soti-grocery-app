import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {

  subcategories :any[]=[];
  catId:any
  public _image_url =  'http://rjtmobile.com/grocery/images/';
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) {

    this.catId=this.activatedroute.snapshot.paramMap.get('catId')
    this.dataservice.getsubcategories(this.catId).subscribe((data: any) => {
      this.subcategories = data.data
    })
   }


  ngOnInit(): void {
  }
  getsubcategory(subId:any){
    this.router.navigate(['products/sub/',this.catId,subId])
  }

}
