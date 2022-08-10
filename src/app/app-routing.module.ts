import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './capsulecorp/pages/product/view/view.component';
import { MenuComponent } from './capsulecorp/menu/menu.component';
import { CartComponent } from './capsulecorp/cart/cart.component';
import { FavoriteComponent } from './capsulecorp/favorite/favorite.component';

const routes: Routes = [
  {
    path:'',
    component: MenuComponent,
    pathMatch:'full'
  },
  {
    path:'products/:id',
    component: ViewComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'favorite',
    component: FavoriteComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
