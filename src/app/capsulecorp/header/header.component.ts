import { Component, OnInit } from '@angular/core';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public countCart = 0;
  public countFavorite = 0;

  get productToFavorite(){
    return this.service._productToFavorite;
  }

  get products(){
    return this.service._productToCart;
  }

  constructor(private service:CapsulecorpServiceService) { }

  ngOnInit(): void {
    this.countCart = this.products.length;
    this.countFavorite = this.productToFavorite.length;
  }

}
