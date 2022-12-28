import { Component } from '@angular/core';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{

  constructor(private service:CapsulecorpServiceService) { }

  filter(order:string){
    this.service.OrderProducts(order);
  }

}
