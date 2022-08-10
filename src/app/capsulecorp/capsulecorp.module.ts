import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Own
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './pages/product/view/view.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ResultsComponent } from './results/results.component';
import { FavoriteComponent } from './favorite/favorite.component'

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    ResultsComponent,
    OrderComponent,
    ViewComponent,
    CartComponent,
    FavoriteComponent
  ],
  exports: [
    MenuComponent,
    ViewComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterModule
  ]
})
export class CapsulecorpModule { }
