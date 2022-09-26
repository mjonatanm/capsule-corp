import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  savedMsgText: string = "";
  showSavedMessage:boolean=false;

  get productToFavorite(){
    return this.service._productToFavorite;
  }

  constructor(
    private service:CapsulecorpServiceService ) { }

  ngOnInit(): void {
  }

  addtoCart(id:string){
    this.service.addProductofromFavoriteToCart(id);
    this.savedMsgText = "Tu producto se sumó al carrito exitosamente";
    this.showmessage();
  }

  addAlltoCart(){
    let selectedIds:string[] = [];
    this.productToFavorite.forEach((product) => selectedIds.push(product.id));
    this.service.addAllProductofromFavoriteToCart(selectedIds);
    this.savedMsgText = "Tus productos se sumaron al carrito exitosamente";
    this.showmessage();
  }

  deleteItemfavorite(id:string){
    this.service.deleteItemFavorite(id);
    this.savedMsgText = "Tu guardado fue eliminado exitosamente";
    this.showmessage();
  }

  deleteAllFavorite(){
    this.service.deleteAllFavorite();
    this.savedMsgText = "Tus guardados fueron eliminados exitosamente";
    this.showmessage();
  }

  showmessage(){
    this.showSavedMessage = true;
    setTimeout(() => {
      this.showSavedMessage = false;
    }, 3000);
  }
}
