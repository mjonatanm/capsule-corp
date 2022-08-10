import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulecorpServiceService } from 'src/app/capsulecorp/service/capsulecorp-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  stock: number = 0;

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
  }

  addToCart(id:string){
    this.service.addProductToCart(id);
  }

  addToFavorite(id:string){
    this.service.addProductToFavorite(id);
  }

}
