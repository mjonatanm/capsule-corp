import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Own
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './pages/product/view/view.component';
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
import { NotificationComponent } from './notification/notification.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    LoginComponent,
    ResultsComponent,
    ViewComponent,
    CartComponent,
    FavoriteComponent,
    NotificationComponent
  ],
  exports: [
    ViewComponent,
    CartComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
    MatBadgeModule,
    RouterModule,
    MatPaginatorModule
  ]
})
export class CapsulecorpModule { }
