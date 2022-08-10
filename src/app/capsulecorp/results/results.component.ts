import { Component } from '@angular/core';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls:['./results.component.css']
})
export class ResultsComponent {

  get products(){
    return this.service._products;
  }

  constructor(private service:CapsulecorpServiceService) {
    this.service.getProducts("");
  }


}
