import { Component } from '@angular/core';
import { CapsulecorpServiceService } from '../../capsulecorp/service/capsulecorp-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.css']
})
export class SidebarComponent {

  get categories(){
    return this.service._categories;
  }

  constructor(private service:CapsulecorpServiceService) {
    this.service.getCategories();
   }

   filtrar(argumento:string){
     this.service.getProducts(argumento);
   }

   cleanfilter(){
    this.service.getProducts("");
   }

}
