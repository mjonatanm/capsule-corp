import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newresponseproducts } from '../interfaces/response-banpresto.interfaces';
import { NewresponseCate } from '../interfaces/response-categories.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CapsulecorpServiceService {

  public Product        : Newresponseproducts;
  public Products       : Newresponseproducts[] = [];
  public ProductsCart   : Newresponseproducts[] = [];
  public Categories     : NewresponseCate[]     = [];
  public ProductsFavorite   : Newresponseproducts[] = [];
  public CountProduct  = 0;
  public url : string = 'http://localhost:3000/products';
  public url_id : string = 'http://localhost:3000/products/';
  public url_cate : string = 'http://localhost:3000/categories';

  get _categories(){
    return this.Categories;
  }

  get _products(){
    return this.Products;
  }

  get _Totalproducts(){
    return this.CountProduct;
  }

  get _product(){
    return this.Product;
  }

  get _productToCart(){
    return this.ProductsCart;
  }

  get _productToFavorite(){
    return this.ProductsFavorite;
  }

  get countFavorite(){
    return this.ProductsFavorite.length
  }

  get countCart(){
    return this.ProductsCart.length
  }

  constructor( private http:HttpClient ) { 
      this.Categories = JSON.parse( localStorage.getItem('categories') !) || [];
      this.Products = JSON.parse( localStorage.getItem('products') !) || [];
      this.Product = JSON.parse( localStorage.getItem('product') !) || [];
      this.ProductsCart = JSON.parse( localStorage.getItem('cart') !) || [];
      this.ProductsFavorite = JSON.parse( localStorage.getItem('favorite') !) || [];
  }

  addProductToCart(id:string){
    this.http.get<Newresponseproducts[]>("http://localhost:3000/products/",{params:{id}})
      .subscribe( resp => {
        if (this.ProductsCart.some(elem => elem.id === resp[0].id) == false) 
        {        
          this.ProductsCart.push(resp[0]);
          localStorage.setItem('cart', JSON.stringify(this.ProductsCart));
        }        
      })
  }

  deleteItem(id:string){
    this.ProductsCart = this.ProductsCart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(this.ProductsCart))
  }

  deleteAll(){
    this.ProductsCart.splice(0,this.ProductsCart.length);
    localStorage.setItem('cart', JSON.stringify(this.ProductsCart))
  }

  addProductToFavorite(id:string){
    this.http.get<Newresponseproducts[]>("http://localhost:3000/products/",{params:{id}})
    .subscribe( resp => {
      if (this.ProductsFavorite.some(elem => elem.id === resp[0].id) == false) 
      {       
        this.ProductsFavorite.push(resp[0]);
        localStorage.setItem('favorite', JSON.stringify(this.ProductsFavorite))
      }      
    })
  }

  addProductofromFavoriteToCart(id:string){
    this.addProductToCart(id);
    this.deleteItemFavorite(id);
  }

  addAllProductofromFavoriteToCart(ids:string[]){
    ids.forEach(id => {
      this.addProductToCart(id);
    });    
    this.deleteAllFavorite();
  }

  deleteItemFavorite(id:string){
    this.ProductsFavorite = this.ProductsFavorite.filter(item => item.id !== id)
    localStorage.setItem('favorite', JSON.stringify(this.ProductsFavorite))
  }

  deleteAllFavorite(){
    this.ProductsFavorite.splice(0,this.ProductsFavorite.length);
    localStorage.setItem('favorite', JSON.stringify(this.ProductsFavorite))
  }
  //Probados OK.
  getProducts(params:HttpParams){ 

    const _url = `${this.url}?_sort=${params.get('_sort')}&_order=${params.get('_order')}&_page=${params.get('_page')}&_limit=${params.get('_limit')}&q=${params.get('q')}`;

    this.http.get<Newresponseproducts[]>( `${_url}`, {observe: 'response'})
    .subscribe(resp => {
    
    this.Products.splice(0,this.Products.length);
    resp.body?.forEach(resp => {
      this.Products.push(resp);
    });
    this.CountProduct = Number(resp.headers.get('x-total-count')?.toString());
    
    localStorage.setItem('products', JSON.stringify(this.Products))
    });    

  }

  getCategories(){
    this.http.get<NewresponseCate[]>(`${this.url_cate}`)
    .subscribe(resp => {
      this.Categories = resp;
      localStorage.setItem('categories', JSON.stringify(this.Categories))
    });
  }

  getProductobyId(id:string){
    this.http.get<Newresponseproducts[]>(`${this.url_id}`,{params:{id}})
      .subscribe( resp => {
        this.Product = resp[0];
        localStorage.setItem('products', JSON.stringify(this.Product))
      })
  }

  getTotal(){
    this.http.get<Newresponseproducts[]>("http://localhost:3000/products?")
      .subscribe(resp => {
      this.CountProduct = resp.length;
    });  
  }

}
