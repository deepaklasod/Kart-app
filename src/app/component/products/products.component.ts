import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

public productList : any ;
searchKey:string ="";
public filterCategory : any;
constructor(private api : ApiService, private cartService:CartService){}

ngOnInit(): void{
  this.api.getProduct()
  .subscribe(res=>{
    this.productList = res;
    this.filterCategory = res;
    this.productList.forEach((a:any) =>{
      if(a.category === "women's clothing" || a.category === "men's clothing"){
        a.category = "fashion"
      }
      Object.assign(a,{quantity:1,total:a.price});
    });
    console.log(this.productList);
    
      
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })


}
addtoCart(item:any){
  this.cartService.addtoCart(item);

}
filter(category:string){
  this.filterCategory = this.productList
  .filter((a:any)=>{
    if(a.category == category || category ==''){
      return a;
    }
  }
  )

}

}
