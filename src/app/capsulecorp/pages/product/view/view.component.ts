import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulecorpServiceService } from 'src/app/capsulecorp/service/capsulecorp-service.service';
import { NotificationComponent } from '../../../notification/notification.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  stock: number = 0;
  savedMsgText: string = "";
  showSavedMessage:boolean=false;

  get product(){
    var product = this.service._product;
    return product;
  }

  mensajeStock = {
    '=0': 'Stock Agotado',
    '=1': 'Última unidad',
    'other': 'Cantidad disponible: #'
  }

  constructor(
    private activateRoute:ActivatedRoute,
    private service:CapsulecorpServiceService
  ) { }
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      ({ id }) => {
        this.service.getProductobyId(id);
      }
    );
  }

  addremove(valor:number){
    if (this.stock < this.product.stock) {
      this.stock += valor;
    }

    if(this.stock === this.product.stock && valor == -1){
      this.stock += valor;
    }
  }

  addToCart(id:string){
    this.service.addProductToCart(id);
    this.savedMsgText = "Tu producto se sumó al carrito exitosamente";
    this.showmessage();
  }

  addToFavorite(id:string){
    this.service.addProductToFavorite(id);
    this.savedMsgText = "Tu producto se guardó  exitosamente";
    this.showmessage();
  }

  showmessage(){
    this.showSavedMessage = true;
    setTimeout(() => {
      this.showSavedMessage = false;
    }, 3000);
  }

}
