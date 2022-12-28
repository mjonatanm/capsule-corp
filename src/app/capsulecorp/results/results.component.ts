import { HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorRequestModel } from '../interfaces/PaginatorRequestModel';
import { CapsulecorpServiceService } from '../service/capsulecorp-service.service';
import { Order } from '../interfaces/Order';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls:['./results.component.css']
})
export class ResultsComponent {

  public _sort : string = '';
  public _order : string = '';
  public _q : string = '';

  paginatorRequest: PaginatorRequestModel = {
    page: "1",
    rowsPage:"10",
    genericFilter:''
  };

  public orderby : Order[] = [
    {
      "id": '1',
      "value": 'low',
      "description": 'Menor precio'
    },
    {
      "id": '2',
      "value": 'high',
      "description": 'Mayor precio'
    },{
      "id": '3',
      "value": 'name',
      "description": 'Nombre'
    }    
  ]

  public filter: string = '';
  public orden: string = '';

  get products(){
    return this.service._products;
  }

  get Totalproducts(){
    return this.service._Totalproducts;
  }
  
  get categories(){
    return this.service._categories;
  }

  constructor(private service:CapsulecorpServiceService) {
    this.service.getTotal();
    const params = new HttpParams()
    .set('_sort', this._sort)
    .set('_order', this._order)
    .set('_page', this.paginatorRequest.page)
    .set('_limit', this.paginatorRequest.rowsPage)
    .set('q', this._q);

    this.service.getProducts(params);
  }

  cleanfilter(){

    this.paginatorRequest.page = '1';
    this.paginatorRequest.rowsPage = '10';
    this._sort = '';
    this._order = '';
    this._q = '';

    const params = new HttpParams()
    .set('_sort', this._sort)
    .set('_order', this._order)
    .set('_page', this.paginatorRequest.page)
    .set('_limit', this.paginatorRequest.rowsPage)
    .set('q', this._q);

    this.service.getProducts(params);
  }

  OnPageChange(event:PageEvent){

    this.paginatorRequest.page = (event.pageIndex + 1).toString();
    this.paginatorRequest.rowsPage = event.pageSize.toString();

    this.getParams(this.filter);

    const params = new HttpParams()
      .set('_sort', this._sort)
      .set('_order', this._order)
      .set('_page', this.paginatorRequest.page)
      .set('_limit', this.paginatorRequest.rowsPage)
      .set('q', this._q);

    this.service.getProducts(params);
  }

  filtrar(filtro:string){    

    this.getParams(filtro);

    const params = new HttpParams()
      .set('_sort', this._sort)
      .set('_order', this._order)
      .set('_page', this.paginatorRequest.page)
      .set('_limit', this.paginatorRequest.rowsPage)
      .set('q', this._q);

    this.service.getProducts(params);
  }

  getParams(param:string){

    if (param == 'high' || param == 'low' || param == 'name')
    {    
      switch (param){
        case 'high':
          this._sort = 'price';
          this._order = 'desc';
          break;
        case 'low':
          this._sort = 'price';
          this._order = 'asc';
          break;
        case 'name':
          this._sort = 'name';
          this._order = 'asc';
          break;
      }
    }
    else
    {
      if (this._q === "" || this._q != param){
        this._q = param;
      }
    }
  }
}
