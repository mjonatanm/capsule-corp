import { Component, OnInit } from '@angular/core';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  get productToFavorite(){
    return this.service._productToFavorite;
  }

  get products(){
    return this.service._productToCart;
  }

  get countCart(){
    return this.service.countCart;
  }

  get countFavorite(){
    return this.service.countFavorite;
  }

  constructor(private service:CapsulecorpServiceService) { }

  ngOnInit(): void {
  }

}
