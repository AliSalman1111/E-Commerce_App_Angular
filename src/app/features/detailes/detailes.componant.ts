import { ProductDetailesService } from './../products/product-detailes.service';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from '../products/iproduct-details.interface';

@Component({
  selector: 'app-detailes',
  imports: [],
  templateUrl: './detailes.componant.html',
  styleUrl: './detailes.componant.css',
})
export class DetailesComponant implements OnInit{

  private readonly activatedRoute=inject(ActivatedRoute)
  private readonly productDetailesService=inject(ProductDetailesService)

  

  productId:string|null=null

  productDetaileData:WritableSignal<IProductDetails>=signal<IProductDetails>({} as IProductDetails)


ngOnInit(): void {


this.getProductId();

this.getProductDetails()




  


}

  getProductId():void{
    this.activatedRoute.paramMap.subscribe({
    next:(res)=>{

      this.productId=res.get('id')
 console.log(this.productId)

    }


  })
}


getProductDetails():void{
  this.productDetailesService.getSpecificProduct(this.productId).subscribe({
  next:(res)=>{

    this.productDetaileData.set(res.data)

    console.log(this.productDetaileData())

  }
})
}



}
