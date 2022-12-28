import { Component, OnInit } from '@angular/core';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //constructor( private capusuleCorpService:CapsulecorpServiceService ) { }
  constructor( ) { }

  ngOnInit(): void {
  }

}
