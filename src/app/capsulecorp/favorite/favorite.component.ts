import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['../cart/cart.component.css']
})
export class FavoriteComponent implements OnInit {

  get productToFavorite(){
    return this.service._productToFavorite;
  }

  constructor(
    private service:CapsulecorpServiceService ) { }

  ngOnInit(): void {
  }

  addtoCart(id:string){
    this.service.addProductofromFavoriteToCart(id);
  }

  addAlltoCart(){
    let selectedIds:string[] = [];
    this.productToFavorite.forEach((product) => selectedIds.push(product.id));
    this.service.addAllProductofromFavoriteToCart(selectedIds);
  }

  deleteItemfavorite(id:string){
    this.service.deleteItemFavorite(id);
  }

  deleteAllFavorite(){
    this.service.deleteAllFavorite();
  }

}
