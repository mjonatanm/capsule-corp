import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/CartProduct.interfaces';
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

  get _categories(){
    return this.Categories;
  }

  get _products(){
    return this.Products;
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

  getCategories(){
    this.http.get<NewresponseCate[]>("..//..//../assets/response/response-categories-banpresto.json")
    .subscribe(resp => {
      this.Categories = resp;
      localStorage.setItem('categories', JSON.stringify(this.Categories))
    });
  }

  getProducts(query:string){
    this.http.get<Newresponseproducts[]>("..//..//../assets/response/response-products-banpresto.json")
    .subscribe(resp => {

      if (query != "") {  
        resp = resp.filter(i => i.category.includes(query));
      }

      this.Products = resp;
      localStorage.setItem('products', JSON.stringify(this.Products))
    });
  }

  OrderProducts(order:string){
    console.log("Sort");
    this.http.get<Newresponseproducts[]>("..//..//../assets/response/response-products-banpresto.json")
    .subscribe(resp => {

      switch (order){
        case 'high': resp.sort((a,b) => b.price - a.price); break;
        case 'low': resp.sort((a,b) => a.price - b.price); break;
        case 'name': resp.sort((a,b) => a.name.localeCompare(b.name)); break;
      }      

      resp.forEach(res => {
        console.log(res.price);
      });

      this.Products = resp;
      localStorage.setItem('products', JSON.stringify(this.Products))
    });
  }

  getProductobyId(id:string){
    
    this.http.get<Newresponseproducts[]>("..//..//../assets/response/response-products-banpresto.json")
      .subscribe( resp => {
        resp = resp.filter(i => i.id == id);
        this.Product = resp[0];
        localStorage.setItem('products', JSON.stringify(this.Product))
      })
  }

  addProductToCart(id:string){
    console.log("addProductToCart");
    this.http.get<Newresponseproducts[]>("..//..//../assets/response/response-products-banpresto.json")
      .subscribe( resp => {
        resp = resp.filter(i => i.id == id);

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
    this.http.get<Newresponseproducts[]>("..//..//../assets/response/response-products-banpresto.json")
    .subscribe( resp => {
      resp = resp.filter(i => i.id == id);
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
}
