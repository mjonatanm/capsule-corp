import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public section_cart: boolean = false;

  get products(){
    return this.service._productToCart;
  }

  constructor( 
    private service:CapsulecorpServiceService 
    ) { }

  ngOnInit(): void {
  }

  deleteItem(id:string){
    this.service.deleteItem(id);
  }

  deleteall(){
    this.service.deleteAll();
  }

}
